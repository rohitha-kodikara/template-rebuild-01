import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="p-6 flex flex-col gap-8">
        <span className="inline-block self-start py-2 px-4 font-bold bg-amber-100   ">
          ABOUT
        </span>

        <div className="flex flex-col lg:grid lg:grid-cols-2">
          <h1 className="font-light text-6xl">About Us</h1>
          <p className="py-6 md:text-right">
            We started Rebuld because we saw homeowners being let down — by
            tradespeople who disappeared mid-project, quotes that ballooned
            overnight, and workmanship that didn't last. We built something
            different. A team of fully qualified specialists who treat your home
            as if it were their own, backed by a process that makes the whole
            experience genuinely stress-free.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2  lg:gap-y-8">
          <h3 className="text-5xl">
            Your home deserves{" "}
            <span className="text-gray-400">
              {" "}
              more than a contractor. It deserves a team that cares.
            </span>
          </h3>

          <div className=" flex flex-col gap-6 py-8  lg:order-last ">
            <div className="border-amber-950 border-l-3 pl-3 ">
              <h4 className="pb-2 font-bold">15 Years of Expertise</h4>
              <p>
                Over a decade and a half of delivering high-quality home
                improvements across London and the South East. Experience you
                can see in every finish.
              </p>
            </div>

            <div className="border-amber-950 border-l-3 pl-3">
              <h4 className="pb-2 font-bold">Clear Communication</h4>
              <p>
                A dedicated project manager, weekly updates, and an open-door
                policy. You'll never be left wondering what's happening in your
                own home.
              </p>
            </div>

            <div className="border-amber-950 border-l-3 pl-3">
              <h4 className="pb-2 font-bold">Guaranteed Work</h4>
              <p>
                Every project comes with a written workmanship guarantee. If
                something isn't right, we make it right — no arguments, no
                excuses.
              </p>
            </div>
          </div>
          <img className="lg:h-full lg:pl-15 w-1/2" src="/about.jpg" alt="" />

          <img
            className="hidden lg:flex lg:flex-row order-last lg:pl-70 lg:w-full  lg:object-cover lg:h-full "
            src="/dining.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
