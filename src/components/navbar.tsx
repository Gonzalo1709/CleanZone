"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { links } from "@/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="md:py-5 md:px-3 flex items-center bg-[#2D9BF0] text-white h-[10vh] max-h-[100px]">
        <div className="">
          <Link href="/">
            <h1 className="font-bold text-3xl hover:bg-[#383388] px-3 py-1 rounded-md">
              CLEANZONE
            </h1>
          </Link>
        </div>

        {/* normal navbar */}
        <div className="ml-auto hidden md:flex">
          {links.map((link) => (
            <Link
              key={link.title}
              href={"/" + link.href}
              className="block px-3 py-2 rounded-md hover:bg-[#383388] text-lg"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* navbar for mobile */}
        <div className="ml-auto space-x-4 md:hidden text-lg py-5">
          <button type="button" onClick={handleClick} className="mt-2">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {isOpen ? (
            <div className="md:hidden text-black mt-5 absolute right-0 rounded-sm z-10">
              <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3">
                {links.map((link) => (
                  <Link
                    key={link.title}
                    href={"/" + link.href}
                    className="block px-3 py-2 rounded-md hover:bg-[#383388] text-lg"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
