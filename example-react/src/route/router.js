import { createBrowserRouter, redirect } from 'react-router'

import { GuestLayout } from '@/layouts/guest'
import { AuthLayout } from '@/layouts/auth'

import { SignInView } from '@/views/auth/signIn'
import { readFromLocalStorage } from '@/lib/persistance'

export const Router = createBrowserRouter([
    {
        Component: GuestLayout,
        children: [
            {
                index: true,
                Component: SignInView,
            },
            {
                path: 'sign-up',
                lazy: {
                    Component: async () =>
                        (await import('@/views/auth/signUp')).SignUpView,
                },
            },
        ],
    },
    {
        path: 'dashboard',
        Component: AuthLayout,
        loader: () => {
            const authFake = readFromLocalStorage('fake_auth')
            if (!authFake) {
                return redirect('/')
            }
            return
        },
        children: [
            {
                index: true,
                lazy: {
                    Component: async () =>
                        (await import('@/views/dashboard')).DashboardView,
                },
            },
        ],
    },
])
