"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Home() {
  const resume = "/resume.pdf";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 sm:pb-4 md:pb-20 min-h-screen md:ml-14 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-7 place-self-center text-center sm:text-left"
      >
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600">
            Hello, I&apos;m{" "}
          </span>
          <br />
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Suvankar",
              1000,
              "Front-End Developer",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
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
        <p className="text-[#ABD7BE] mb-6 text-base sm:text-lg lg:text-xl text-left md:text-left tracking-wide">
          I am a learning front-end developer with a strong foundation in
          programming and algorithmic problem-solving. I have a deep passion for
          exploring various tools and frameworks in the world of web development
          and am always on the lookout for new and innovative ways to create
          beautiful and functional websites
        </p>
        <div>
          <button className="px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
            <a href={resume} download="suvankarResume">
              Download CV
            </a>
          </button>
          {/* <button className="px-1 py-1 rounded-full mr-4 bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 w-full sm:w-fit mt-3 ">
                  <span className="block bg-[#121212] rounded-full hover:bg-slate-800 px-5 py-2">
                    Download CV
                  </span>
                </button> */}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-5 place-self-center mt-10 lg:mt-0"
      >
        <div className="rounded-full bg-[#181818] w-[280px] h-[280px] lg:w-[300px] lg:h-[300px] relative sm:mb-4 md:mb-10 hidden sm:block">
          <Image
            src="/images/dark_anime.jpg"
            alt="hero image"
            className=" rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={450}
            height={450}
          />
        </div>
      </motion.div>
    </div>
  );
}
