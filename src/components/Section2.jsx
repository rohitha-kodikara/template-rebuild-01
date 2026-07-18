import React from "react";

const Section2 = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center gap-8 py-16 px-6 md:px-20 bg-gray-100">
      <img
        src="/dining.jpg"
        alt="Dining Room"
        className="w-full md:w-1/2 rounded-2xl object-cover h-64"
      />
      <div className="flex flex-col gap-4 md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800">
          Transforming Spaces
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Whether it's a cozy dining area, a luxurious bathroom, or a
          breathtaking loft conversion, Rebuild has the expertise to transform
          any space into something extraordinary. We work closely with you to
          understand your style and preferences.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our dedicated project managers keep you informed at every stage,
          ensuring a seamless and stress-free experience from start to finish.
          Let us help you create the home you've always wanted.
        </p>
      </div>
    </div>
  );
};

export default Section2;
