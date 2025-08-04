import { signInAction } from '@/actions/signIn.action'
import { Button } from '@/components/ui/button'
import {
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AuthContext } from '@/context/context'
import { useActionState, useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { toast } from 'react-toastify'

export const SignInView = () => {
    const { handlerSetAuth } = useContext(AuthContext)

    const navigate = useNavigate()

    const [formState, formAction, isPending] = useActionState(
        signInAction,
        null
    )
    const [formData, setFormData] = useState({
        email: 'example@mail.com',
        password: '12345678',
    })

    useEffect(() => {
        if (formState) {
            const { meta, data } = formState
            if (meta?.status == 200) {
                handlerSetAuth(data)

                navigate('dashboard')
            } else {
                toast.error(meta?.message)
            }
        }
    }, [formState, handlerSetAuth, navigate])

    const handleFormDataChange = (event) => {
        const { name, value } = event.target

        setFormData((currentState) => {
            return {
                ...currentState,
                [name]: value,
            }
        })
    }

    return (
        <form action={formAction}>
            <div className="space-y-3">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                    <CardAction>
                        <Button asChild variant="link">
                            <NavLink to="sign-up">Sign Up</NavLink>
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="grid gap-1.5">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            type="email"
                            value={formData.email}
                            onChange={handleFormDataChange}
                            name="email"
                            placeholder="Email address"
                        />
                    </div>
                    <div className="grid gap-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="password"
                            value={formData.password}
                            onChange={handleFormDataChange}
                            name="password"
                            placeholder="Password"
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full"
                    >
                        {isPending ? 'Loadig...' : 'Login'}
                    </Button>
                </CardFooter>
            </div>
        </form>
    )
}
