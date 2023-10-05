"use client";

import React from "react";
import FormControls from "../form-controls";

const controls = [
  {
    name: "name",
    placeholder: "Name",
    type: "text",
    label: "Name",
  },
  {
    name: "company",
    placeholder: "Company",
    type: "text",
    label: "Company",
  },
  {
    name: "position",
    placeholder: "Position",
    type: "text",
    label: "Position",
  },
  {
    name: "location",
    placeholder: "Location",
    type: "text",
    label: "Location",
  },
  {
    name: "duration",
    placeholder: "Duration",
    type: "text",
    label: "Duration",
  },
];

export default function AdminExperienceView({
  handleSaveData,
  formData,
  setFormData,
  data,
}) {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pb-8 pt-6 mb-4">
        <div className="mb-10">
          {data && data.length
            ? data.map((item) => (
                <div className="flex flex-col gap-4 border p-4 border-orange-600">
                  <p className="font-extrabold">Name : {item.name}</p>
                  <p>Company : {item.company}</p>
                  <p>Position : {item.position}</p>
                  <p>Location : {item.location}</p>
                  <p>Duration : {item.duration}</p>
                </div>
              ))
            : null}
        </div>
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("experience")}
          className="mt-[10px] border border-orange-600 p-4 font-bold text-[16px]"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}
