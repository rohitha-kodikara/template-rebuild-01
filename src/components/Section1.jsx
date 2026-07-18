import React from "react";

const Section1 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 py-16 px-6 md:px-20 bg-white">
      <img
        src="/kitchen.jpg"
        alt="Modern Kitchen"
        className="w-full md:w-1/2 rounded-2xl object-cover h-64"
      />
      <div className="flex flex-col gap-4 md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800">
          Expert Craftsmanship
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At Rebuild, we take pride in delivering exceptional quality for every
          project. From modern kitchen renovations to complete home
          transformations, our team of skilled professionals ensures that every
          detail is executed to perfection. We use only the finest materials and
          the latest techniques to bring your vision to life.
        </p>
        <p className="text-gray-600 leading-relaxed">
          With over a decade of experience in the industry, we understand the
          importance of clear communication and transparent timelines. Your
          dream home is closer than you think.
        </p>
      </div>
    </div>
  );
};

export default Section1;
