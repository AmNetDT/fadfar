import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[110px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-gray-600 dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  A Divine Calling to Inspire, Uplift, and Transform Lives
                </h1>
                <p className="text-xl sm:text-3xl text-center pt-2 pb-8 sm:py-6">
                  Founded by Sophia E. Aigbodion, ChooseLifeandPeace.com is not
                  just a brand, but the embodiment of a divine calling that
                  began in 2023.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/"
                    className="rounded-sm px-8 py-4 text-base font-semibold decoration-clone bg-gradient-to-b from-sectionLayout-300 to-sectionLayout-400 text-white"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/"
                    className="inline-block rounded-sm bg-sectionLayout-400 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Back to Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
