import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32"
      >
        <div className="container mx-auto px-4">
          {/* <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-600 dark:text-white">
                  Fadfar Store
                </h1>
                <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-center pt-2 pb-8 md:py-6">
                  fadfar.com.ng is not just a brand, but the embodiment of a
                  divine calling that began in 2023.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/"
                    className="rounded-sm px-4 py-2 md:px-6 md:py-3 text-base font-semibold decoration-clone bg-gradient-to-b from-sectionLayout-300 to-sectionLayout-400 text-white"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/"
                    className="inline-block rounded-sm bg-sectionLayout-400 px-4 py-2 md:px-6 md:py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Back to Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
