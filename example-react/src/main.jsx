import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/app.css'
import { RouterProvider } from 'react-router'
import { Router } from './route/router'
import { AuthProvider } from './context/auth-provider'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={Router} />
        </AuthProvider>
    </StrictMode>
)
