import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-1 wrapper pt-6 mt-6 mb-32">{children}</main>
    </div>
  )
}
