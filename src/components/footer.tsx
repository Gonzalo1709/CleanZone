import React from "react";
import Link from "next/link";

import { links } from "@/constants";

const socialLinks = [
  {
    title: "Social 1",
    href: "",
  },
  {
    title: "Social 2",
    href: "",
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0B132A] text-white">
      <div className="flex-row sm:flex py-10 px-5 lg:px-32">
        <div className="mb-10 sm:mb-0 text-center sm:text-start">
          <h1 className="text-2xl">CleanZone</h1>
          <h1 className="mt-1 sm:mt-2 text-sm">company@company.com</h1>
        </div>

        <div className="ml-auto flex justify-center sm:text-xl">
          <div>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.title} className="list-none">
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="ml-10 lg:ml-32">
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.title} className="list-none">
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="pb-2 mx-5 text-xs flex justify-center flex-col md:flex-row items-center text-center space-y-2 md:space-y-0">
        <div>
          <p className="">© 2024 CORPORATION. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
