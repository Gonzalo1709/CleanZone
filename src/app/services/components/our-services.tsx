import React from "react";
import Image from "next/image";

const OurServices = () => {
  return (
    <div className="my-20 mx-10 lg:mx-14 flex-row lg:flex ">
      <div className="mb-20 lg:mb-0 lg:w-[70%] lg:mr-7">
        <h1 className="text-4xl font-semibold text-[#383388] mb-6">
          Our Services
        </h1>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          consequatur laboriosam dolorum libero at. Autem quasi accusamus ullam,
          quod voluptatem molestiae assumenda. Sed dolor facilis reiciendis ea
          officiis voluptate soluta?
        </p>
      </div>

      <div className="flex justify-center">
        <Image
          src="https://czwebpageresources.s3.amazonaws.com/TestImages/test1.jpeg"
          width={500}
          height={500}
          alt="Test Image"
          className=""
        />
      </div>
    </div>
  );
};

export default OurServices;
