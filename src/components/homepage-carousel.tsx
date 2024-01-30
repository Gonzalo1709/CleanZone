"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

export default function HomepageCarousel() {

  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!carouselApi) { return; }
    const interval = setInterval(() => {
      carouselApi.scrollNext()
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselApi]);

  return (
    <>
      <Carousel
        opts={{
          align: "center",
          loop: true,
          duration: 30,
        }}
        className="w-screen "
        setApi={setCarouselApi}
      >
        <div>
          <CarouselContent>
            <CarouselItem>
              <Image
                src="https://czwebpageresources.s3.amazonaws.com/TestImages/test1.jpeg"
                width={700}
                height={700}
                alt="Test Image"
                className="object-cover aspect-auto h-full w-screen"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="https://czwebpageresources.s3.amazonaws.com/TestImages/test2.jpeg"
                width={500}
                height={500}
                alt="Test Image"
                className="object-cover aspect-auto h-full w-screen"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="https://czwebpageresources.s3.amazonaws.com/TestImages/test3.jpeg"
                width={500}
                height={500}
                alt="Test Image"
                className="object-cover aspect-auto h-full w-screen"
              />
            </CarouselItem>
          </CarouselContent>
        </div>
      </Carousel>
    </>
  );
}
