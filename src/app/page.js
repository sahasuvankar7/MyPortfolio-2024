"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Home() {
  const resume = "/resume.pdf";

  return (
    <div className="flex gap-10 justify-between items-center flex-col-reverse sm:pb-4 md:pb-20 min-h-screen md:ml-14 mt-20 md:flex-row md:pr-16 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="place-self-center text-center sm:text-left mt-8 px-8 md:px-10"
      >
        <h1 className="text-left text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600">
            Hello, I&apos;m{" "}
          </span>
          <br />
          <TypeAnimation
            sequence={[
              "Suvankar",
              1000,
              "Front-End Developer",
              1000,
              "Problem Solver",
              1000,
              "Quick Learner",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ABD7BE] mb-6 text-lg leading-recl sm:text-lg lg:text-lg md:text-left tracking-wide text-left">
          I am a learning front-end developer with a strong foundation in
          programming and algorithmic problem-solving. I have a deep passion for
          exploring various tools and frameworks in the world of web development
          and am always on the lookout for new and innovative ways to create
          beautiful and functional websites
        </p>
        <div>
          <button className="px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
            <a
              href="https://drive.google.com/uc?export=download&id=1BaabPfmQLQ4IdaHtCcvkMg61JLLypWIX"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download CV
            </a>
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="place-self-center mt-10 lg:mt-0 md:mr-10"
      >
        <div className="rounded-full bg-[#181818] w-[280px] h-[280px] lg:w-[300px] lg:h-[300px] relative flex justify-center items-center">
          <Image
            src="/images/dark_anime.jpg"
            alt="hero image"
            className="rounded-full"
            layout="intrinsic"
            width={450}
            height={450}
          />
        </div>
      </motion.div>
    </div>
  );
}
