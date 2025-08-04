import editJsonFile from 'edit-json-file'
import { Hono } from 'hono'
import DbFakePath from '../config/db.js'
import 'dotenv/config'
import { apiResponse } from '../utils/apiResponse.util.js'
import { randomUUID } from 'crypto'

const mainRoute = new Hono()

mainRoute.get('/', async (c) => {
    const key = c.req.param('key')

    const { size = '5', page = '1' } = c.req.query()
    const pageNumber = parseInt(page)
    const pageSize = parseInt(size)

    const dbFile = editJsonFile(DbFakePath)
    const allData = dbFile.get(key).reverse() || []

    const startIndex = (pageNumber - 1) * pageSize
    const endIndex = startIndex + pageSize

    const paginateData = allData.slice(startIndex, endIndex)

    return apiResponse(c, 200, 'Paginate Response', {
        page: pageNumber,
        size: pageSize,
        total: allData.length,
        totalPages: Math.ceil(allData.length / pageSize),
        data: paginateData,
    })
})

mainRoute.get('/search/:field', async (c) => {
    try {
        const key = c.req.param('key')
        const field = c.req.param('field')

        const { size = '5', page = '1', q = '' } = c.req.query()
        const pageNumber = parseInt(page, 10)
        const pageSize = parseInt(size, 10)

        const dbFile = editJsonFile(DbFakePath)
        const allData = dbFile.get(key) || []

        let filteredData = []

        if (isNaN(parseInt(q))) {
            let searchQuery = q.toString().replaceAll(' ', '').toLowerCase()

            filteredData = allData.filter((item) => {
                const value = item[field].toString().replaceAll(' ', '')
                return value?.toString().toLowerCase().includes(searchQuery)
            })
        } else {
            filteredData = allData.filter((item) => {
                return item[field] == parseInt(q)
            })
        }

        const startIndex = (pageNumber - 1) * pageSize
        const endIndex = startIndex + pageSize
        const paginatedData = filteredData.slice(startIndex, endIndex)

        return apiResponse(c, 200, 'Paginate Response', {
            page: pageNumber,
            size: pageSize,
            total: filteredData.length,
            totalPages: Math.ceil(filteredData.length / pageSize),
            data: paginatedData,
        })
    } catch (err) {
        console.error('Search error:', err)
        return apiResponse(c, 500, 'Internal server error')
    }
})

mainRoute.get('/all', async (c) => {
    try {
        const key = c.req.param('key')

        const dbFile = editJsonFile(DbFakePath)
        const allData = dbFile.get(key) || []

        return apiResponse(c, 200, `List ${key}`, allData)
    } catch (err) {
        console.error('Search error:', err)
        return apiResponse(c, 500, 'Internal server error')
    }
})

mainRoute.get('/:id', async (c) => {
    try {
        const key = c.req.param('key')
        const id = c.req.param('id')

        const dbFile = editJsonFile(DbFakePath)
        const allData = dbFile.get(key) || []

        const filterData = allData.filter((item) => {
            return item.id === id
        })

        return apiResponse(c, 200, 'Paginate Response', filterData)
    } catch (err) {
        console.error('Search error:', err)
        return apiResponse(c, 500, 'Internal server error')
    }
})

mainRoute.post('/', async (c) => {
    try {
        const key = c.req.param('key')

        if (!key) {
            return apiResponse(c, 402, 'Key is required')
        }

        const body = await c.req.json()

        const dbFile = editJsonFile(DbFakePath, {
            autosave: true,
        })

        body.id = randomUUID()
        body.price = Number(body.price)
        body.is_active = body.is_active == 'true'

        dbFile.append(key, { ...body })

        return apiResponse(c, 200, `Success create new ${key}`, body)
    } catch (err) {
        console.error('Search error:', err)
        return apiResponse(c, 500, 'Internal server error')
    }
})

mainRoute.on(['PUT', 'PATCH'], '/:id', async (c) => {
    try {
        const updateId = c.req.param('id')
        const key = c.req.param('key')
        const body = await c.req.json()

        if (!key) {
            return apiResponse(c, 402, 'Key is required')
        }

        const dbFile = editJsonFile(DbFakePath)
        const existingData = dbFile.get(key) || []

        const targetIndex = existingData.findIndex(
            (item) => item.id === updateId
        )

        if (targetIndex === -1) {
            return apiResponse(c, 404, 'Item not found')
        }

        const { id, ...updateFields } = body

        const updatedItem = {
            ...existingData[targetIndex],
            ...updateFields,
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

mainRoute.delete('/:id', async (c) => {
    try {
        const id = c.req.param('id')
        const key = c.req.param('key')

        if (!key) {
            return apiResponse(c, 402, 'Key is required')
        }

        const dbFile = editJsonFile(DbFakePath)
        const existingData = dbFile.get(key) || []

        const updatedData = existingData.filter((item) => item.id !== id)

        dbFile.set(key, updatedData)
        dbFile.save()

        return apiResponse(c, 200, 'Item deleted successfully')
    } catch (err) {
        console.error('Delete error:', err)
        return apiResponse(c, 500, 'Internal server error')
    }
})

export default mainRoute
