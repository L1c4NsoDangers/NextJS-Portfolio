"use-client"; // Tandai komponen ini sebagai komponen klien

import React, { useEffect, useState } from "react"; // Tambahkan import useState dan useEffect

<use-client />;
import ClientAboutView from "@/components/client-view/about";
import ClientContactView from "@/components/client-view/contact";
import ClientExperienceAndEducationView from "@/components/client-view/experience";
import ClientHomeView from "@/components/client-view/home";
import ClientProjectView from "@/components/client-view/project";

async function extractAllDatas(sections) {
  try {
    const requests = sections.map((section) =>
      fetch(`https://nacilprofilexxx.vercel.app/api/${section}/get`, {
        method: "GET",
        cache: "no-store",
      }).then((res) => res.json())
    );

    const data = await Promise.all(requests);

    return data.map((item) => item.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default function Home() {
  const sections = ["home", "about", "experience", "education", "project"];
  const [sectionData, setSectionData] = useState({}); // Gunakan useState untuk menyimpan data

  useEffect(() => {
    async function fetchData() {
      const data = await extractAllDatas(sections);
      const sectionDataObject = {};

      sections.forEach((section, index) => {
        sectionDataObject[section] = data[index];
      });

      setSectionData(sectionDataObject);
    }

    fetchData();
  }, []);

  return (
    <div>
      <ClientHomeView data={sectionData["home"]} />
      <ClientAboutView data={sectionData["about"]} />
      <ClientExperienceAndEducationView
        educationData={sectionData["education"]}
        experienceData={sectionData["experience"]}
      />
      <ClientProjectView data={sectionData["project"]} />
      <ClientContactView />
    </div>
  );
}
