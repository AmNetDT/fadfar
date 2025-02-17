import type { Metadata } from 'next'
import './globals.css'

import React from 'react'
import { Toaster } from '@/components/ui/toaster'
import ScrollToTop from '@/components/shared/scrolltotop'
import { APP_DESCRIPTION, APP_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${APP_NAME} - ${APP_DESCRIPTION}`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        {children}
        <Toaster />
        <ScrollToTop />
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
