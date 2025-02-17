import Link from 'next/link'
import { auth } from '@/auth'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SignOut } from '@/lib/actions/user.actions'
import {
  CircleUserRound,
  LockKeyhole,
  LogOut,
  Logs,
  MailCheck,
  Shield,
  UserRound,
} from 'lucide-react'

export default async function UserButton() {
  const session = await auth()
  if (!session)
    return (
      <Link href="/api/auth/signin">
        <Button
          variant="ghost"
          className="relative ml-0 text-white hover:text-gray-300 hover:bg-gray-500"
          style={{ color: '#ffffff', fontSize: '1.0rem' }}
        >
          <UserRound />
          Sign In
        </Button>
      </Link>
    )
  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="relative ml-0 text-white hover:text-gray-300 hover:bg-gray-500"
              style={{ color: '#ffffff', fontSize: '1.0rem' }}
            >
              <UserRound />
              {session.user.name}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-60" align="start" forceMount>
          <DropdownMenuLabel className="font-normal">
            <Link href="/user/profile">
              <Button
                variant="ghost"
                className="w-full ml-0 pl-0 text-black hover:text-black"
                style={{ color: '#555555', fontSize: '1.0rem' }}
              >
                <MailCheck />
                &nbsp; {session.user.email}
              </Button>
            </Link>
          </DropdownMenuLabel>

          <DropdownMenuItem>
            <Link href="/user/profile">
              <Button
                variant="ghost"
                className="w-full text-black hover:text-black"
                style={{ color: '#555555', fontSize: '1.0rem' }}
              >
                <CircleUserRound />
                &nbsp;My Account
              </Button>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link href="/user/change-password">
              <Button
                variant="ghost"
                className="w-full text-black hover:text-black"
                style={{ color: '#555555', fontSize: '1.0rem' }}
              >
                <LockKeyhole />
                &nbsp;Change Password
              </Button>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link href="/user/orders">
              <Button
                variant="ghost"
                className="w-full text-black hover:text-black"
                style={{ color: '#555555', fontSize: '1.0rem' }}
              >
                <Logs />
                &nbsp;Order History
              </Button>
            </Link>
          </DropdownMenuItem>

          {session.user.role === 'admin' && (
            <DropdownMenuItem>
              <Link href="/admin/overview">
                <Button
                  variant="ghost"
                  className="w-full text-black hover:text-black"
                  style={{ color: '#555555', fontSize: '1.0rem' }}
                >
                  <Shield />
                  &nbsp;Admin
                </Button>
              </Link>
            </DropdownMenuItem>
          )}

          <DropdownMenuItem className="p-0 mb-1">
            <form action={SignOut} className="w-full">
              <Button
                className="w-full py-4 pl-7 h-4 justify-start text-black hover:text-gray-600"
                style={{ fontSize: '1.0rem' }}
                variant="ghost"
              >
                <LogOut />
                &nbsp;Sign Out
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
