import React from "react";

const Hero = () => {
  return (
    <div className="flex h-full w-full mt-5">
      <div className="space-y-3 max-w-[50%]">
        <div className="text-3xl text-blue-400 font-bold">
          Month to Month Rental
        </div>
        <div className="text-xl text-blue-400 font-semibold">
          Business Comfort, Home Feeling
        </div>
        <div className="text-sm font-normal">
          Flexible housing for the commitment-free. Enjoy the comfort of home
          with our month-to-month leases, tailored for those seeking short-term
          solutions without the long-term ties
        </div>
        <button className="py-2 px-4 text-white font-bold">Consult</button>
      </div>
      <div>
        <img src="" /> image
      </div>
    </div>
  );
};

export default Hero;
