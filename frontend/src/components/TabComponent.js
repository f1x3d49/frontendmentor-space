import React, { Fragment } from "react";

// Destination Data
import { destinationData } from "../data/destiantionData.js";

// Import HeadlessUI tabs
import { Tab } from "@headlessui/react";

const TabComponent = () => {
  return (
    <Tab.Group>
      <Tab.List className="flex items-center justify-between gap-[16px] relative">
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
              className="w-full flex flex-col justify-center items-center text-white"
            >
              <h1>{data.name}</h1>
              <p>{data.description}</p>
              {/* Line Break */}
              <div className="w-[327px] h-[1px] bg-[#383B4B]"></div>
              {/* Distance */}
              <div className="flex flex-col items-start justify-center gap-[12px]">
                <h2>AVG. DISTANCE</h2>
                <h1>{data.distance}</h1>
              </div>
              {/* Travel Time */}
              <div className="flex flex-col items-start justify-center gap-[12px]">
                <h2>EST. TRAVEL TIME</h2>
                <h1>{data.travel}</h1>
              </div>
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TabComponent;
