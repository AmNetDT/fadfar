'use client'
import { Button } from '@/components/ui/button'
import { SignInWithGoogle } from '@/lib/actions/user.actions'
import { Img } from '@react-email/components'
import { useFormStatus } from 'react-dom'

export default function GoogleSignInForm() {
  const SignInButton = () => {
    const { pending } = useFormStatus()
    return (
      <Button disabled={pending} className="w-full" variant="default">
        <div className="flex items-center justify-center h-screen dark:bg-gray-800">
          <button className="px-4 py-2 flex gap-2 text-white dark:text-slate-200 transition duration-150">
            <Img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span>
              {pending ? 'Redirecting to Google...' : 'Sign In with Google'}
            </span>
          </button>
        </div>
      </Button>
    )
  }
  return (
    <form action={SignInWithGoogle}>
      <SignInButton />
    </form>
  )
}
