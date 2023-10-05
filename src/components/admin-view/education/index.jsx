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
    name: "degree",
    placeholder: "Degree Name",
    type: "text",
    label: "Degree Name",
  },
  {
    name: "college",
    placeholder: "College Name",
    type: "text",
    label: "College Name",
  },
  {
    name: "year",
    placeholder: "Year",
    type: "text",
    label: "Year",
  },
];

export default function AdminEducationView({
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

                  <p>College : {item.college}</p>
                  <p>Degree : {item.degree}</p>
                  <p>Year : {item.year}</p>
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
          onClick={() => handleSaveData("education")}
          className="mt-[10px] border border-orange-600 p-4 font-bold text-[16px]"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}
