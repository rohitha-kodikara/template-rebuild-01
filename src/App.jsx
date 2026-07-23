import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";

import ReactLenis from "lenis/react";
import AboutUs from "./components/AboutUs";
import Stats from "./components/Stats";
import OurServices from "./components/OurServices";

const App = () => {
  return (
    <>
      <ReactLenis
        root
        options={{
          lerp: 0.5,
          duration: 1.2,
          smoothWheel: true,
          autoRaf: true,
        }}
      />
      <div className=" overflow-hidden relative flex flex-col  h-screen bg-cover bg-center bg-no-repeat  bg-[url('/hero.jpg')] ">
        <Navbar />
        <Hero />
      </div>
      <div className="flex flex-col lg:px-10">
        <AboutUs />
      </div>
      <Stats />
      <OurServices />
    </>
  );
};

export default App;
