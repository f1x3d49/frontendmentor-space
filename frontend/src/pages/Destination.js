import React, { useState } from "react";

import mars from "../assets/destination/image-mars.png";
import TabComponent from "../components/TabComponent";

const Destiantion = () => {
  const [currentImage, setCurrentImage] = useState(1);

  return (
    <section className="bg-fixed bg-no-repeat bg-cover bg-bgDestinationMobile tb:bg-bgDestinationTablet dt:bg-bgDestinationDesktop w-full h-screen ">
      <div className="w-full h-full flex flex-col justify-start items-center gap-[32px] pt-[89px] tb:pt-[136px] dt:pt-[212px]">
        {/* Header Text */}
        <div className="flex justify-center items-center gap-[18px]">
          <p className="text-primary3 opacity-25 text-[16px] tb:text-[20px] dt:text-[28px] font-barlowcondensed font-bold tracking-[2.7px] tb:tracking-[3.375px] dt:tracking-[4.725px]">
            01
          </p>
          <h1 className="uppercase text-primary3 text-[16px] tb:text-[20px] dt:text-[28px] tracking-[2.7px] tb:tracking-[3.375px] dt:tracking-[4.725px] font-barlowcondensed">
            Pick Your Destination
          </h1>
        </div>
        {/* Planet Image and Tabs */}
        <div className="flex flex-col tb:flex-row items-center justify-center">
          <img src={mars} alt="planet" className="w-[259px] h-[259px]" />
          <TabComponent />
        </div>
      </div>
    </section>
  );
};

export default Destiantion;
