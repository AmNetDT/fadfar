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
    <Button disabled={pending} className="w-full" variant="default">
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
        <div className="space-y-2">
          <Label htmlFor="user_email">Email</Label>
          <Input
            id="user_email"
            name="email"
            placeholder="m@example.com"
            required
            type="email"
          />
        </div>
        <div className="space-y-2">
          <SignInButton />
        </div>
      </div>
      <div className="my-5">
        Don&apos;t have an account?{' '}
        <Link
          target="_self"
          className="link"
          href={`/sign-up?callbackUrl=${encodeURIComponent(callbackUrl)}`}
        >
          Sign Up
        </Link>
      </div>
    </form>
  )
}
