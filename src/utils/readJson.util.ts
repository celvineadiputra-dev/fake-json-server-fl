import chalk from 'chalk'
import fs from 'fs/promises'

export const readJsonFile = async ({ path }: { path: string }) => {
    try {
        const jsonString = await fs.readFile(path, 'utf8')
        const data = JSON.parse(jsonString)

        return data
    } catch (error) {
        console.error(chalk.red.bold(error))
        throw new Error('Failed read json file')
    }
}
