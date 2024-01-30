import Image from "next/image";

import { Carousel } from "@material-tailwind/react";

export default function Home() {

  return (
    <Carousel className="rounded-xl">
      <img src="test.png" alt="test" className="h-full w-full object-cover" />
      <img src="test.png" alt="test" className="h-full w-full object-cover" />
      <img src="test.png" alt="test" className="h-full w-full object-cover" />
    </Carousel>
  );
}
