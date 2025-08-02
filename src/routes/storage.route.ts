import { Hono } from 'hono'
import { apiResponse } from '../utils/apiResponse.util.js'
import editJsonFile from 'edit-json-file'
import DbFakePath from '../config/db.js'
import { storeFile } from '../utils/storeFile.util.js'
import { randomUUID } from 'crypto'

const StorageRoute = new Hono()

StorageRoute.post('/', async (c) => {
    try {
        const key = c.req.param('key')

        if (!key) {
            return apiResponse(c, 402, 'Key is required')
        }

        const body = await c.req.parseBody()

        const fileUpload = body['image'] as File

        const dbFile = editJsonFile(DbFakePath, {
            autosave: true,
        })

        const filePath = await storeFile(fileUpload)
        if (!filePath) return apiResponse(c, 500, 'File storage failed')

        const { image, ...data } = body
        const cleanData = { ...data, image_url: filePath, id: randomUUID() }

        dbFile.append(key, cleanData)

        return apiResponse(c, 200, `Success create new ${key}`, cleanData)
    } catch (err) {
        console.error('Search error:', err)
        return apiResponse(c, 500, 'Internal server error')
    }
})

StorageRoute.on(['PUT', 'PATCH'], '/:id', async (c) => {
    try {
        const updateId = c.req.param('id')
        const key = c.req.param('key')

        if (!key) {
            return apiResponse(c, 402, 'Key is required')
        }

        const body = await c.req.parseBody()
        const fileUpload = body['image'] as File

        const dbFile = editJsonFile(DbFakePath)
        const existingData = dbFile.get(key) || []

        const targetIndex = existingData.findIndex(
            (item) => item.id === updateId
        )

        if (targetIndex === -1) {
            return apiResponse(c, 404, 'Item not found')
        }

        const filePath = await storeFile(fileUpload)
        if (!filePath) return apiResponse(c, 500, 'File storage failed')

        const { id, image, ...updateFields } = body
        const updatedItem = {
            ...existingData[targetIndex],
            ...updateFields,
            image_url: filePath,
        }

        existingData[targetIndex] = updatedItem

        dbFile.set(key, existingData)
        dbFile.save()

        return apiResponse(c, 200, 'Item updated successfully')
    } catch (err) {
        console.error('Update error:', err)
        return apiResponse(c, 500, 'Internal server error')
    }
})

export default StorageRoute
