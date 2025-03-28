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

import SignUpForm from './signup-form'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: `Sign Up - ${APP_NAME}`,
}

export default async function SignUp({
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
          <CardTitle className="sm:text-lg md:text-xl flex flex-col items-center">
            <Link href="/">
              <Image
                src="/assets/icons/logo.jpg"
                width={70}
                height={70}
                alt={`${APP_NAME} logo`}
              />
            </Link>
            Welcome to Fadfar Create Account
          </CardTitle>
          <CardDescription className="text-dark">
            Enter your information below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  )
}
