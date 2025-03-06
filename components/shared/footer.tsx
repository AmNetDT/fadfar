'use client'
import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className="wow fadeInUp relative z-10 dark:bg-gray-dark p-0 border-t-8">
        <div
          className="container-fluid mx-0 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 
          to-transparentmb-10 p-0 mb-10"
        >
          <div
            className="container mx-auto first-letter:text-sm text-body-colordark:text-body-color-dark 
          pt-4 sm:pt-4 md:pt-4 lg:pt-4 xl:pt-4 pb-0"
          >
            <div className="flex flex-row">
              <div className="basis-128">
                <Link href="/" className="mb-6 inline-block">
                  <Image
                    src="/assets/icons/logo.jpg"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={100}
                    height={50}
                  />
                  <Image
                    src="/assets/icons/logo.jpg"
                    alt="Dark mode logo"
                    className="hidden w-full dark:block"
                    width={120}
                    height={20}
                  />
                </Link>
              </div>
              <div className="basis-64">
                <h4 className="px-5 pb-2 text-1xl">Stay connected</h4>
                <div className="flex flex-row px-5">
                  <div className="basis-3xs">
                    <a
                      href="/" // Link to the facebook.com
                      aria-label="social-link"
                      className="mr-0 text-body-color duration-300 hover:text-gray-500 dark:text-body-color-dark pl-0 pr-4"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 9 18"
                        className="fill-current"
                      >
                        <path
                          d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 
                    8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 
                    0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 
                    0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 
                    17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 
                    17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 
                    10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 
                    7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="basis-2xs">
                    <a
                      href="/" // Link to the website or X.com
                      aria-label="social-link"
                      className="mr-6 text-body-color duration-300 hover:text-gray-500 dark:text-body-color-dark pr-3"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M21.707 3.293a1 1 0 00-1.414 0L12 11.586 3.707 3.293a1 1 0 10-1.414 1.414L10.586 13l-8.293 8.293a1 1 0 101.414 1.414L12 14.414l8.293 8.293a1 1 0 001.414-1.414L13.414 13l8.293-8.293a1 1 0 000-1.414z" />
                      </svg>
                    </a>
                  </div>
                  <div className="basis-2xs">
                    <a
                      href="/" // Link to the youtube.com
                      aria-label="social-link"
                      className="mr-6 text-body-color duration-300 hover:text-gray-500 dark:text-body-color-dark pr-2"
                    >
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 18 14"
                        className="fill-current"
                      >
                        <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                      </svg>
                    </a>
                  </div>
                  <div className="basis-2xs">
                    <a
                      href="/" // Link to the facebook.com
                      aria-label="social-link"
                      className="mr-0 text-body-color duration-300 hover:text-gray-500 dark:text-body-color-dark"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <path d="M12 2.163C6.5 2.163 2.163 6.5 2.163 12S6.5 21.837 12 21.837 21.837 17.5 21.837 12 17.5 2.163 12 2.163zm0 17.674c-4.03 0-7.337-3.308-7.337-7.337s3.308-7.337 7.337-7.337 7.337 3.308 7.337 7.337-3.308 7.337-7.337 7.337zm0-12c-2.572 0-4.663 2.091-4.663 4.663s2.091 4.663 4.663 4.663 4.663-2.091 4.663-4.663-2.091-4.663-4.663-4.663zm0 7.663c-1.656 0-3-1.344-3-3s1.344-3 3-3 3 1.344 3 3-1.344 3-3 3zm6.406-10.244c0 .795-.645 1.44-1.44 1.44s-1.44-.645-1.44-1.44.645-1.44 1.44-1.44 1.44.645 1.44 1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="basis-basis-2xs">
                <h4 className="pb-2 text-1xl">Need Help</h4>
                <p>Chat with us | Help Center | Contact Us</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-auto">
          <div className="flex flex-wrap">
            {/* Logo and Social Links */}

            {/* Links Column 1 */}
            <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-2/12 xl:w-2/12 pl-4">
              <div className="mb-8 lg:mb-16">
                <ul className="space-y-4">
                  <li>
                    <a href="/about/" className="block">
                      Customer service
                    </a>
                  </li>
                  <li>
                    <a href="/faq/" className="block">
                      Shopping with us
                    </a>
                  </li>
                  <li>
                    <a href="/faq/" className="block">
                      Centre Map
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Links Column 2 */}
            <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-2/12 xl:w-2/12 px-4">
              <div className="mb-8 lg:mb-16">
                <ul className="space-y-4">
                  {/* <li>
                    <a
                      href="/about/"
                      className="block text-base sm:text-lg md:text-xl text-body-color dark:text-body-color-dark duration-300 hover:text-gray-500 dark:text-body-color-dark"
                    >
                      Delivery
                    </a>
                  </li> */}
                  <li>
                    <a href="/customer-support/" className="block">
                      Contact Support
                    </a>
                  </li>
                  <li>
                    <a href="/return-policy/" className="block">
                      Return Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Links Column 3 */}
            <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-2/12 xl:w-2/12 px-4">
              <div className="mb-8 lg:mb-16">
                <ul className="space-y-4">
                  <li>
                    <a href="/terms-and-conditions/" className="block">
                      Collaborate with us
                    </a>
                  </li>
                  <li>
                    <a href="/privacy-policy/" className="block">
                      Browse by Category
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Links Column 4 */}
            <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-2/12 xl:w-2/12 px-4">
              <div className="mb-8 lg:mb-16">
                <ul className="space-y-4">
                  <li>
                    <a href="/about/" className="block">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/faq/" className="block">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Links Column 5 */}
            <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-2/12 xl:w-2/12 px-4">
              <div className="mb-8 lg:mb-16">
                <ul className="space-y-4">
                  <li>
                    <a href="/about/" className="block">
                      Terms of Conditions
                    </a>
                  </li>
                  <li>
                    <a href="/faq/" className="block">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Additional Column (Support/Help) */}
            <div className="w-full md:w-1/2 lg:w-3/12 xl:w-2/12 px-4">
              <div className="mb-8 lg:mb-16">
                {/* Content for Support & Help can go here if needed */}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 
          to-transparent my-6"
          ></div>

          {/* Footer Bottom */}
          <div className="text-center text-sm text-body-color dark:text-body-color-dark py-5">
            {new Date().getFullYear()} {APP_NAME}. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
