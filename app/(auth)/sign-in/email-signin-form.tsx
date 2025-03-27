'use client'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SignInWithEmail } from '@/lib/actions/user.actions'
import { Link } from '@react-email/components'
// import Link from 'next/link'
import { useFormStatus } from 'react-dom'

const SignInButton = () => {
  const { pending } = useFormStatus()
  return (
    <Button
      disabled={pending}
      className="link border-2 border-orange-500 p-4 transition duration-150 rounded-none mb-0 text-center"
      variant="default"
      style={{ width: '100%', height: '50%' }}
    >
      {pending ? 'sending email...' : 'Sign In with email'}
    </Button>
  )
}
export default function EmailSigninForm() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'

  return (
    <form action={SignInWithEmail}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-4">
        <div className="space-y-2 text-center">
          <Label htmlFor="user_email">Email</Label>
          <Input
            id="user_email"
            name="email"
            placeholder="m@example.com"
            required
            type="email"
            style={{ width: '100%', height: '50%' }}
            className="link border-2 border-orange-500 p-4 transition duration-150 bg-orange-50 rounded-none mb-10 text-center"
          />
        </div>
        <div className="space-y-2">
          <SignInButton />
        </div>
      </div>
      <div className="my-5">
        Already have an account?{' '}
        <Link
          target="_self"
          className="link"
          href={`/sign-in?callbackUrl=${encodeURIComponent(callbackUrl)}`}
        >
          Sign In
        </Link>
      </div>
    </form>
  )
}
