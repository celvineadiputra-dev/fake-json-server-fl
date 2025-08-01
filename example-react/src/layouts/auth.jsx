import { Outlet } from 'react-router'

export const AuthLayout = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Outlet />
        </div>
    )
}
