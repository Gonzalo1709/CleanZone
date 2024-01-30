"use client";
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { type CarouselApi } from "@/components/ui/carousel";
  
  import test1 from 'https://czwebpageresources.s3.amazonaws.com/TestImages/test1.jpeg';
  import test2 from '/TestImages/test2.jpeg';
  import test3 from '/TestImages/test3.jpeg';
  

export default function HomepageCarousel() {

  return (
    <>
    <Carousel opts={{
        align: "center",
        loop: true,
        duration: 5,
      }} className="w-screen ">

      
      <div>
      <CarouselContent>
        <CarouselItem>
            <Image src="https://czwebpageresources.s3.amazonaws.com/TestImages/test1.jpeg" 
            width={700} height={700} alt="Test Image" className="object-cover aspect-auto h-full w-screen"/>

        </CarouselItem>
        <CarouselItem>
          <Image src="https://czwebpageresources.s3.amazonaws.com/TestImages/test2.jpeg"
          width={500} height={500} alt="Test Image" className="object-cover aspect-auto h-full w-screen"/>
        </CarouselItem>
        <CarouselItem>
          <Image src="https://czwebpageresources.s3.amazonaws.com/TestImages/test3.jpeg"
          width={500} height={500} alt="Test Image" className="object-cover aspect-auto h-full w-screen"/>
        </CarouselItem>
      </CarouselContent>
      </div>

    </Carousel>

    </>
  )
}
