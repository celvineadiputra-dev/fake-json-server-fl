import editJsonFile from 'edit-json-file'

export const AuthFakePath = `src/fake/auth.fake.json`

export const Auth = async (email: string, password: string) => {
    const file = editJsonFile(AuthFakePath)

    const users: {
        user_name: string
        email: string
        password: string
        profile_picture?: string
    }[] = file.get('users')

    const user = users.filter((user) => {
        if (user.email == email && user.password == password) {
            return user
        }
    })

    return user[0] ?? null
}
