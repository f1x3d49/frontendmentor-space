import React, { useState, useEffect } from "react";

// Technology Images
import vehiclelandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import vehicleportrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import NumberTabComponent from "../components/NumberTabComponent";

const Technology = () => {
  return (
    <section className="bg-fixed bg-cover bg-no-repeat bg-bgTechnologyMobile tb:bg-bgTechnologyTablet dt:bg-bgTechnologyDesktop w-full h-full">
      <div className="w-full h-full flex flex-col justify-start items-center gap-[32px] pt-[89px] tb:pt-[136px] dt:pt-[212px]">
        {/* Header Text */}
        <div className="flex justify-center items-center gap-[18px] tb:self-start tb:ml-[38.5px] dt:ml-[167px]">
          <p className="text-primary3 opacity-25 text-[16px] tb:text-[20px] dt:text-[28px] font-barlowcondensed font-bold tracking-[2.7px] tb:tracking-[3.375px] dt:tracking-[4.725px]">
            03
          </p>
          <h1 className="uppercase text-primary3 text-[16px] tb:text-[20px] dt:text-[28px] tracking-[2.7px] tb:tracking-[3.375px] dt:tracking-[4.725px] font-barlowcondensed">
            Space Launch 101
          </h1>
        </div>
        {/* Tech Images and Tabs */}
        <div className="flex flex-col dt:flex-row items-center justify-center dt:justify-between dt:w-full gap-[32px]">
          <picture className="w-screen h-full dt:w-[550px] dt:h-[550px] dt:ml-[119px]">
            <source media="(min-width: 300px)" srcSet={vehiclelandscape} />
            <source media="(min-width: 1400px)" srcSet={vehicleportrait} />
            <img src={vehicleportrait} alt="vehicle" />
          </picture>
          <NumberTabComponent />
        </div>
      </div>
    </section>
  );
};

export default Technology;
