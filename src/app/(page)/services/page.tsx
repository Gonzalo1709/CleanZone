import React from "react";

import OurServices from "./components/our-services";
import ServiceCard from "./components/service-card";

export default function page() {
  return (
    <div>
      <OurServices />
      <div className="mb-20 mt-20 space-x-4 space-y-16 mx-4 lg:flex lg:justify-around lg:mx-14 lg:space-y-0">
        <ServiceCard title="Office" img="https://czwebpageresources.s3.amazonaws.com/TestImages/test3.jpeg" />
        <ServiceCard title="Home" img="https://czwebpageresources.s3.amazonaws.com/TestImages/test1.jpeg" />
      </div>
    </div>
  );
}
