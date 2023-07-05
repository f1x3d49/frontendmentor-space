import React, { Fragment } from "react";

// Destination Data
import { crewData } from "../data/crewData";

// Import HeadlessUI tab Component
import { Tab } from "@headlessui/react";

const CircleTabComponent = () => {
  return (
    <Tab.Group
      as="div"
      className="flex flex-col justify-center items-center gap-[24px]"
    >
      <Tab.List className="flex items-center justify-between gap-[20px] tb:gap-[27px] dt:gap-[35px] relative tb:mt-[20px] dt:mt-0">
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
              className="w-full flex flex-col justify-center items-center dt:items-start tb:gap-[36px] text-primary3"
            >
              <h2>{data.role}</h2>
              <h1>{data.name}</h1>
              <p>{data.bio}</p>
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
      <Tab.Panels></Tab.Panels>
    </Tab.Group>
  );
};

export default CircleTabComponent;
