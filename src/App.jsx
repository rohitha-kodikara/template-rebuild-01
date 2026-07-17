import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('/dee.jpg')]">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
