import { signUpAction } from '@/actions/signUp.action'
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
import { useActionState, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { toast } from 'react-toastify'

export const SignUpView = () => {
    const navigate = useNavigate()

    const [formState, formAction, isPending] = useActionState(
        signUpAction,
        null
    )
    const [formData, setFormData] = useState({
        user_name: '',
        email: '',
        password: '',
    })

    useEffect(() => {
        if (formState) {
            const { meta, _ } = formState
            if (meta?.status == 201) {
                navigate('/')
            } else {
                toast.error(meta?.message)
            }
        }
    }, [formState, navigate])

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
                    <CardTitle>Register to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to Register to your account
                    </CardDescription>
                    <CardAction>
                        <Button asChild variant="link">
                            <NavLink to="/">Sign In</NavLink>
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="grid gap-1.5">
                        <Label htmlFor="user_name">User Name</Label>
                        <Input
                            value={formData.user_name}
                            onChange={handleFormDataChange}
                            name="user_name"
                            placeholder="User Name"
                        />
                        {formState?.data?.fieldErrors?.user_name?.length >
                            0 && (
                            <Label
                                htmlFor="user_name"
                                className="text-rose-500 text-sm"
                            >
                                {formState?.data?.fieldErrors?.user_name[0]}
                            </Label>
                        )}
                    </div>
                    <div className="grid gap-1.5">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            type="email"
                            value={formData.email}
                            onChange={handleFormDataChange}
                            name="email"
                            placeholder="Email address"
                        />
                        {formState?.data?.fieldErrors?.email?.length > 0 && (
                            <Label
                                htmlFor="email"
                                className="text-rose-500 text-sm"
                            >
                                {formState?.data?.fieldErrors?.email[0]}
                            </Label>
                        )}
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
                        {formState?.data?.fieldErrors?.password?.length > 0 && (
                            <Label
                                htmlFor="password"
                                className="text-rose-500 text-sm"
                            >
                                {formState?.data?.fieldErrors?.password[0]}
                            </Label>
                        )}
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
