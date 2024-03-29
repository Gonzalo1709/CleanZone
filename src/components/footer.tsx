import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#0B132A] text-white">
      <div className="container flex flex-wrap items-center px-4 py-8 mx-auto justify-center">
        <div className="flex flex-wrap">
          <ul className="flex space-x-2 text-sm sm:text-xl sm:space-x-4">
            {/* {links.map((link) => (
              <li key={link.title}>
                <Link href={link.href} onClick={handleScroll}>
                  {link.title}
                </Link>
              </li>
            ))} */}
            <p>Social 1</p>
            <p>Social 2</p>
          </ul>
        </div>
      </div>
      <div className="pb-2 mx-5 text-sm flex justify-center flex-col md:flex-row items-center text-center space-y-2 md:space-y-0">
        <div>
          <p className="">
            © 2024 CORPORATION. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer