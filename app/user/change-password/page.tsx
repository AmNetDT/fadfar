import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { SessionProvider } from 'next-auth/react'

import { auth } from '@/auth'
import { APP_NAME } from '@/lib/constants'

import PasswordForm from './change-password-form'

export const metadata: Metadata = {
  title: `Customer Profile - ${APP_NAME}`,
}

export default async function PasswordPage() {
  const session = await auth()
  if (!session) {
    redirect('/api/auth/signin')
  }
  return (
    <SessionProvider session={session}>
      <div className="max-w-md  mx-auto space-y-4">
        <h1 className="text-2xl font-semibold text-gray-600 my-4">
          Change Password
        </h1>
        <PasswordForm />
      </div>
    </SessionProvider>
  )
}
