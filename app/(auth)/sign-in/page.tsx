import { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { auth } from '@/auth'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { APP_NAME } from '@/lib/constants'
import EmailSigninForm from './email-signin-form'

import CredentialsSignInForm from './credentials-signin-form'
import SeparatorWithOr from '@/components/shared/separator-or'
import GoogleSignInForm from './google-signin-form'

export const metadata: Metadata = {
  title: `Sign In - ${APP_NAME}`,
}

export default async function SignIn({
  searchParams: { callbackUrl },
}: {
  searchParams: {
    callbackUrl: string
  }
}) {
  const session = await auth()
  if (session) {
    return redirect(callbackUrl || '/')
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <CardTitle className="text-left sm:text-lg md:text-xl">
            Sign In
          </CardTitle>
          <CardDescription className="text-dark">
            Select a method to sign in
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <CredentialsSignInForm />
          <SeparatorWithOr />
          <GoogleSignInForm />
          <SeparatorWithOr />
          <EmailSigninForm />
        </CardContent>
      </Card>
    </div>
  )
}
