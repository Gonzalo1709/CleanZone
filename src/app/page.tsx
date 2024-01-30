import CalculatePrice from "@/components/calculate-price";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import test1 from '/TestImages/test1.jpeg';
import test2 from '/TestImages/test2.jpeg';
import test3 from '/TestImages/test3.jpeg';


export default function Home() {

  return (
    <>
    <Carousel opts={{
        align: "center",
        loop: true,
      }} className="w-screen">

      

      <CarouselContent>
        <CarouselItem>
          <Image src={test1} width={700} height={700} alt="Test Image" className="object-cover aspect-auto h-full w-screen"/>
        </CarouselItem>
        <CarouselItem>
          <Image src={test2} width={500} height={500} alt="Test Image" className="object-cover aspect-auto h-full w-screen"/>
        </CarouselItem>
        <CarouselItem>
          <Image src={test3} width={500} height={500} alt="Test Image" className="object-cover aspect-auto h-full w-screen"/>
        </CarouselItem>
      </CarouselContent>

    </Carousel>
    </>
  );
}
