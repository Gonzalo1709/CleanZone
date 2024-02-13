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
    } else {
      setShowArrow(true);
    }

    console.log(carouselApi);

    if (!carouselApi) {
      return;
    }
    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselApi]);

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
        setApi={setCarouselApi}
        opts={{
          align: "center",
          loop: true,
          duration: 30,
        }}
        className="w-full "
      >
        <div className="relative text-center bg-black">
          <CarouselContent className=" opacity-80 h-[90vh] max-h-[900px]">
            <CarouselItem>
              <Image
                src="https://czwebpageresources.s3.amazonaws.com/TestImages/test4.jpg"
                width={700}
                height={700}
                alt="Test Image"
                className="object-cover aspect-auto h-full w-full"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="https://czwebpageresources.s3.amazonaws.com/TestImages/test5.jpg"
                width={700}
                height={700}
                alt="Test Image"
                className="object-cover aspect-auto h-full w-full"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="https://czwebpageresources.s3.amazonaws.com/TestImages/test6.jpg"
                width={500}
                height={500}
                alt="Test Image"
                className="object-cover aspect-auto h-full w-full"
              />
            </CarouselItem>
          </CarouselContent>
          <p className="md:leading-[3rem] absolute top-[41.5%] left-[0%] right-[0%] mx-auto w-auto md:w-80 md:m-0 md:top-[65%] md:right-[95%] md:left-[5%] text-[#8CF7FF] text-5xl md:text-8xl font-semibold">
            CLEANZONE <br className="m-0 p-0" />
            <span className="text-3xl md:text-4xl">Very Cool Slogan</span>{" "}
          </p>
          <Link href="#calculate" onClick={handleScroll} className="block">
            <ChevronDown
              className={`opacity-100 absolute bottom-16 md:bottom-5 left-0 right-0 ml-auto mr-auto w-[80px] animate-bounce ${
                showArrow ? " visible" : " invisible"
              }`}
              size={80}
              color="#FDFDFD"
            />
          </Link>
        </div>
      </Carousel>
    </>
  );
}
