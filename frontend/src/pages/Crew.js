import React, { useState, useEffect } from "react";

// Astronaut Images
import douglas from "../assets/crew/image-douglas-hurley.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";

import CircleTabComponent from "../components/CircleTabComponent";

const Crew = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imgSource, setImgSource] = useState(douglas);

  useEffect(() => {
    if (selectedIndex === 0) setImgSource(douglas);
    else if (selectedIndex === 1) setImgSource(mark);
    else if (selectedIndex === 2) setImgSource(victor);
    else if (selectedIndex === 3) setImgSource(anousheh);
  }, [selectedIndex, setSelectedIndex]);

  return (
    <section className="bg-fixed bg-no-repeat bg-cover bg-bgCrewMobile tb:bg-bgCrewTablet dt:bg-bgCrewDesktop w-full h-full dt:h-screen">
      <div className="w-full h-full flex flex-col justify-start items-center gap-[32px]  pt-[89px] tb:pt-[136px] dt:pt-[212px]">
        {/* Header Text */}
        <div className="flex justify-center items-center gap-[16px] tb:self-start tb:ml-[38.5px] dt:ml-[167px]">
          <p className="text-primary3 opacity-25 text-[16px] tb:text-[20px] dt:text-[28px] font-barlowcondensed font-bold tracking-[2.7px] tb:tracking-[3.375px] dt:tracking-[4.725px]">
            02
          </p>
          <h1 className="uppercase text-primary3 text-[16px] tb:text-[20px] dt:text-[28px] tracking-[2.7px] tb:tracking-[3.375px] dt:tracking-[4.725px] font-barlowcondensed">
            Meet Your Crew
          </h1>
        </div>
        {/* Astronaut Image and Round Tabs */}
        <div className="flex flex-col dt:flex-row items-center justify-center dt:justify-between dt:w-full gap-[32px] ">
          {/* Astronaut Image and Mobile Line */}
          <div className="w-[327px] tb:w-auto flex items-center dt:mr-[137px] justify-center border-b-[1px] border-[#383B4B] tb:border-0 tb:order-last">
            <img
              src={imgSource}
              alt="astronaut"
              className="w-1/2 tb:w-auto dt:absolute bottom-0 right-10"
            />
          </div>
          {/* Circle Tab */}
          <CircleTabComponent
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </div>
      </div>
    </section>
  );
};

export default Crew;
