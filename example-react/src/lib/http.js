import axios from 'axios'
import { readFromLocalStorage } from './persistance'

const http = axios.create({
    baseURL: `${import.meta.env.VITE_FAKE_SERVER_JSON}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
})

http.interceptors.request.use(
    (config) => {
        const authFake = readFromLocalStorage('fake_auth')

        if (authFake) {
            config.headers['Authorization'] = `Bearer ${authFake?.token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default http
