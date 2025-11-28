import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

import Menu from "./menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { getAllCategories } from "@/lib/actions/product.actions";
import SearchWrapper from "./search-wrapper";
import UserButtonMobile from "./user-button-mobile";

const Header = async () => {
  const categories = await getAllCategories();

  return (
    <header className="w-full border-b-amber-600 border-b-2">
      <div className="wrapper flex-between flex-wrap items-center">
        {/* Logo and Mobile Menu/Cart */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/icons/logo.jpg"
              width={70}
              height={70}
              alt={`${APP_NAME} logo`}
            />
          </Link>

          {/* Mobile-only menu and cart icons */}
          <div className="md:hidden flex items-center">
            <Drawer direction="left">
              <DrawerTrigger asChild>
                <Button
                  variant="outline"
                  style={{
                    padding: "10px",
                    backgroundColor: "#406126",
                    color: "#ffffff",
                    border: "solid 1px #ffffff",
                  }}
                >
                  <MenuIcon />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-full max-w-sm sm:m-0 sm:p-0">
                <DrawerHeader>
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
                          fontSize: "1.2rem",
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
            <Link href="/cart">
              <Button
                variant="outline"
                style={{
                  padding: "10px",
                  backgroundColor: "#406126",
                  color: "#ffffff",
                  border: "solid 1px #ffffff",
                  marginLeft: "10px",
                }}
              >
                <ShoppingCartIcon />
              </Button>
            </Link>
          </div>
        </div>

        {/* Search Bar - Full width on mobile, inline on desktop */}
        <div className="w-full mt-4 md:mt-0 md:w-auto md:flex-grow md:flex md:justify-center">
          <SearchWrapper />
        </div>

        {/* Desktop-only elements */}
        <div className="hidden md:flex items-center ml-auto">
          <Drawer direction="left">
            <DrawerTrigger asChild>
              <Button
                variant="outline"
                className="text-black hover:text-orange-400xs"
              >
                <MenuIcon />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-full max-w-sm px-0 mx-0">
              <DrawerHeader className="px-0">
                <DrawerTitle className="text-2xl px-4 mx-4 font-extralight">
                  Select a category
                </DrawerTitle>
                <div className="space-y-1 font-extralight">
                  {categories.map((category) => (
                    <Button
                      className="w-full justify-start hover:bg-gray-200 px-8"
                      variant="ghost"
                      key={category.name}
                      asChild
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
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
