import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Pages from "../data/Pages";
import Divider from "./divider";

const NavMenu = () => {
  const [submenu, setSubMenu] = useState("");

  function handleClick(name: string) {
    if (submenu == name) {
      setSubMenu("")
    } else {
      setSubMenu(name);
    }
  }

  return (
    <div className="flex flex-col w-screen items-end z-20 relative">
      <div className="flex flex-col bg-black-200 w-screen lg:w-1/3 gap-2">
        {Pages.map((page, idx) => (
          <div key={idx} className="w-full">
            <div className="flex justify-center">
              <Link
                href={page.href}
                className="text-white hover:text-gray-300 text-lg"
              >
                {page.name}
              </Link>
              {page.children && submenu != page.name && <ChevronDown onClick={() => handleClick(page.name)} color="white" />}
              {submenu == page.name && <ChevronUp className="cursor-pointer" onClick={() => handleClick(page.name)} color="white" />}
            </div>
            <div className="flex flex-col gap-2 bg-[#383A52] mt-2">
              {submenu == page.name && page.children && page.children.map((childPage, idx2) => (
                <div key={idx2} className=" text-center">
                  <Link
                    href={childPage.href}
                    className="text-white hover:text-gray-300 text-lg"
                  >
                    {childPage.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-screen lg:w-1/3">
        <Divider color1="#F37E6A" color2="#F1BE4B" />
      </div>
    </div>
  );

};
export default NavMenu;