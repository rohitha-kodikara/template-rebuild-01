import React from "react";

const OurServices = () => {
  return (
    <div className="py-10 px-6 flex flex-col gap-8 h-full ">
      <span className="inline-block self-start py-2 px-4 font-bold bg-amber-100">
        WHAT WE DO
      </span>
      <h1 className="text-5xl font-light">Our Services</h1>
      <p>
        Whether you're updating a single room or transforming your entire home,
        we have the expertise to make it happen. Browse our services below, or
        get in touch and we'll help you figure out exactly what your project
        needs.
      </p>
      <div className="bg-gray-200 p-4 h-full flex flex-col gap-7  lg:flex lg:flex-row  lg:h-150 ">
        <div className="lg:order-last lg:content-center lg:w-1/3">
          <img
            src="/k1.jpg"
            alt=""
            className="object-cover lg:h-full lg:w-full rounded-lg  h-100 w-full"
          />
        </div>
        <div className=" flex flex-col  lg:gap-9 gap-7 lg:p-5 lg:py-20 lg:w-2/3">
          <h2 className="text-4xl">Kitchen Renovation</h2>

          <p className="font-semibold">
            The kitchen is the heartbeat of your home. We design and build
            spaces that are as beautiful to look at as they are to cook and live
            in — tailored entirely to how you use the room. No off-the-shelf
            solutions, no compromise on quality.
          </p>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3">
              <svg
                className="w-5 h-5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M8 12l2.5 2.5L16 9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Custom cabinetry design, supply, and installation
            </li>
            <li className="flex items-center gap-3">
              <svg
                className="w-5 h-5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M8 12l2.5 2.5L16 9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Worktop fitting in quartz, granite, solid wood, or laminate
            </li>
            <li className="flex items-center gap-3">
              <svg
                className="w-5 h-5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M8 12l2.5 2.5L16 9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Full appliance integration, plumbing, and electrical work
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:pr-50 gap-4">
            <div className="flex flex-col gap-3">
              <span>BUDGET RANGE :</span>
              <span>$8,000 -$30,000</span>
            </div>

            <div className="flex flex-col gap-3">
              <span>ESTIMATED DURATION:</span>
              <span>3-6 weeks</span>
            </div>
          </div>
        </div>
        {/*---------------------------------------------------------*/}
      </div>

      <div className="bg-gray-200 p-4 h-full flex flex-col gap-7  lg:flex lg:flex-row   lg:h-150 ">
        <div className="lg:order-last lg:content-center lg:w-1/3">
          <img
            src="/k2.jpg"
            alt=""
            className="object-cover lg:h-full lg:w-full rounded-lg  h-100 w-full"
          />
        </div>

        <div className=" flex flex-col  lg:gap-9 gap-7 lg:p-5 lg:py-20 lg:w-2/3">
          <h2 className="text-4xl">Restorations</h2>

          <p className="font-semibold">
            Period properties have character that modern builds simply can't
            replicate — but they need specialist hands to preserve it. We
            restore original features while bringing your home up to modern
            standards, striking the balance between heritage and comfort.
          </p>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3">
              <svg
                className="w-5 h-5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M8 12l2.5 2.5L16 9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Original feature preservation, repair, and reinstatement
            </li>
            <li className="flex items-center gap-3">
              <svg
                className="w-5 h-5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M8 12l2.5 2.5L16 9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Timber floor restoration, sanding, and sealing
            </li>
            <li className="flex items-center gap-3">
              <svg
                className="w-5 h-5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M8 12l2.5 2.5L16 9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Period-accurate plastering, cornicing, and joinery
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:pr-50 gap-4">
            <div className="flex flex-col gap-3">
              <span>BUDGET RANGE :</span>
              <span>$5,000 – $40,000</span>
            </div>

            <div className="flex flex-col gap-3">
              <span>ESTIMATED DURATION:</span>
              <span>ESTIMATED DURATION: 4–12 weeks</span>
            </div>
          </div>
        </div>
        {/*---------------------------------------------------------*/}
      </div>

      {/*---------------------------------------------*/}
      <div className="bg-gray-200 p-4 h-full flex flex-col gap-7  lg:flex lg:flex-row  lg:h-150 ">
        <div className="lg:order-last lg:content-center lg:w-1/3">
          <img
            src="/k3.jpg"
            alt=""
            className="object-cover lg:h-full lg:w-full rounded-lg  h-100 w-full"
          />
        </div>
        <div className=" flex flex-col  lg:gap-9 gap-7 lg:p-5 lg:py-20 lg:w-2/3">
          <h2 className="text-4xl">External Works</h2>

          <p className="font-semibold">
            First impressions matter. Whether it's a tired driveway, an
            underused garden, or a boundary that needs rebuilding — our external
            works team delivers the same standard of finish outside your home as
            in. Built to last, designed to impress.
          </p>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3">
              <svg
                className="w-5 h-5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M8 12l2.5 2.5L16 9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Block paving driveways, resin-bound paths, and porcelain patios
            </li>
            <li className="flex items-center gap-3">
              <svg
                className="w-5 h-5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M8 12l2.5 2.5L16 9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Garden fencing, rendered walls, pergolas, and decking
            </li>
            <li className="flex items-center gap-3">
              <svg
                className="w-5 h-5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M8 12l2.5 2.5L16 9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              External drainage, lighting, and automated gating
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:pr-50 gap-4">
            <div className="flex flex-col gap-3">
              <span>BUDGET RANGE :</span>
              <span>$3,000 -$50,000</span>
            </div>

            <div className="flex flex-col gap-3">
              <span>ESTIMATED DURATION:</span>
              <span>2-8 weeks</span>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------------------------------------------*/}
    </div>
  );
};

export default OurServices;
