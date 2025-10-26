"use client";

import * as React from "react";
// 1. Import EmblaOptionsType for type-safe options
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import type { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Interfaces and Context
interface CarouselProps {
  opts?: EmblaOptionsType;
  plugins?: any[];
  orientation?: "horizontal" | "vertical";
  // ADD THIS PROP: Allows the parent component to get the API
  setApi?: (api: EmblaCarouselType) => void;
}

interface CarouselContextProps {
  api: EmblaCarouselType | undefined;
  orientation: "horizontal" | "vertical";
  canScrollPrev: boolean;
  canScrollNext: boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

// Main Carousel Component
const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      plugins,
      setApi, // <-- Accept the new prop
      className,
      children,
      ...props
    },
    ref
  ) => {
    // This line is now correctly typed because 'plugins' is 'any[]'
    const [emblaRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );

    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
    const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

    React.useEffect(() => {
      if (!api) return;

      if (setApi) {
        setApi(api);
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api.off("reInit", onSelect);
        api.off("select", onSelect);
      };
    }, [api, onSelect, setApi]);

    const value = React.useMemo(
      () => ({
        api,
        orientation,
        canScrollPrev,
        canScrollNext,
        scrollPrev,
        scrollNext,
      }),
      [api, orientation, canScrollPrev, canScrollNext, scrollPrev, scrollNext]
    );

    return (
      <CarouselContext.Provider value={value}>
        <div
          ref={ref}
          className={cn(
            "relative w-full h-[80vh] md:h-[70vh] lg:h-[60vh]",
            className
          )}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          <div ref={emblaRef} className="overflow-hidden h-full">
            {children}
          </div>
        </div>
      </CarouselContext.Provider>
    );
  }
);

Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      className={cn(
        "flex transition-transform duration-700 ease-in-out h-full",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      )}
      {...props}
    />
  );
});

CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-[250px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[500px] shrink-0 grow-0 h-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
});

CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "hidden md:flex absolute h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full",
        orientation === "horizontal"
          ? "-left-8 sm:-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 sm:-top-16 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});

CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "hidden md:flex absolute h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full",
        orientation === "horizontal"
          ? "-right-8 sm:-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-8 sm:-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});

CarouselNext.displayName = "CarouselNext";

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
