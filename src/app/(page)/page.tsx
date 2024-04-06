import CalculatePrice from "@/components/calculate-price";
import HomepageCarousel from "@/components/homepage-carousel";
import HowWeWork from "@/components/how-we-work";
import Traits from "@/components/traits";

import Image from "next/image";




export default function Home() {

  return (
    <>
    <HomepageCarousel />
    <CalculatePrice />
    <Traits />
    <HowWeWork />
    </>
  );
}
