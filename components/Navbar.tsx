"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Pages", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="bg-white sticky top-0 z-[100] border-b border-gray-100">
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/logos/logo-dark.png"
            alt="Logo"
            width={150}
            height={40}
            priority
            className="w-[120px] md:w-[150px]"
          />
        </Link>
        <div className="hidden lg:flex space-x-8 text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-indigo-600 text-[16px] font-bold transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden text-3xl text-gray-700 focus:outline-none order-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>

          <button className="hidden sm:block bg-indigo-600 text-white px-5 md:px-7 py-2 md:py-2.5 rounded-full font-semibold hover:bg-indigo-700 transition shadow-md whitespace-nowrap text-sm md:text-base order-2">
            Get Started Free
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px] py-6 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col space-y-4 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 font-bold text-lg hover:text-indigo-600 border-b border-gray-50 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="sm:hidden bg-indigo-600 text-white px-7 py-3 rounded-full font-semibold w-full shadow-lg">
            Get Started Free
          </button>
        </div>
      </div>
    </nav>
  );
}
