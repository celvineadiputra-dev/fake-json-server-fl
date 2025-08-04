import http from '@/lib/http'

export const signInAction = async (prevState, formData) => {
    try {
        const payload = {
            email: formData.get('email'),
            password: formData.get('password'),
        }

        const response = await http.post('/auth/signIn', payload)

        return response.data
    } catch (e) {
        console.log(e)
    }
}
