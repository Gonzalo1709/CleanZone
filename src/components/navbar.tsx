"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

import { links } from "@/constants";

import icon from "../../public/icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="md:py-5 md:px-3 flex items-center bg-[#14344B] text-white h-[10vh] max-h-[100px]">
        <div className="mr-auto ml-3 space-x-4 text-lg py-5">
          {/* <div className="mr-auto ml-3 space-x-4 md:hidden text-lg py-5"> */}
          <button type="button" onClick={handleClick} className="mt-2">
            {isOpen ? <X size={30} /> : <Menu color="#8CF7FF" size={30} />}
          </button>

          {isOpen ? (
            <div className="mt-0 absolute left-[-20px] rounded-sm z-10 bg-[#14344B] text-white">
              {/* <div className="md:hidden mt-0 absolute left-[-20px] rounded-sm z-10 bg-[#2D9BF0] text-white"> */}
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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

        <div className="">
          <Link href="/">
            <h1 className="font-bold text-3xl text-[#8CF7FF] px-3 py-1 rounded-md flex items-center">
              CLEANZONE
              <Image
                src={icon}
                height={200}
                width={75}
                alt="Logo"
                className=""
              />
              {/* <Image src={logoIcon} height={200} width={200} alt="Logo" /> */}
            </h1>
          </Link>
        </div>

        <div className="ml-auto mr-3 mt-2">
          <button>
            <Search color="#8CF7FF" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
