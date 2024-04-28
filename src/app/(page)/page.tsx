import CalculatePrice from "@/components/calculate-price";
import ContactUs from "@/components/contact-us";
import HomepageCarousel from "@/components/homepage-carousel";
import HowWeWork from "@/components/how-we-work";
import Traits from "@/components/traits";

import Image from "next/image";

export default function Home() {

  return (
    <>
    <HomepageCarousel />
    <CalculatePrice />
    <div className=" bg-[#0b132a] py-20">
      <Traits />
      <HowWeWork />
      <ContactUs />
    </div>
    </>
  );
}
