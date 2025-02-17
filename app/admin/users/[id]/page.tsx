// Import necessary modules and components
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getUserById } from '@/lib/actions/user.actions'
import { APP_NAME } from '@/lib/constants'
import UpdateUserForm from './update-user-form'

// Page metadata
export const metadata: Metadata = {
  title: `Update User - ${APP_NAME}`,
}

// Component to render the Update User page
export default async function UpdateUserPage({
  params: { id },
}: {
  params: { id: string }
}) {
  // Fetch user data based on the provided ID
  const user = await getUserById(id)

  // Handle case where user is not found
  if (!user) {
    notFound()
  }

  // Render the update user form
  return (
    <div className="container mx-auto max-w-lg space-y-8 py-8">
      <h1 className="text-2xl font-semibold text-gray-300 my-4">Update User</h1>
      <UpdateUserForm
        user={{
          ...user,
          name: user.name ?? '', // Convert null to an empty string
          email: user.email ?? '', // Ensure email is a string
          role: user.role ?? 'user', // Provide a default role if needed
        }}
      />
    </div>
  )
}
