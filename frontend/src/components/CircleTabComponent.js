import React, { Fragment } from "react";

// Destination Data
import { crewData } from "../data/crewData";

// Import HeadlessUI tab Component
import { Tab } from "@headlessui/react";

const CircleTabComponent = ({ selectedIndex, setSelectedIndex }) => {
  return (
    <Tab.Group
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
      as="div"
      className="dt:w-[680px] flex flex-col justify-center items-center dt:items-start gap-[24px] dt:ml-[165px]"
    >
      <Tab.List className="flex items-center justify-between gap-[20px] tb:gap-[27px] dt:gap-[35px] relative tb:mt-[20px] dt:mt-0 tb:order-last">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`bg-primary3 ${
                selected ? "opacity-100" : "opacity-10"
              } h-[10px] dt:h-[15px] w-[10px] dt:w-[15px] rounded-full`}
            ></button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`bg-primary3 ${
                selected ? "opacity-100" : "opacity-10"
              } h-[10px] dt:h-[15px] w-[10px] dt:w-[15px] rounded-full`}
            ></button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`bg-primary3 ${
                selected ? "opacity-100" : "opacity-10"
              } h-[10px] dt:h-[15px] w-[10px] dt:w-[15px] rounded-full`}
            ></button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`bg-primary3 ${
                selected ? "opacity-100" : "opacity-10"
              } h-[10px] dt:h-[15px] w-[10px] dt:w-[15px] rounded-full`}
            ></button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        {crewData.map((data, key) => {
          return (
            <Tab.Panel
              key={key}
              className="w-full flex flex-col justify-center items-center dt:items-start tb:gap-[8px] text-primary3"
            >
              <h2 className="opacity-50 text-[16px] tb:text-[24px] dt:text-[32px] font-bellefair uppercase mb-[8px] tb:mb-0 dt:mb-[8px]">
                {data.role}
              </h2>
              <h1 className="text-[24px] tb:text-[40px] dt:text-[56px]  font-bellefair uppercase mb-[16px] tb:mb-0 dt:mb-[16px]">
                {data.name}
              </h1>
              <p className="text-[15px] tb:text-[16px] dt:text-[18px] mx-[24px] tb:mx-[155px] dt:mx-0 text-center dt:text-left text-primary2 font-barlow leading-[25px] tb:leading-[28px] dt:leading-[32px] mb-[104px] tb:mb-0 dt:w-[444px]">
                {data.bio}
              </p>
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
      <Tab.Panels></Tab.Panels>
    </Tab.Group>
  );
};

export default CircleTabComponent;
