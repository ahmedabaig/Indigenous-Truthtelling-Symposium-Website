import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Divider from "./divider";

function NavBar() {
  return (
    <div className="w-screen fixed top:0 z-10">
      <nav className="py-6 px-6 flex justify-between items-center bg-[#232432] text-white">
        <Link href="/" className="flex gap-4">
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={32}
            height={32}
          />
          <h1 className="text-xl">Indigenous Truth Telling Symposium</h1>
        </Link>
        <div className="flex items-center">
          <button className="cursor-pointer">
            <Menu size={32} />
          </button>
        </div>
      </nav>
      <Divider color1="#F37E6A" color2="#F1BE4B"></Divider>
    </div>
  );
}

export default NavBar;