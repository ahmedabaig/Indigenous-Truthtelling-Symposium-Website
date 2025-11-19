"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Divider from "./divider";
import NavMenu from "./NavMenu";


function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-screen fixed top:0 z-10">
      <nav className="p-4 md:p-6 flex justify-between items-center bg-black-200 text-white">
        <Link href="/" className="flex gap-4">
          <Image
            className="rounded-full aspect-square w-8 h-8"
            src="/image4.png"
            alt="Vercel logomark"
            width={32}
            height={32}
          />
          <h1 className="text-base md:text-xl">Indigenous Truth Telling Symposium</h1>
        </Link>
        <div className="flex items-center">
          <button className="cursor-pointer" onClick={() => setOpen(!open)}>
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>
      <Divider color1="#F37E6A" color2="#F1BE4B"/>
      {open && (
        <div className="absolute top-16 left-0 w-screen z-40">
          <NavMenu />
        </div>
      )}
    </div>
  );
}

export default NavBar;