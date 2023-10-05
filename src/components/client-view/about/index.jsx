"use client";

import { useMemo } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutMeImage from "../../../assets/about-image.png";

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

const skillItemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function ClientAboutView({ data }) {
  console.log(data, "aboutdata");

  const setVariants = useMemo(() => variants(), []);

  const aboutDataInfo = [
    {
      label: "Client",
      value: data?.noofclients || "0",
    },
    {
      label: "Projects",
      value: data?.noofprojects || "0",
    },
    {
      label: "Experience",
      value: data?.yearofexperience || "0",
    },
  ];

  const headingText = "WHY HIRE ME FOR YOUR NEXT PROJECT ?";

  return (
    <div className="pt-24" id="about">
      <div className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto">
        <div className="w-full flex">
          <AnimationWrapper className="rounded-lg  w-full grid-flow-row grid grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-orange-600 bg-gray-200 z-10">
            {aboutDataInfo.map((infoItem, index) => (
              <motion.div
                className={`flex items-center justify-center
                ${
                  index === 0
                    ? "sm:justify-center"
                    : index === 1
                    ? "sm:justify-center"
                    : "sm:justify-center"
                } py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0
                `}
                key={index}
                custom={{ duration: 2 + index }}
                variants={setVariants}
              >
                <div className="flex justify-center text-center items-center m-0 w-40 sm:w-auto">
                  <div className="flex justify-center text-center items-center flex-col">
                    <p className="text-[50px] text-center text-orange-600 font-bold">
                      {infoItem.value}+
                    </p>
                    <p className="text-[25px] font-bold text-black">
                      {infoItem.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimationWrapper>
        </div>
        <AnimationWrapper className={"pt-6"}>
          <div className="flex flex-col justify-center text-center items-center row-start-2 sm:row-start-1">
            <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
              {headingText.split(" ").map((item, index) => (
                <span
                  className={`${
                    index === 6 ? "text-orange-600" : "text-black"
                  }`}
                >
                  {item}{" "}
                </span>
              ))}
            </h1>
            <p className="text-orange-600 mt-4 mb-8 text-xl font-bold">
              {data?.aboutme}
            </p>
          </div>
        </AnimationWrapper>
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
          <AnimationWrapper className="flex w-full">
            <motion.div variants={setVariants} className="h-full w-full p-4">
              <Image
                src={aboutMeImage}
                alt="About Me"
                layout="responsive"
                height={414}
                width={508}
                quality={100}
              />
            </motion.div>
          </AnimationWrapper>
          <AnimationWrapper className={"flex items-center w-full p-4"}>
            <motion.div
              variants={setVariants}
              className="grid gap-4 grid-cols-3 h-full max-h-[200px] w-full"
            >
              {data && data.skills
                ? data.skills.split(",").map((skill) => (
                    <motion.div
                      className="w-full flex justify-center items-center"
                      variants={skillItemVariant}
                      key={skill}
                    >
                      <button className="whitespace-nowrap text-ellipsis overflow-hidden py-3 w-[160px] px-6 border-[2px] border-orange-600 bg-[#fff] text-[#000] font-semibold rounded-lg text-xl tracking-widest hover:shadow-green-main transition-all outline-none">
                        {skill}
                      </button>
                    </motion.div>
                  ))
                : null}
            </motion.div>
          </AnimationWrapper>
        </div>
      </div>
    </div>
  );
}
