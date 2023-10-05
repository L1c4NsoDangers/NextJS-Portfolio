"use client";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";

export default function ClientExperienceAndEducationView({
  educationData,
  experienceData,
}) {
  console.log(educationData, experienceData, "experienceData");

  return (
    <div className="pt-12" id="experience">
      <div className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto">
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col gap-5">
            <AnimationWrapper className={"py-6 sm:py-16"}>
              <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
                <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                  {"My Experince".split(" ").map((item, index) => (
                    <span
                      className={`${
                        index === 1 ? "text-orange-600" : "text-black"
                      }`}
                    >
                      {item}{" "}
                    </span>
                  ))}
                </h1>
              </div>
            </AnimationWrapper>
            <AnimationWrapper>
              <div className="flex w-full">
                <motion.div className="container">
                  <Timeline position="right">
                    {experienceData && experienceData.length
                      ? experienceData.map((experienceItem) => (
                          <TimelineItem>
                            <TimelineSeparator>
                              <TimelineDot className="bg-orange-600" />
                              <TimelineConnector className="bg-orange-600" />
                            </TimelineSeparator>
                            <TimelineContent>
                              <div className="border-[2px] p-4 rounded-[8px] border-orange-600 mt-[14px] ml-[16px]">
                                <h3 className="font-extrabold mt-2">
                                  Name : {experienceItem.name}
                                </h3>
                                <p className="font-extralight mt-2">
                                  Company : {experienceItem.company}
                                </p>
                                <p className="font-extralight mt-2">
                                  Position : {experienceItem.position}
                                </p>
                                <p className="font-extralight mt-2">
                                  Location : {experienceItem.location}
                                </p>
                                <p className="font-extralight mt-2">
                                  Duration : {experienceItem.duration}
                                </p>
                              </div>
                            </TimelineContent>
                          </TimelineItem>
                        ))
                      : null}
                  </Timeline>
                </motion.div>
              </div>
            </AnimationWrapper>
          </div>
          <div className="flex flex-col gap-5">
            <AnimationWrapper className={"py-6 sm:py-16"}>
              <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
                <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                  {"My Education".split(" ").map((item, index) => (
                    <span
                      className={`${
                        index === 1 ? "text-orange-600" : "text-black"
                      }`}
                    >
                      {item}{" "}
                    </span>
                  ))}
                </h1>
              </div>
            </AnimationWrapper>
            <AnimationWrapper>
              <div className="flex w-full">
                <motion.div className="container">
                  <Timeline position="right">
                    {educationData && educationData.length
                      ? educationData.map((educationItem) => (
                          <TimelineItem>
                            <TimelineSeparator>
                              <TimelineDot className="bg-orange-600" />
                              <TimelineConnector className="bg-orange-600" />
                            </TimelineSeparator>
                            <TimelineContent>
                              <div className="border-[2px] p-4 rounded-[8px] border-orange-600 mt-[14px] ml-[16px]">
                                <h3 className="font-extrabold mt-2">
                                  Name : {educationItem.name}
                                </h3>
                                <p className="font-extralight mt-2">
                                  Job or College : {educationItem.college}
                                </p>
                                <p className="font-extralight mt-2">
                                  Degree : {educationItem.degree}
                                </p>
                                <p className="font-extralight mt-2">
                                  Year : {educationItem.year}
                                </p>
                              </div>
                            </TimelineContent>
                          </TimelineItem>
                        ))
                      : null}
                  </Timeline>
                </motion.div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
