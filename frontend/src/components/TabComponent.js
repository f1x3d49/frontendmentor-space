import React, { Fragment } from "react";

// Destination Data
import { destinationData } from "../data/destiantionData.js";

// Import HeadlessUI tabs
import { Tab } from "@headlessui/react";

const TabComponent = ({ selectedIndex, setSelectedIndex }) => {
  return (
    <Tab.Group
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
      as="div"
      className="flex flex-col justify-center items-center dt:items-start gap-[24px] dt:mr-[163px]"
    >
      <Tab.List className="flex items-center justify-between gap-[16px] tb:gap-[27px] dt:gap-[35px] relative tb:mt-[20px] dt:mt-0">
        {destinationData.map((data, key) => {
          return (
            <Tab
              key={key}
              as={Fragment}
              className="text-[14px] tb:text-[16px] font-barlowcondensed tracking-[2.362px] tb:tracking-[2.7px] relative destinationBar"
            >
              {({ selected }) => (
                <button
                  className={`${
                    selected
                      ? "text-primary3 after:opacity-100 after:w-full"
                      : "text-primary2"
                  }`}
                >
                  {data.name}
                </button>
              )}
            </Tab>
          );
        })}
      </Tab.List>
      <Tab.Panels>
        {destinationData.map((data, key) => {
          return (
            <Tab.Panel
              key={key}
              className="w-full flex flex-col justify-center items-center dt:items-start tb:gap-[36px] text-primary3"
            >
              <h1 className="text-center text-[56px] tb:text-[80px] dt:text-[100px] font-bellefair">
                {data.name}
              </h1>
              <p className="w-[327px] tb:w-[573px] dt:w-[444px] text-primary2 text-center dt:text-left text-[15px] tb:text-[16px] dt:text-[18px] font-barlow leading-[25px] tb:leading-[28px] dt:leading-[32px] mb-[32px]">
                {data.description}
              </p>
              {/* Line Break */}
              <div className="w-[327px] tb:w-[573px] dt:w-[444px] h-[1px] bg-[#383B4B] mb-[32px]"></div>
              {/* Distance and Time */}
              <div className="flex flex-col tb:flex-row items-center dt:items-start justify-center gap-[24px] tb:gap-[72px] mb-[10px] tb:mb-0">
                {/* Distance */}
                <div className="flex flex-col items-center dt:items-start justify-center gap-[12px]">
                  <h2 className="text-[14px] font-barlowcondensed tracking-[2.362px] text-primary2">
                    AVG. DISTANCE
                  </h2>
                  <h1 className="text-[28px] font-bellefair uppercase text-primary3">
                    {data.distance}
                  </h1>
                </div>
                {/* Travel Time */}
                <div className="flex flex-col items-center dt:items-start justify-center gap-[12px]">
                  <h2 className="text-[14px] font-barlowcondensed tracking-[2.362px] text-primary2">
                    EST. TRAVEL TIME
                  </h2>
                  <h1 className="text-[28px] font-bellefair uppercase text-primary3">
                    {data.travel}
                  </h1>
                </div>
              </div>
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TabComponent;
