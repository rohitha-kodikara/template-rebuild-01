import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import ReactLenis from "lenis/react";

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
      <div className="overflow-hidden relative flex flex-col  h-screen bg-cover bg-center bg-no-repeat bg-[url('/ab.jpg')]">
        <Navbar />
        <Hero />
      </div>
      <Section1 />
      <Section2 />
    </>
  );
};

export default App;
