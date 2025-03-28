'use client'

import { useFormState, useFormStatus } from 'react-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signInWithCredentials } from '@/lib/actions/user.actions'
import { signInDefaultValues } from '@/lib/constants'

export default function CredentialsSignInForm() {
  const [data, action] = useFormState(signInWithCredentials, {
    message: '',
    success: false,
  })

  const SignInButton = () => {
    const { pending } = useFormStatus()
    return (
      <Button
        disabled={pending}
        style={{ width: '100%', height: '50%' }}
        className="link p-4 transition duration-150 bg-orange-500 rounded-none mb-10 text-center text-1xl"
        variant="default"
      >
        {pending ? 'Submitting...' : 'Sign In with credentials'}
      </Button>
    )
  }

  return (
    <form action={action}>
      <div className="space-y-6">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="m@example.com"
            required
            type="email"
            defaultValue={signInDefaultValues.email}
            style={{ width: '100%', height: '50%' }}
            className="link border-2 border-orange-500 p-4 transition duration-150 bg-orange-50 rounded-none mb-10 text-center"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            required
            type="password"
            defaultValue={signInDefaultValues.password}
            style={{ width: '100%', height: '50%' }}
            className="link border-2 border-orange-500 p-4 transition duration-150 bg-orange-50 rounded-none mb-10 text-center"
          />
        </div>
        <div>
          <SignInButton />
        </div>

        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}
        {!data && (
          <div className="text-center text-destructive">
            Unknown error happened.{' '}
            <Button onClick={() => window.location.reload()}>
              Please reload
            </Button>
          </div>
        )}
      </div>
    </form>
  )
}
