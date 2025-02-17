'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

import ProfileForm from './profile-form'

export default function ProfilePage() {
  const { data: session, status } = useSession()

  // Handle loading state or redirect if session is not available
  if (status === 'loading') {
    return <div>Loading...</div> // You can add a loading state here
  }

  if (!session) {
    redirect('/api/auth/signin') // Redirect if not authenticated
  }

  return (
    <div className="max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-semibold text-gray-600 my-4">Profile</h1>
      <ProfileForm />
    </div>
  )
}
