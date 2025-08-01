import { useEffect, useState } from 'react'
import { AuthContext } from './context'
import { readFromLocalStorage, writeToLocalStorage } from '@/lib/persistance'

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: null,
        user: {
            email: null,
            profile_picture: null,
            user_name: null,
        },
    })

    useEffect(() => {
        const currentUser = readFromLocalStorage('fake_auth')

        handlerSetAuth(currentUser)
    }, [])

    const handlerSetAuth = (value) => {
        setAuth(value)

        writeToLocalStorage('fake_auth', value)
    }

    return (
        <AuthContext value={{ auth, handlerSetAuth }}>{children}</AuthContext>
    )
}
