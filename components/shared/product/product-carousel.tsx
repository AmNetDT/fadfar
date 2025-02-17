'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
export default function ProductCarousel({ data }: { data: Product[] }) {
  return (
    <Carousel
      className="w-full mb-0"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 1000,
          stopOnInteraction: true,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {data.map((product: Product) => (
          <CarouselItem key={product.id}>
            <Link href={`/product/${product.slug}`}>
              <div className="relative mx-auto">
                <Image
                  alt={product.name}
                  src={product.banner!}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full object-cover h-150"
                />
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
