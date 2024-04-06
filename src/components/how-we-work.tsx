import React from "react";

const list = [
  {
    id: 1,
    h1: "Request a Quote",
    p: "Tell us about your space, and we will provide a custom quote.",
  },
  {
    id: 2,
    h1: "Schedule a Clean",
    p: "Inform us a date and time that works best for you.",
  },
  {
    id: 3,
    h1: "Enjoy Your Space",
    p: "Relax and enjoy your sparkling clean enviroment.",
  },
];

const HowWeWork = () => {
  return (
    <div className="my-20">
      <h1 className="text-4xl sm:text-5xl font-medium text-[#293c72] text-center">
        How We Work
      </h1>
      <div className="mx-5 sm:mx-20 flex justify-center">
        <div className="mt-10">
          <ol className="list-none list-inside space-y-16">
            {list.map((item) => (
              <li className="relative pl-10 flex items-center" key={item.id}>
                <span className="absolute left-0 text-6xl text-[#293c72]">
                  {item.id}
                </span>
                <div className="ml-2 sm:ml-32 space-y-2">
                  <p className="text-lg text-[#293c72]">{item.h1}</p>
                  <p className="text-[#4b9499]">{item.p}</p>
                </div>
              </li>
            ))}
            <li className="relative pl-10"></li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
