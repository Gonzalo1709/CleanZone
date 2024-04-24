import React from "react";
import icon from "../../public/icon.png";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="flex justify-center items-center mx-2">
      <div className="">
        <div className="bg-[#0B132A] p-5 rounded-xl flex justify-center items-center mx-10 sm:mx-32">
          <Image src={icon} height={300} width={200} alt="Logo" className="" />
        </div>

        <div className="text-center">
          <h1 className="text-[#6fffe8] text-4xl sm:text-5xl mt-7 mb-4 font-medium">
            Ready to get started?
          </h1>
          {/*eslint-disable-next-line react/no-unescaped-entities */}
          <h2 className="text-[#6CA8AC]">
            Let's create a cleaner space together
          </h2>

          <Link href='/calculate-price'>
            <Button className="bg-[#5CC0BE] mt-7 text-xl text-white p-6">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
