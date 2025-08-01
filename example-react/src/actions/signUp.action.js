import http from '@/lib/http'

export const signUpAction = async (prevState, formData) => {
    try {
        const payload = {
            user_name: formData.get('user_name'),
            email: formData.get('email'),
            password: formData.get('password'),
        }

        const response = await http.post('/auth/signUp', payload)

        return response.data
    } catch (e) {
        console.log(e)
    }
}
