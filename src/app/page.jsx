import ClientAboutView from "@/components/client-view/about";
import ClientContactView from "@/components/client-view/contact";
import ClientExperienceAndEducationView from "@/components/client-view/experience";
import ClientHomeView from "@/components/client-view/home";
import ClientProjectView from "@/components/client-view/project";

async function extractAllDatas(sections) {
  try {
    const requests = sections.map((section) =>
      fetch(`https://nacilprofile.vercel.app/api/${section}/get`, {
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

export default async function Home() {
  const sections = ["home", "about", "experience", "education", "project"];
  const [
    homeSectionData,
    aboutSectionData,
    experienceSectionData,
    educationSectionData,
    projectSectionData,
  ] = await extractAllDatas(sections);

  return (
    <div>
      <ClientHomeView data={homeSectionData} />
      <ClientAboutView
        data={
          aboutSectionData && aboutSectionData.length ? aboutSectionData[0] : []
        }
      />
      <ClientExperienceAndEducationView
        educationData={educationSectionData}
        experienceData={experienceSectionData}
      />
      <ClientProjectView data={projectSectionData} />
      <ClientContactView />
    </div>
  );
}
