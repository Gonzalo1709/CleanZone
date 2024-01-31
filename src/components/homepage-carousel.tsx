"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import useWindowDimensions from "@/hooks/useWindowDimensions";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { ChevronDown } from "lucide-react";

export default function HomepageCarousel() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const { height, width } = useWindowDimensions();
  const [showArrow, setShowArrow] = useState<boolean>(true);

  
  useEffect(() => {

    if (height > 1260) {
      setShowArrow(false);
      console.log("height is greater than 1260")
    }
    else {
      setShowArrow(true);
      console.log("height is less than 1260")
    }

    if (!carouselApi) {
      return;
    }
    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };


  return (
    <>
      <Carousel
        opts={{
          align: "center",
          loop: true,
          duration: 30,
        }}
        className="w-full "
        setApi={setCarouselApi}
      >
        <div className="relative text-center bg-black">
          <CarouselContent className=" opacity-80 md:h-[90vh] max-h-[900px]">
            <CarouselItem>
              <Image
                src="https://czwebpageresources.s3.amazonaws.com/TestImages/test1.jpeg"
                width={700}
                height={700}
                alt="Test Image"
                className="object-cover aspect-auto h-full w-full"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="https://czwebpageresources.s3.amazonaws.com/TestImages/test2.jpeg"
                width={700}
                height={700}
                alt="Test Image"
                className="object-cover aspect-auto h-full w-full"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="https://czwebpageresources.s3.amazonaws.com/TestImages/test3.jpeg"
                width={500}
                height={500}
                alt="Test Image"
                className="object-cover aspect-auto h-full w-full"
              />
            </CarouselItem>
          </CarouselContent>
          <Link
            href="#calculate"
            onClick={handleScroll}
            className="md:block hidden"
          >
            <ChevronDown
              className={`opacity-100 absolute bottom-5 right-[45.5%] animate-bounce bg-white bg-opacity-25 rounded-full ${showArrow ? " visible" : " invisible"}`}
              size={80}
              color="#FDFDFD"
            />
          </Link>
        </div>
      </Carousel>
    </>
  );
}
