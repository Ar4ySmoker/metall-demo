"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function CarouselWithPagination() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const images = [
    "/carousel/armatura-2.jpg",
    "/carousel/truba-1.jpg",
    "/carousel/large-steel.jpg",
    "/carousel/large-steel-1.jpg",
    "/carousel/armatura-32-mm.jpg",
  ];

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative mx-auto w-full">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center items-center"
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={600}
                height={600}
                className="rounded-lg aspect-video w-full h-[400px] object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Пагинация */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black/50 px-4 py-2 rounded-full z-10">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn("h-2.5 w-2.5 rounded-full transition-colors", {
              "bg-white": current === index,
              "bg-gray-400": current !== index,
            })}
          />
        ))}
      </div>
    </div>
  );
}
