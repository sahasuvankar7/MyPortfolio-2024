"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-black bg-opacity-100 border-b border-[#33353F]">
      <div className="flex items-center justify-between mx-auto py-6 px-6 ">
        <h2 className="text-2xl md:text-4xl font-semibold text-white cursor-pointer md:ml-16">
          suvankar
        </h2>

        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
          >
            {!navbarOpen ? (
              <Bars3Icon className="h-5 w-5" />
            ) : (
              <XMarkIcon className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/about" className="text-white">About</Link>
          <Link href="/project" className="text-white">Project</Link>
          <Link href="/contact" className="text-white">Contact</Link>
        </div>
      </div>

      {navbarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-30">
          <button
            onClick={() => setNavbarOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
          <ul className="flex flex-col space-y-8 text-center">
            <li>
              <Link href="/" onClick={() => setNavbarOpen(false)} className="text-white text-2xl">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setNavbarOpen(false)} className="text-white text-2xl">
                About
              </Link>
            </li>
            <li>
              <Link href="/project" onClick={() => setNavbarOpen(false)} className="text-white text-2xl">
                Project
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setNavbarOpen(false)} className="text-white text-2xl">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
