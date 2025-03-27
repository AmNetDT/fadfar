'use client'
import { Button } from '@/components/ui/button'
import { SignInWithGoogle } from '@/lib/actions/user.actions'
import { Img } from '@react-email/components'
import { useFormStatus } from 'react-dom'

export default function GoogleSignInForm() {
  const SignInButton = () => {
    const { pending } = useFormStatus()
    return (
      <Button
        disabled={pending}
        className="link border-2 border-orange-500 p-4 transition duration-150 rounded-none mb-10"
        variant="default"
        style={{ width: '100%', height: '50%' }}
      >
        <Img
          className="w-6 h-6"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span>
          {pending ? 'Redirecting to Google...' : 'Sign In with Google'}
        </span>
      </Button>
    )
  }
  return (
    <form action={SignInWithGoogle}>
      <SignInButton />
    </form>
  )
}
