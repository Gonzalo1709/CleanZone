import CalculatePrice from "@/components/calculate-price";
import Image from "next/image";

export default function Home() {

  return (
    <Carousel className="rounded-xl">
      <img src="test.png" alt="test" className="h-full w-full object-cover" />
      <img src="test.png" alt="test" className="h-full w-full object-cover" />
      <img src="test.png" alt="test" className="h-full w-full object-cover" />

      <CalculatePrice />
    </Carousel>
  );
}
