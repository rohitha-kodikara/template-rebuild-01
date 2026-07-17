import { X } from "lucide-react";
import React from "react";

const MobileMenu = ({ setOpenMenu }) => {
  return (
    <div className="relative ">
      <div className="flex flex-row justify-between p-3">
        <h1 className="font-extrabold text-2xl text-white">REBUILD</h1>

        <X className="text-white" onClick={() => setOpenMenu((t) => !t)} />
      </div>
      <ul className="absolute top-35 flex flex-col items-center w-full h-full text-white text-2xl gap-4">
        <li>About</li>
        <li>Services</li>
        <li>Our Work</li>
        <li>Pricing</li>
        <li>FAQs</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default MobileMenu;
