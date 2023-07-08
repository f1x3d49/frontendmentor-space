import React, { useState, useEffect } from "react";

// Planet Images
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import moon from "../assets/destination/image-moon.png";
import titan from "../assets/destination/image-titan.png";

import TabComponent from "../components/TabComponent";

const Destiantion = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imgSource, setImgSource] = useState(moon);

  useEffect(() => {
    if (selectedIndex === 0) setImgSource(moon);
    else if (selectedIndex === 1) setImgSource(mars);
    else if (selectedIndex === 2) setImgSource(europa);
    else if (selectedIndex === 3) setImgSource(titan);
  }, [selectedIndex, setSelectedIndex]);

  return (
    <section className="bg-fixed bg-no-repeat bg-cover bg-bgDestinationMobile tb:bg-bgDestinationTablet dt:bg-bgDestinationDesktop w-full mb:h-full ">
      <div className="w-full h-full flex flex-col justify-start items-center gap-[32px] pt-[89px] tb:pt-[136px] dt:pt-[212px]">
        {/* Header Text */}
        <div className="flex justify-center items-center gap-[18px] tb:self-start tb:ml-[38.5px] dt:ml-[167px]">
          <p className="text-primary3 opacity-25 text-[16px] tb:text-[20px] dt:text-[28px] font-barlowcondensed font-bold tracking-[2.7px] tb:tracking-[3.375px] dt:tracking-[4.725px]">
            01
          </p>
          <h1 className="uppercase text-primary3 text-[16px] tb:text-[20px] dt:text-[28px] tracking-[2.7px] tb:tracking-[3.375px] dt:tracking-[4.725px] font-barlowcondensed">
            Pick Your Destination
          </h1>
        </div>
        {/* Planet Image and Tabs */}
        <div className="flex flex-col dt:flex-row items-center justify-center dt:justify-between dt:w-full gap-[32px]">
          <img
            src={imgSource}
            alt="planet"
            className="w-[259px] h-[259px] dt:w-[550px] dt:h-[550px] dt:ml-[119px]"
          />
          <TabComponent
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </div>
      </div>
    </section>
  );
};

export default Destiantion;
