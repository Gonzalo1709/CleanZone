import { Clipboard, Contact2, Medal } from "lucide-react";
import React from "react";

import TraitsCard from "./traits-card";

function Traits() {
  return (
    <div className="py-10 flex-row lg:flex bg-[#f9ddeb] space-y-10 lg:space-y-0 lg:space-x-10 text-center">
      <TraitsCard
        icon={<Clipboard size={50} color="#e81e8a" />}
        h1="test1"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
        dicta quidem provident esse ratione"
      />

      <TraitsCard
        icon={<Contact2 size={50} color="#e81e8a" />}
        h1="test2"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
        dicta quidem provident esse ratione"
      />
      
      <TraitsCard
        icon={<Medal size={50} color="#e81e8a" />}
        h1="test3"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
        dicta quidem provident esse ratione"
      />
    </div>
  );
}

export default Traits;
