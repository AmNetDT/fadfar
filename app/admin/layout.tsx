import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MainNav from './main-nav'
import Menu from '@/components/shared/header/menu'
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <body style={{ backgroundColor: '#1d132d' }}>
          <div
            className="w-full border-b"
            style={{ backgroundColor: '#1d132d' }}
          >
            <div className="flex h-16 items-center pt-4 px-4">
              <Link href="/" className="w-36">
                <Image
                  src="/assets/icons/logo.png"
                  width={70}
                  height={70}
                  alt={`${APP_NAME} logo`}
                />
              </Link>
              <MainNav className="mx-6" />
              <div className="ml-auto flex items-center space-x-4">
                <Menu />
              </div>
            </div>

            <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>
          </div>
        </body>
      </html>
    </>
  )
}
