'use client';

import { useState } from "react";
import Link from "next/link";
import { useNavbarColor } from "../context/NavbarContext";

const Navbar = () => {
  const { color, bgColor } = useNavbarColor();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  let textColorClass = '';
  if (color === 'white') textColorClass = 'text-white';
  else if (color === 'black') textColorClass = 'text-black';

  let bgClass = 'bg-transparent backdrop-blur-md';
  if (bgColor && bgColor !== 'default') {
    bgClass = bgColor.startsWith('bg-') ? bgColor : `bg-${bgColor}`;
  }

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <div className={`w-full px-4 ${bgClass} ${textColorClass} overflow-x-clip`}>
        <div className="relative mx-2 flex h-16 items-center justify-between md:mx-4">
          <div className="flex min-w-0 items-center">
            <div className="flex items-baseline space-x-4">
              <Link href="/" className="rounded-md px-3 py-2 text-sm hover:bg-[rgba(0,0,0,0.1)] transition-[background-color] duration-300" aria-current="page">
                Home
              </Link>
              <Link href="/work" className="rounded-md px-3 py-2 text-sm hover:bg-[rgba(0,0,0,0.1)] transition-[background-color] duration-300">
                Work
              </Link>
              <Link href="/gallery" className="rounded-md px-3 py-2 text-sm hover:bg-[rgba(0,0,0,0.1)] transition-[background-color] duration-300">
                Gallery
              </Link>
            </div>

            <div className="ml-2 hidden items-baseline gap-2 md:flex">
              <Link href="/about" className="rounded-md px-3 py-2 text-sm hover:bg-[rgba(0,0,0,0.1)] transition-[background-color] duration-300">
                About
              </Link>
              <Link href="/collab" className="rounded-md px-3 py-2 text-sm hover:bg-[rgba(0,0,0,0.1)] transition-[background-color] duration-300">
                Collab
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-4">
          
            <div className="shrink-0" data-webring="ca" data-member="sophie-shu"></div>

            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="rounded-md p-2 hover:bg-[rgba(0,0,0,0.1)] transition-[background-color] duration-300"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-nav-menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>

              <div
                id="mobile-nav-menu"
                className={`absolute right-0 top-full mt-2 w-56 max-w-[calc(100vw-2rem)] rounded-lg border border-black/10 bg-white/90 p-2 text-black shadow-lg backdrop-blur-md ${
                  isMobileMenuOpen ? "block" : "hidden"
                }`}
              >
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm hover:bg-[rgba(0,0,0,0.1)] transition-[background-color] duration-300"
                >
                  About
                </Link>
                <Link
                  href="/collab"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm hover:bg-[rgba(0,0,0,0.1)] transition-[background-color] duration-300"
                >
                  Collab
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://webring.ca/embed.js" defer></script>
    </div>
  );
};

export default Navbar;