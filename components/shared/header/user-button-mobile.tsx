import Link from 'next/link'
import { auth } from '@/auth'
import { Button } from '@/components/ui/button'
import { SignOut } from '@/lib/actions/user.actions'

export default async function UserButtonMobile() {
  const session = await auth()

  return (
    <div className="block md:hidden">
      {!session ? (
        <Link href="/api/auth/signin">
          <Button
            className="w-full text-left bg-black text-white hover:bg-gray-600 mt-4 mb-6"
            style={{
              padding: '15px 0px',
            }}
            variant="ghost"
          >
            Sign In
          </Button>
        </Link>
      ) : (
        <div className="flex flex-col gap-2 items-start text-left">
          {' '}
          {/* Ensures left alignment */}
          <Link
            className="w-full text-black hover:text-black"
            href="/user/profile"
          >
            {session.user.name}
            <br />
            {session.user.email}
          </Link>
          <Link
            className="w-full text-black hover:text-black"
            href="/user/profile"
          >
            My Account
          </Link>
          <Link
            className="w-full text-black hover:text-black"
            href="/user/change-password"
          >
            Change Password
          </Link>
          <Link
            className="w-full text-black hover:text-black"
            href="/user/orders"
          >
            Order History
          </Link>
          {session.user.role === 'admin' && (
            <Link
              className="w-full text-black hover:text-black"
              href="/admin/overview"
            >
              Admin
            </Link>
          )}
          <form action={SignOut} className="w-full">
            <Button
              className="w-full text-left bg-black text-white hover:bg-gray-600 mt-4 mb-6"
              style={{
                padding: '15px 0px',
              }}
              variant="ghost"
            >
              Sign Out
            </Button>
          </form>
        </div>
      )}
    </div>
  )
}
