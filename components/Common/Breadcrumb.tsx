const Breadcrumb = ({
  pageName,
  description,
}: {
  pageName: string
  description: string
}) => {
  return (
    <section
      id="Breadcrumb"
      className="dark:bg-gray-dark relative z-10 overflow-hidden pb-16 pt-[80px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[100px] 2xl:pt-[10px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-2">
            <div
              className="wow fadeInUp mx-auto max-w-[1000px] text-left"
              data-wow-delay=".2s"
            >
              <h1 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                {pageName}
              </h1>
              <p className="text-base font-medium leading-relaxed text-body-color">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumb
