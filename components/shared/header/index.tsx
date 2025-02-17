import Image from 'next/image'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'

import Menu from './menu'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { MenuIcon, ShoppingCartIcon } from 'lucide-react' // Import Cart Icon
import { getAllCategories } from '@/lib/actions/product.actions'
import Search from './search'
import UserButtonMobile from './user-button-mobile'

const Header = async () => {
  const categories = await getAllCategories()

  return (
    <header className="w-full border-b" style={{ backgroundColor: '#1d132d' }}>
      <div className="wrapper flex-between">
        {/* Logo section - always visible */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center mr-4">
            <Image
              src="/assets/icons/logo.png"
              width={70}
              height={70}
              alt={`${APP_NAME} logo`}
              className="block"
            />
          </Link>
        </div>

        {/* Mobile view: Logo + Menu and Cart icons at the top layer, Search below */}
        <div className="md:hidden flex flex-col items-start w-full">
          {/* Logo and Menu + Cart Icon */}
          <div className="flex w-full justify-between items-center mb-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/icons/logo.png"
                width={70}
                height={70}
                alt={`${APP_NAME} logo`}
              />
            </Link>

            <div className="flex items-center">
              {/* Menu Icon */}
              <Drawer direction="left">
                <DrawerTrigger asChild>
                  <Button
                    variant="outline"
                    style={{
                      padding: '10px',
                      backgroundColor: '#1d132d',
                      color: '#ffffff',
                      border: 'solid 1px #ffffff',
                    }}
                  >
                    <MenuIcon />
                  </Button>
                </DrawerTrigger>

                <DrawerContent className="h-full max-w-sm sm:m-0 sm:p-0">
                  <DrawerHeader>
                    {/* UserButton - Visible only on small screens */}
                    <div className="block sm:hidden w-full px-6 mx-0 mb-11">
                      <UserButtonMobile />
                    </div>
                    <DrawerTitle className="text-left ml-4">
                      Select a category
                    </DrawerTitle>
                    <div className="space-y-1">
                      {categories.map((category) => (
                        <Button
                          className="w-full justify-start"
                          variant="ghost"
                          key={category.name}
                          asChild
                          style={{
                            fontSize: '1.2rem',
                          }}
                        >
                          <DrawerClose asChild>
                            <Link href={`/search?category=${category.name}`}>
                              {category.name}
                            </Link>
                          </DrawerClose>
                        </Button>
                      ))}
                    </div>
                  </DrawerHeader>
                </DrawerContent>
              </Drawer>

              {/* Cart Icon */}
              <Link href="/cart">
                <Button
                  variant="outline"
                  style={{
                    padding: '10px',
                    backgroundColor: '#1d132d',
                    color: '#ffffff',
                    border: 'solid 1px #ffffff',
                    marginLeft: '10px',
                  }}
                >
                  <ShoppingCartIcon />
                </Button>
              </Link>
            </div>
          </div>

          {/* Search component - separate layer on mobile */}
          <div className="w-full mb-4">
            <Search />
          </div>
        </div>

        {/* Desktop view: Standard layout (Search, Menu, Cart) */}
        <div className="hidden md:flex items-center justify-between w-full mx-0 px-0">
          <div className="flex items-center">
            <Drawer direction="left">
              <DrawerTrigger asChild>
                <Button
                  variant="outline"
                  style={{
                    padding: '23px',
                    backgroundColor: '#1d132d',
                    color: '#ffffff',
                    border: 'solid 1px #ffffff',
                  }}
                >
                  <MenuIcon />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-full max-w-sm px-0 mx-0">
                {/* Remove extra padding and margin to extend hover effect */}
                <DrawerHeader className="px-0">
                  <DrawerTitle className="text-base px-4 mx-4">
                    Select a category
                  </DrawerTitle>
                  {/* Keep padding only on the title for alignment */}
                  <div className="space-y-1">
                    {categories.map((category) => (
                      <Button
                        className="w-full justify-start hover:bg-gray-200 px-4"
                        /* Use hover:bg-gray-200 to add a background hover effect */
                        variant="ghost"
                        key={category.name}
                        asChild
                        style={{
                          fontSize: '1.0rem',
                          color: 'black',
                          paddingLeft: '35px',
                        }}
                      >
                        <DrawerClose asChild>
                          <Link href={`/search?category=${category.name}`}>
                            {category.name}
                          </Link>
                        </DrawerClose>
                      </Button>
                    ))}
                  </div>
                </DrawerHeader>
              </DrawerContent>
            </Drawer>
          </div>

          <div className="flex items-center ml-6">
            <Search />
            <Menu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
