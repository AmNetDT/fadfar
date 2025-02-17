'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const links = [
  { title: 'Dashboard', href: '/admin/overview' },
  { title: 'Products Manager', href: '/admin/products' },
  { title: 'Orders', href: '/admin/orders' },
  { title: 'Users Manager', href: '/admin/users' },
  { title: 'Settings', href: '/admin/settings' },
]

export default function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      aria-label="Main Navigation"
      {...props}
    >
      {links.map((item) => {
        const isActive = pathname.includes(item.href) // check if the current pathname includes the link href

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-label={item.title} // improve accessibility
            className={cn(
              'text-sm font-medium transition-colors text-white hover:text-yellow-500',
              isActive ? 'text-yellow-500' : 'text-muted-foreground'
            )}
          >
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}
