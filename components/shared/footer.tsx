'use client'
import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className="wow fadeInUp relative z-10 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 dark:bg-gray-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            {/* Logo and Social Links */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-3/12 xl:w-4/12 px-4">
              <div className="mb-8 max-w-[360px] mx-auto lg:mb-16">
                <Link href="/" className="mb-6 inline-block">
                  <Image
                    src="/assets/icons/logo.png"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={100}
                    height={50}
                  />
                  <Image
                    src="/assets/icons/logo.png"
                    alt="Dark mode logo"
                    className="hidden w-full dark:block"
                    width={120}
                    height={20}
                  />
                </Link>
                <div className="flex lg:flex items-center justify-center sm:justify-start space-x-6">
                  {/* Social Icons */}
                  <a
                    href="/" // Link to the facebook.com
                    aria-label="social-link"
                    className="mr-6 text-body-color duration-300 hover:text-gray-500 dark:text-body-color-dark"
                  >
                    <svg
                      width="9"
                      height="18"
                      viewBox="0 0 9 18"
                      className="fill-current"
                    >
                      <path d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z" />
                    </svg>
                  </a>
                  <a
                    href="/" // Link to the website or X.com
                    aria-label="social-link"
                    className="mr-6 text-body-color duration-300 hover:text-gray-500 dark:text-body-color-dark"
                  >
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M21.707 3.293a1 1 0 00-1.414 0L12 11.586 3.707 3.293a1 1 0 10-1.414 1.414L10.586 13l-8.293 8.293a1 1 0 101.414 1.414L12 14.414l8.293 8.293a1 1 0 001.414-1.414L13.414 13l8.293-8.293a1 1 0 000-1.414z" />
                    </svg>
                  </a>
                  <a
                    href="https://truthsocial.com" // Link to Truth Social
                    aria-label="truth-social-link"
                    className="mr-6 text-body-color duration-300 hover:text-gray-500 dark:text-body-color-dark"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <rect
                        width="11"
                        height="10"
                        x="3"
                        y="6"
                        fill="#661dff"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></rect>
                      <rect
                        width="11"
                        height="10"
                        x="34"
                        y="33"
                        fill="#17e8b5"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></rect>
                      <polygon
                        fill="#661dff"
                        fillRule="evenodd"
                        points="18,6 18,43 29,43 29,16 45,16 45,6"
                        clipRule="evenodd"
                      ></polygon>
                    </svg>
                  </a>

                  <a
                    href="/" // Link to the youtube.com
                    aria-label="social-link"
                    className="mr-6 text-body-color duration-300 hover:text-gray-500 dark:text-body-color-dark"
                  >
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      className="fill-current"
                    >
                      <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                    </svg>
                  </a>
                  <a
                    href="/" // Link to the linkedin.com
                    aria-label="social-link"
                    className="text-body-color duration-300 hover:text-gray-500 dark:text-body-color-dark"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Links Column 1 */}
            <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-2/12 xl:w-2/12 px-4">
              <div className="mb-8 lg:mb-16">
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/about/"
                      className="block text-gray-300 hover:text-gray-500"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/faq/"
                      className="block text-gray-300 hover:text-gray-500"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="/personal-journey-of-faith/"
                      className="block text-gray-300 hover:text-gray-500"
                    >
                      Personal Journey of Faith
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
                    <a
                      href="/customer-support/"
                      className="block text-gray-300 hover:text-gray-500"
                    >
                      Contact Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="/return-policy/"
                      className="block text-gray-300 hover:text-gray-500"
                    >
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
                    <a
                      href="/terms-and-conditions/"
                      className="block text-gray-300 hover:text-gray-500"
                    >
                      Terms of Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy-policy/"
                      className="block text-gray-300 hover:text-gray-500"
                    >
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
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent my-6"></div>

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
