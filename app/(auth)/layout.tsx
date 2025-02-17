import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 wrapper pt-6 mt-6">{children}</main>
      <Footer />
    </div>
  )
}
