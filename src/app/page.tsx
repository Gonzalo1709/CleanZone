import CalculatePrice from "@/components/calculate-price";
import HomepageCarousel from "@/components/homepage-carousel";

import Image from "next/image";



export default function Home() {

  return (
    <>
    <HomepageCarousel />
    <CalculatePrice />
    </>
  );
}
