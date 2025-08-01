import { Card } from '@/components/ui/card'
import { Outlet } from 'react-router'
import { Bounce, ToastContainer } from 'react-toastify'

export const GuestLayout = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <Card className="w-full max-w-sm">
                <Outlet />
            </Card>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    )
}
