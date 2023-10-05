"use client";

import { useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ClientProjectView({ data }) {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const router = useRouter();

  return (
    <div className="pt-10 " id="project">
      <div className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto">
        <AnimationWrapper className={"py-6 sm:py-16"}>
          <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
            <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
              {"Our Projects".split(" ").map((item, index) => (
                <span
                  className={`${
                    index === 1 ? "text-orange-600" : "text-black"
                  }`}
                >
                  {item}{" "}
                </span>
              ))}
            </h1>
            <svg id="progress" width={100} height={100} viewBox="0 0 100 100">
              <circle
                cx={"50"}
                cy={"50"}
                r="30"
                pathLength={"1"}
                className="stroke-black"
              />
              <motion.circle
                cx={"50"}
                cy={"50"}
                r="30"
                pathLength={"1"}
                className="stroke-orange-600"
                style={{ pathLength: scrollXProgress }}
              />
            </svg>
          </div>
        </AnimationWrapper>
        <AnimationWrapper>
          <ul className="project-wrapper" ref={containerRef}>
            {data && data.length
              ? data.map((item, index) => (
                  <li
                    className="w-auto flex items-stretch cursor-pointer"
                    key={index}
                  >
                    <div className="border-2 w-full relative border-orange-600 items-center transition-all rounded-lg flex flex-col">
                      <div className="flex w-auto h-auto p-4 flex-col xl:flex-row items-stretch xl:items-center">
                        <div className="flex items-center order-2 xl:order-1">
                          <div className="flex items-center flex-col">
                            <h3 className="text-lg text-black capitalize text-center font-extrabold">
                              {item.name}
                            </h3>
                            <p className="text-sm mt-2 text-black capitalize text-center font-bold">
                              {item.createdAt.split("T")[0]}
                            </p>
                            <div className="grid justify-center items-center gap-2 mt-5 grid-cols-2 h-full max-h-[200px] w-full">
                              {item?.technologies.split(",").map((techItem) => (
                                <div className="w-full text-center flex justify-start items-center">
                                  <button className="whitespace-nowrap text-ellipsis overflow-hidden py-3 w-[120px]  px-6 border-[2px] border-orange-600 bg-white text-black font-semibold rounded-lg text-xs tracking-widest shadow-sm hover:shadow-orange-600 transition-all outline-none">
                                    {techItem}
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute w-full bottom-0 justify-center flex gap-2">
                        <button
                          onClick={() => router.push(item.website)}
                          className="p-2 text-white font-semibold text-[14px] tracking-widest bg-orange-600 transition-all outline-none"
                        >
                          Website
                        </button>
                        <button
                          onClick={() => router.push(item.github)}
                          className="p-2 text-white font-semibold text-[14px] tracking-widest bg-orange-600 transition-all outline-none"
                        >
                          Github
                        </button>
                      </div>
                    </div>
                  </li>
                ))
              : null}
          </ul>
        </AnimationWrapper>
      </div>
    </div>
  );
}
