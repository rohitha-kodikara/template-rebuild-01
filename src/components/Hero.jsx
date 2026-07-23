import { ArrowUpRight } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="md:px-15 gap-y-8 sm:gap-8 absolute inset-0 flex flex-col items-start w-full h-full py-10 sm:py-25 px-5 text-justify text-white">
      <hr className="w-full border-t border-white  mt-16 sm:mt-15" />
      {/* Desktop */}
      <div className="hidden sm:flex bg-black/50 p-3 rounded-lg translate-px px-5 mr-5 items-center gap-3">
        <p className="text-left ">
          <div className="md:flex md:flex-row justify-between gap-9">
            <div>
              From kitchens and bathrooms to loft conversions and extensions
              -{" "}
            </div>

            <div>
              {" "}
              Rebuild transforms omes with expert craftsmanship and clear
              communication thruoghtout
            </div>
          </div>
        </p>
        <button className="bg-white text-black py-2 px-3 rounded-full whitespace-nowrap">
          View Services
        </button>
      </div>

      {/* Mobile */}
      <p className="bg-black/50 p-3 rounded-lg text-center translate-px px-5 mr-5 sm:hidden">
        From kitchens and bathrooms to loft conversions and extensions - Rebuild
        transforms omes with expert craftsmanship and clear communication
        thruoghtout
      </p>
      <button className="bg-white text-black py-2 px-3 rounded-full sm:hidden">
        View Services
      </button>

      {/* Heading - Desktop */}
      <h1 className="sm:hidden text-white font-extrabold   text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight tracking-wider">
        YOUR <br /> HOME <br /> PERFECTED
      </h1>

      <div className="hidden sm:block w-full">
        <div className="flex justify-between w-full">
          <span className="font-extrabold   sm:text-7xl md:text-8xl  text-white tracking-wider ">
            YOUR
          </span>
          <span className="font-extrabold  sm:text-7xl md:text-8xl  text-white tracking-wider ">
            HOME
          </span>
        </div>
        <div className="text-center">
          <span className="font-extrabold sm:text-7xl md:text-8xl  text-white tracking-wider ">
            PERFECTED
          </span>
        </div>
      </div>

      <div className="z-50 fixed bottom-7 right-5  flex flex-col gap-2 bg-black py-2 px-2 rounded-lg ">
        <button className="border border-white py-2 px-3 rounded-lg flex justify-center items-center gap-2 text-sm">
          Customization for $349
        </button>
        <button className="bg-white text-black py-2 px-3 rounded-lg flex flex-row items-center gap-2 text-sm">
          See all templates <ArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
