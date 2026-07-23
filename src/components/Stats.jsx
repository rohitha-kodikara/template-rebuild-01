import React from "react";

const Stats = () => {
  return (
    <>
      <div className="lg:px-15 -z-50 flex flex-col gap-6 bg-neutral-900 py-10 px-6">
        <span className="inline-block self-start py-2 px-4 font-bold bg-amber-100   ">
          STATS
        </span>

        {/*-------------------------------------------------*/}
        <div className="lg:grid lg:grid-cols-2 lg:gap-15 flex flex-col gap-6">
          <h1 className="lg:text-7xl font-extralight text-4xl sm:text-5xl text-white">
            Results that speak for themselves.
          </h1>
          <p className="text-white lg:text-xl">
            Numbers don't lie. Every stat below is earned through real projects,
            real clients, and work we stand behind with a written guarantee.
            This is what 15 years of doing things properly looks like.
          </p>
          {/*squares*/}
          <div className=" lg:col-span-2 flex flex-col gap-5 sm:grid sm:grid-cols-2  lg:flex lg:flex-row lg:h-full lg:w-full lg:justify-evenly lg:items-end ">
            <div className="sm:h-70 h-50 flex flex-col justify-between lg:w-full lg:overflow-hidden lg:justify-between group relative bg-white text-black p-8 border-l-9 border-blue-400 rounded-lg lg:h-100 ">
              <span className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-neutral-400"></span>
              <h2 className="font-bold text-4xl ">2.5k+</h2>

              <div className="flex flex-col">
                <h5 className="order-first font-bold">Project Completed</h5>
                <p className=" group-hover:block sm:block lg:hidden mb-2 lg:order-last">
                  Across kitchens, bathrooms, lofts, extensions, and more — all
                  delivered on time and on budget.
                </p>
              </div>
            </div>

            <div className="sm:h-70 h-50  flex flex-col justify-between lg:w-full lg:overflow-hidden lg:justify-between group relative bg-white text-black p-8 border-l-9 border-blue-400 rounded-lg lg:h-90 ">
              <span className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-neutral-400"></span>
              <h2 className="font-bold text-4xl ">40+</h2>

              <div className="lg:flex lg:flex-col">
                <h5 className="order-first font-bold">Skilled Tradespeople</h5>
                <p className=" group-hover:block sm:block lg:hidden mb-2 order-last">
                  Our in-house team of fully qualified carpenters, plumbers,
                  electricians, and tilers — no unreliable subcontractors.
                </p>
              </div>
            </div>

            <div className="sm:h-70 h-50 flex flex-col justify-between lg:w-full lg:overflow-hidden lg:justify-between group relative bg-white text-black p-8 border-l-9 border-blue-400 rounded-lg lg:h-80">
              <span className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-neutral-400"></span>
              <h2 className="font-bold text-4xl ">10+</h2>

              <div className="lg:flex lg:flex-col">
                <h5 className="order-first font-bold">Years of Experience</h5>
                <p className=" group-hover:block sm:block lg:hidden mb-2 order-last">
                  Improving homes across London and the South East since 2009.
                  Trusted by families, landlords, and developers alike.
                </p>
              </div>
            </div>

            <div className="sm:h-70 h-50  flex flex-col justify-between lg:w-full lg:overflow-hidden lg:justify-between group relative bg-white text-black p-8 border-l-9 border-blue-400 rounded-lg lg:h-70">
              <span className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-neutral-400"></span>
              <h2 className="font-bold text-4xl ">100%</h2>

              <div className="lg:flex lg:flex-col">
                <h5 className="order-first font-bold">Client Satisfaction</h5>
                <p className=" group-hover:block sm:block lg:hidden mb-2 lg:order-last">
                  Every client rated their project experience 5 stars
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*-------------------------------------------------*/}
      </div>
    </>
  );
};

export default Stats;
