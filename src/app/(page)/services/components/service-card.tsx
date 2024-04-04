import React from "react";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServiceCardProps {
  title: string;
  img: string;
}

const kitchenList = [
  "Inside/Outside of Microwave & Oven",
  "Glass Surfaces",
  "Empty Trash",
  "Backsplash",
  "Exterior of Trash Can",
];

const ServiceCard: React.FC<ServiceCardProps> = ({ title, img }) => {
  return (
    <div className="">
      <div className="flex justify-center items-center content-center">
        <div className="bg-[#DCD0FF] rounded-md">
          <Image src={img} width={500} height={500} alt="Test Image" />

          {/* <div className="text-2xl font-semibold text-[#383388] flex items-center mt-2">
            <h1>{title}</h1>
            <div className="ml-auto bg-[#383388] rounded-xl">
              <ChevronDown color="white" />
            </div>
          </div> */}
          <Accordion
            type="single"
            collapsible
            className="max-w-[500px] px-2 border-b"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-2xl font-semibold text-[#383388]">
                {title}
              </AccordionTrigger>
              <AccordionContent>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full border-b"
                >
                  <AccordionItem value="item-1" className="border-b">
                    <AccordionTrigger className="text-[#383388] text-lg">
                      One-Time Clean
                    </AccordionTrigger>
                    <AccordionContent className="ml-2">
                      <h1 className="text-[#383388] text-base font-medium">
                        DEEP CLEANING
                      </h1>
                      <div className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero dolore quasi consequatur ea blanditiis atque
                        sapiente enim, nihil fuga, nulla quae fugiat tempora
                        inventore at doloremque cum voluptatibus! Cumque,
                        dolores?
                      </div>

                      <Accordion type="single" collapsible className="mb-[-10px] ml-4">
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-base font-medium">
                            Kitchen
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-1 list-disc list-inside ml-2">
                              {kitchenList.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-[#383388] text-lg">
                      Reacurring Clean
                    </AccordionTrigger>
                    <AccordionContent className="ml-2">
                      <h1 className="text-[#383388] text-base font-medium">
                        PREMIUM
                      </h1>
                      <div className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero dolore quasi consequatur ea blanditiis atque
                        sapiente enim, nihil fuga, nulla quae fugiat tempora
                        inventore at doloremque cum voluptatibus! Cumque,
                        dolores?
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
