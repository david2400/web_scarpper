import React, { useState, Component } from "react";
import Select from "react-select";

const Hotels = [
  { value: 1, label: "Coral Beach Maldives" },
  { value: 2, label: "Ilaa Beach Maldives" },
  { value: 3, label: "Finolhu" },
  { value: 4, label: "Arena" },
  { value: 5, label: "Kaani Beach Hotel" },
];

const MultiSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState(null);

  const setHandle = (e) => {
    setSelectedOptions(Array.isArray(e) ? e.map((option) => option.label) : []);
  };

  return (
    <div className="mx-auto container py-8">
      <strong><h1 className="ml-2 text-md">Select Hotels</h1></strong>
      <div className="flex-wrap items-center lg:justify-between justify-center mt-3">
        <div className="px-2">
          <Select options={Hotels} onChange={setHandle} isMulti />
        </div>
        <div>{selectedOptions}</div>
      </div>
    </div>
  );
}

export default MultiSelect;