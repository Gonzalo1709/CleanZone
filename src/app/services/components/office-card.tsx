import React from "react";
import Image from "next/image";

const OfficeCard = () => {
  return (
    <div className="">
      <div className="grid bg-gray-300">
        <div className="">
          <h1>Office</h1>
        </div>

        <Image
          src="https://czwebpageresources.s3.amazonaws.com/TestImages/test1.jpeg"
          width={500}
          height={500}
          alt="Test Image"
        />
      </div>
    </div>
  );
};

export default OfficeCard;
