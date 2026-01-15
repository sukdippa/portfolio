'use client';

import Link from "next/link";
import { useNavbarColor } from "../context/NavbarContext";

const Navbar = () => {
  const { color, bgColor } = useNavbarColor();

  let textColorClass = '';
  if (color === 'white') textColorClass = 'text-white';
  else if (color === 'black') textColorClass = 'text-black';

  let bgClass = 'bg-transparent backdrop-blur-md';
  if (bgColor && bgColor !== 'default') {
    bgClass = bgColor.startsWith('bg-') ? bgColor : `bg-${bgColor}`;
  }

  return (
    <div className="top-0 left-0 w-full z-50">
      <div className={`w-full px-4 ${bgClass} ${textColorClass}`}>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex flex-row space-between">
              <div className="ml-4 flex items-baseline space-x-4">
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
              <div className="ml-4 flex items-baseline space-x-4">
                <Link href="/about" className="rounded-md px-3 py-2 text-sm hover:bg-[rgba(0,0,0,0.1)] transition-[background-color] duration-300">
                  About
                </Link>
                <Link href="/collab" className="rounded-md px-3 py-2 text-sm hover:bg-[rgba(0,0,0,0.1)] transition-[background-color] duration-300">
                  Collab
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;