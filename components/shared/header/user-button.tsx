import Link from "next/link";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOut } from "@/lib/actions/user.actions";
import {
  CircleUserRound,
  LockKeyhole,
  LogOut,
  Logs,
  MailCheck,
  Shield,
  UserRound,
} from "lucide-react";

export default async function UserButton() {
  const session = await auth();

  return (
    <div className="flex items-center">
      {!session ? (
        <Link href="/api/auth/signin">
          <Button variant="ghost" className="text-black hover:text-orange-400">
            <UserRound /> Sign In
          </Button>
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="text-gray-600 text-sm hover:text-orange-400 hover:bg-gray-100 p-2"
            >
              <UserRound size={24} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-60" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1 p-2">
                <p className="text-sm font-medium leading-none truncate">
                  {session.user.name}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {session.user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuItem asChild>
              <Link href="/user/profile">
                <div className="flex items-center">
                  <CircleUserRound className="mr-2 h-4 w-4" />
                  <span>My Account</span>
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/user/change-password">
                <div className="flex items-center">
                  <LockKeyhole className="mr-2 h-4 w-4" />
                  <span>Change Password</span>
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/user/orders">
                <div className="flex items-center">
                  <Logs className="mr-2 h-4 w-4" />
                  <span>Order History</span>
                </div>
              </Link>
            </DropdownMenuItem>
            {session.user.role === "admin" && (
              <DropdownMenuItem asChild>
                <Link href="/admin/overview">
                  <div className="flex items-center">
                    <Shield className="mr-2 h-4 w-4" />
                    <span>Admin</span>
                  </div>
                </Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem className="p-0 mb-1" asChild>
              <form action={SignOut} className="w-full">
                <button
                  type="submit"
                  className="w-full text-left py-2 px-4 flex items-center hover:bg-gray-100"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign Out</span>
                </button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}
