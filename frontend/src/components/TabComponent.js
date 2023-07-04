import React, { Fragment } from "react";

// Destination Data
import { destinationData } from "../data/destiantionData.js";

// Import HeadlessUI tabs
import { Tab } from "@headlessui/react";

const TabComponent = () => {
  return (
    <Tab.Group>
      <Tab.List className="text-primary3">
        {destinationData.map((data, key) => {
          return (
            <Tab key={key} as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? "bg-blue-500 text-white" : "bg-white text-black"
                  }
                >
                  {data.name}
                </button>
              )}
            </Tab>
          );
        })}
      </Tab.List>
    </Tab.Group>
  );
};

export default TabComponent;
