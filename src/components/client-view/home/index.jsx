"use client";

import { useMemo, useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import Image from "next/image";
import aiImage from "../../../assets/ai-image.png";
import { FaSquareThreads } from "react-icons/fa6";

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

const socialIcons = [
  {
    id: "facebook",
    icon: <FaFacebookSquare className="w-10 h-10 text-orange-600 " />,
  },
  {
    id: "instagram",
    icon: <FaInstagramSquare className="w-10 h-10 text-orange-600 " />,
  },
  {
    id: "thread",
    icon: <FaSquareThreads className="w-10 h-10 text-orange-600 " />,
  },
  {
    id: "linkedin",
    icon: <FaLinkedin className="w-10 h-10 text-orange-600 " />,
  },
];

export default function ClientHomeView({ data }) {
  console.log(data, "ClientHomeView");

  const setVariants = useMemo(() => variants(), []);
  const containerRef = useRef(null);

  return (
    <div className="pt-14" id="home">
      <div className="max-w-screen-xl mt-[24] px-8 xl:px-16 mx-auto">
        <AnimationWrapper>
          <motion.div
            className={
              "grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            }
            variants={setVariants}
          >
            <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="mb-4 text-3xl text-black lg:text-4xl xl:text-6xl font-medium leading-normal">
                I am An
                <span className="mb-4 text-3xl text-orange-600 lg:text-4xl xl:text-6xl font-medium leading-normal">
                  Creative Development
                </span>
                <br></br>
                Experience
              </h1>
              <p className="text-black mt-4 mb-8 font-bold">
                {data && data.length ? data[0]?.summary : null}
              </p>
              <motion.div className="flex gap-3 cursor-pointer">
                {socialIcons.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      damping: 20,
                      stiffness: 80,
                      duration: 4,
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{
                      scale: 0.8,
                      rotate: -360,
                      borderRadius: "100%",
                    }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div ref={containerRef} className="flex w-full justify-end">
              <motion.div
                drag
                dragConstraints={containerRef}
                className="w-[400px] h-[400px] relative bg-orange-600"
              >
                <div className="w-[400px] h-[400px] top-[40px] left-[-30px] rounded-lg border-[6px] border-black absolute"></div>
                <Image
                  src={aiImage}
                  alt="Profile Picture"
                  layout="responsive"
                  quality={100}
                  height={300}
                  width={300}
                  className=" absolute top-[-15px]"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimationWrapper>
      </div>
    </div>
  );
}
