import React, { Fragment } from "react";

// Technology Data
import { technologyData } from "../data/technologyData";

// HeadlessUI Tab Component
import { Tab } from "@headlessui/react";

const NumberTabComponent = () => {
  return (
    <Tab.Group
      as="div"
      className="flex flex-col dt:flex-row justify-center dt:items-start items-center gap-[24px] dt:gap-[80px] dt:ml-[165px]"
    >
      <Tab.List className="flex dt:flex-col items-center justify-between gap-[20px] tb:gap-[27px] dt:gap-[35px] tb:mt-[20px] dt:mt-0">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`w-[40px] h-[40px] tb:w-[60px] tb:h-[60px] dt:w-[80px] dt:h-[80px] rounded-full  border-[1px] border-primary3 flex items-center justify-center font-bellefair text-[16px] tracking-[1px] tb:text-[24px] tb:tracking-[1.5px] dt:text-[32px] dt:tracking-[2px] ${
                selected
                  ? " bg-primary3 border-opacity-100 text-primary1"
                  : "border-opacity-25 text-primary3"
              }`}
            >
              1
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`w-[40px] h-[40px] tb:w-[60px] tb:h-[60px] dt:w-[80px] dt:h-[80px] rounded-full border-[1px] border-primary3 flex items-center justify-center font-bellefair text-[16px] tracking-[1px] tb:text-[24px] tb:tracking-[1.5px] dt:text-[32px] dt:tracking-[2px] ${
                selected
                  ? "bg-primary3 border-opacity-100 text-primary1"
                  : "border-opacity-25 text-primary3"
              }`}
            >
              2
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`w-[40px] h-[40px] tb:w-[60px] tb:h-[60px] dt:w-[80px] dt:h-[80px] rounded-full border-[1px] border-primary3 flex items-center justify-center font-bellefair text-[16px] tracking-[1px] tb:text-[24px] tb:tracking-[1.5px] dt:text-[32px] dt:tracking-[2px] ${
                selected
                  ? "bg-primary3 border-opacity-100 text-primary1"
                  : "border-opacity-25 text-primary3"
              }`}
            >
              3
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        {technologyData.map((data, key) => {
          return (
            <Tab.Panel
              key={key}
              className="w-full flex flex-col dt:w-[470px] justify-center items-center dt:items-start tb:gap-[8px]"
            >
              <h2 className="text-primary2 uppercase text-center dt:text-left text-[14px] tb:text-[16px] tracking-[2.362px] tb:tracking-[2.7px] font-barlowcondensed">
                The Terminology...
              </h2>
              <h1 className="text-primary3 text-center dt:text-left uppercase text-[24px] tb:text-[40px] dt:text-[56px] font-bellefair">
                {data.name}
              </h1>
              <p className="text-primary2 text-center dt:text-left text-[15px] tb:text-[16px] dt:text-[18px] leading-[25px] tb:leading-[28px] dt:leading-[32px] font-barlow mx-[24px] tb:mx-[155px] dt:mx-0">
                {data.description}
              </p>
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default NumberTabComponent;
