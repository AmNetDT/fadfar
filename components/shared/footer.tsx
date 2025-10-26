"use client";

import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="wow fadeInUp relative z-10  bg-lime-900 text-gray-200 dark:text-gray-200 pt-40 p-6 dark:bg-gray-dark md:p-10">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col flex-wrap justify-between gap-10 border-b border-gray-200 pb-10 dark:border-gray-700 md:flex-row md:flex-nowrap lg:gap-16">
          {/* Logo and App Info */}
          <div className="flex w-full flex-col items-center md:w-auto md:items-start lg:w-1/3">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/assets/icons/logo.jpg"
                alt="logo"
                className="dark:hidden"
                width={120}
                height={50}
              />
              <Image
                src="/assets/icons/logo.jpg"
                alt="Dark mode logo"
                className="hidden dark:block"
                width={120}
                height={50}
              />
            </Link>
            <p className="text-center text-sm hover:text-lime-300 dark:hover:text-lime-300 md:text-left">
              {APP_NAME} is your one-stop shop for everything...
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid w-full grid-cols-2 gap-8 text-center md:w-auto md:grid-cols-3 md:text-left lg:w-2/3 lg:gap-16">
            {/* Links Column 1 */}
            <div>
              <h4 className="mb-4 text-base font-semibold text-white dark:text-white">
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-lime-300 dark:hover:text-lime-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-lime-300 dark:hover:text-lime-300"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-lime-300 dark:hover:text-lime-300"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <h4 className="mb-4 text-base font-semibold text-white dark:text-white">
                Customer Service
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-lime-300 dark:hover:text-lime-300"
                  >
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/delivery"
                    className="hover:text-lime-300 dark:hover:text-lime-300"
                  >
                    Delivery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shopping"
                    className="hover:text-lime-300 dark:hover:text-lime-300"
                  >
                    Shopping with us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Links Column 3 */}
            <div>
              <h4 className="mb-4 text-base font-semibold text-white dark:text-white">
                Legal
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-lime-300 dark:hover:text-lime-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-lime-300 dark:hover:text-lime-300"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social and Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Social Links */}
          <div className="flex gap-4">
            {/* Replace these with your actual links */}
            <a
              href="/"
              aria-label="Facebook"
              className="hover:text-lime-300 dark:hover:text-lime-300"
            >
              {/* Your SVG here */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 9 18"
                className="fill-current"
              >
                <path d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z" />
              </svg>
            </a>
            <a
              href="/"
              aria-label="X"
              className="hover:text-lime-300 dark:hover:text-lime-300"
            >
              {/* Your SVG here */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M21.707 3.293a1 1 0 00-1.414 0L12 11.586 3.707 3.293a1 1 0 10-1.414 1.414L10.586 13l-8.293 8.293a1 1 0 101.414 1.414L12 14.414l8.293 8.293a1 1 0 001.414-1.414L13.414 13l8.293-8.293a1 1 0 000-1.414z" />
              </svg>
            </a>
            <a
              href="/"
              aria-label="YouTube"
              className="hover:text-lime-300 dark:hover:text-lime-300"
            >
              {/* Your SVG here */}
              <svg
                width="23"
                height="23"
                viewBox="0 0 18 14"
                className="fill-current"
              >
                <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
              </svg>
            </a>
            <a
              href="/"
              aria-label="Instagram"
              className="hover:text-lime-300 dark:hover:text-lime-300"
            >
              {/* Your SVG here */}
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
          {/* Copyright */}
          <p className="text-sm hover:text-lime-300 dark:hover:text-lime-300">
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
