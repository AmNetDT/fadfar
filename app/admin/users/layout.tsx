import React from 'react'
import { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'

import { APP_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Admin Users - ${APP_NAME}`,
}

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <SessionProvider>
        <div>{children}</div>
      </SessionProvider>
    </div>
  )
}
