import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";

import ReactLenis from "lenis/react";
import AboutUs from "./components/AboutUs";

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
      <div className="xl:px-15">
        <AboutUs />
      </div>
    </>
  );
};

export default App;
