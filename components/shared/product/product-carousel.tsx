"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay"; // Import AutoplayType
import { EmblaCarouselType } from "embla-carousel"; // Import EmblaCarouselType

export default function ProductCarousel({ data }: { data: Product[] }) {
  const [carouselApi, setCarouselApi] = React.useState<EmblaCarouselType>();

  // 2. Define the Autoplay plugin instance
  const autoplayPlugin = React.useMemo(
    () =>
      Autoplay({
        delay: 3000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    []
  );
  // 3. Control the Autoplay plugin using the API
  React.useEffect(() => {
    if (!carouselApi) return;

    // The Embla API holds a 'plugins' object, where Autoplay is stored
    const autoplay = carouselApi.plugins().autoplay as AutoplayType | undefined;

    // Ensure the plugin exists and start it
    if (autoplay && autoplay.options.stopOnInteraction === false) {
      autoplay.play();
    }

    // The Autoplay plugin usually starts automatically if correctly initialized,
    // but we can add a play/stop listener for manual control if needed.

    // This part is crucial for making sure Autoplay is active and works!
  }, [carouselApi, autoplayPlugin]); // Rerun when API is available

  return (
    <div className="w-full relative hidden md:block">
      <Carousel
        className="w-full mb-6"
        opts={{
          align: "start",
          loop: true,
        }}
        // Pass the API setter function
        setApi={setCarouselApi}
        plugins={[autoplayPlugin]}
      >
        <CarouselContent>
          {data.map((product) => (
            // ... (rest of your CarouselItem content)
            <CarouselItem
              key={product.id}
              className="relative w-full flex items-center justify-center"
            >
              <Link
                href={`/product/${product.slug}`}
                className="block w-full overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-full aspect-[16/6] sm:aspect-[16/5] md:aspect-[16/4] lg:aspect-[16/3] xl:aspect-[21/7]">
                  <Image
                    src={product.banner!}
                    alt={product.name}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover w-full h-full rounded-xl transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold line-clamp-1">
                      {product.name}
                    </h3>
                    {product.brand && (
                      <p className="text-sm sm:text-base text-gray-200 line-clamp-1">
                        {product.brand}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md text-gray-800 rounded-full p-2 transition-all" />
        <CarouselNext className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md text-gray-800 rounded-full p-2 transition-all" />
      </Carousel>
    </div>
  );
}
