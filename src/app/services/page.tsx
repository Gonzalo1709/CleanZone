import React from "react";

import OurServices from "./components/our-services";
import OfficeCard from "./components/office-card";
import HomeCard from "./components/home-card";

export default function page() {
  return (
    <div>
      <OurServices />
      <div className="lg:flex ">
        <OfficeCard />
        <HomeCard />
      </div>
    </div>
  );
}
