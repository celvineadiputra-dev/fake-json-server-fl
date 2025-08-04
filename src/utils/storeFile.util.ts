import { randomUUID } from 'crypto'
import { writeFile } from 'fs/promises'
import path from 'path'

export const storeFile = async (fileStore: File) => {
    try {
        const uuid = randomUUID()

        const buffer = await fileStore.arrayBuffer()
        const fileName = `${uuid}${path.extname(fileStore.name)}`

        const storePath = path.join('./storage/uploads', fileName)

        await writeFile(storePath, Buffer.from(buffer))

        return storePath
    } catch (error) {
        console.log(error)

        throw new Error('Failed store file')
    }
}
