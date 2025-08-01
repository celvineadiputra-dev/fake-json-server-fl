import axios from 'axios'

const http = axios.create({
    baseURL: `http://localhost:${import.meta.env.VITE_FAKE_SERVER_JSON_PORT}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
})

http.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default http
