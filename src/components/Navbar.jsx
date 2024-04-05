"use client";
import React from "react";
import { useState } from "react";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <nav className="top-0 right-0 left-0 z-10 bg-opacity-100 border border-[#33353F]">
      <div className="flex flex-wrap  items-center justify-between mx-auto py-6 px-10">
        {/* <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="text-2xl md:text-4xl font-semibold text-white cursor-pointer"
            onClick={scrollToTop}
          >
            suvankar
          </ScrollLink> */}
        <h2>Suvankar</h2>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className=" flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white  text-slate-200 "
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className=" flex itemx-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white  text-slate-200 "
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto " id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/project">Project</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* {navbarOpen ? <MenuOverly links={navLinksdata} /> : null} */}
    </nav>
  );
};

export default Navbar;
