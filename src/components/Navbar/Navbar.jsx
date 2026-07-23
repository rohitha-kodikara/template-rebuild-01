import { Menu } from "lucide-react"; // ✅ Correct

import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 z-50 fixed flex flex-row justify-between items-center  w-full  bg-none py-3 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[200px] before:bg-gradient-to-b before:from-black/80 before:via-black/40 before:to-transparent before:-z-10">
      <h1 className="font-extrabold text-2xl text-white">REBUILD</h1>
      <Menu
        onClick={() => setOpenMenu((t) => !t)}
        className="text-white md:hidden"
      />

      <div
        className={` absolute top-0 left-0 w-full h-screen z-50 rounded-b-2xl bg-amber-950 transition-transform duration-700 ease-in-out ${
          openMenu ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>

      <div className="hidden md:block">
        <ul className="flex flex-row gap-4 text-white font-bold ">
          <li>About</li>
          <li>Services</li>
          <li>Our Work</li>
          <li>Pricing</li>
          <li>FAQs</li>
          <li>Contact</li>
        </ul>
      </div>
      <button className="hidden md:block bg-white px-3  sm:px-5 py-2 rounded-full">
        Book a Call
      </button>
    </nav>
  );
};

export default Navbar;
