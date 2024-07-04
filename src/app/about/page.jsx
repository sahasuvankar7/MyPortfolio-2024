"use client";

import React, { useRef, useState, useTransition } from "react";
import { motion, useInView } from "framer-motion";
import Tab from "../tab";
import Image from "next/image";
import { usePageState } from "../../../usePageState";

const Tabdata = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-5  md:grid-cols-7 items-center mt-5">
        <Image
          className=" text-white"
          width={40}
          height={40}
          src="/images/skills/c-1.svg"
          alt="C"
        />
        <Image
          className=" text-white"
          width={60}
          height={60}
          src="/images/skills/c++.svg"
          alt="C"
        />
        <Image
          className=" text-white"
          width={80}
          height={70}
          src="/images/skills/java.svg"
          alt="C"
        />
        <Image
          className=" text-white"
          width={60}
          height={50}
          src="/images/skills/python.svg"
          alt="C"
        />
        <Image
          className=" text-white"
          width={80}
          height={80}
          src="/images/skills/mysql.svg"
          alt="C"
        />
        <Image
          className=" text-white"
          width={70}
          height={70}
          src="/images/skills/html.svg"
          alt="C"
        />
        <Image
          className=" text-white"
          width={70}
          height={60}
          src="/images/skills/css.svg"
          alt="C"
        />
        <Image
          className=" text-white"
          width={60}
          height={50}
          src="/images/skills/tailwindcss.svg"
          alt="C"
        />

        <Image
          className=" text-white"
          width={60}
          height={60}
          src="/images/skills/javascript.svg"
          alt="C"
        />
        <Image
          className=" text-white"
          width={60}
          height={50}
          src="/images/skills/typescript.svg"
          alt="C"
        />
        <Image
          className=" text-white"
          width={60}
          height={50}
          src="/images/skills/react.svg"
          alt="C"
        />
        <Image
          className=" text-white"
          width={60}
          height={50}
          src="/images/skills/redux.svg"
          alt="C"
        />
        <Image
          className="p-3 rounded-md bg-white"
          width={70}
          height={70}
          src="/images/skills/nextjs-13.svg"
          alt="C"
        />

        <Image
          className=" text-white"
          width={60}
          height={50}
          src="/images/skills/firebase.svg"
          alt="C"
        />
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc ml-4 mt-4">
        <li className="mt-2">
          {" "}
          <span className="text-medium font-bold">B.TECH (CSE) </span>--Bengal
          Institute of Technology, Kolkata
        </li>
        <li className="mt-2">
          {" "}
          <span className="text-medium font-bold"> Class-XII </span>
          --Krishnanagar Collegiate School, Krishnanagar
        </li>
        <li className="mt-2">
          {" "}
          <span className="text-medium font-bold">Class-X </span>--Krishnanagar
          High School, Krishnanagar
        </li>
      </ul>
    ),
  },
  {
    title: "Tools",
    id: "tools",
    content: (
      <div className="grid grid-cols-4 space-y-2 md:space-y-0  md:grid-cols-6 items-center mt-8">
        <Image
          className=" text-white"
          width={50}
          height={50}
          src="/images/skills/vscode.svg"
          alt="C"
        />
        <Image
          className=" text-white"
          width={50}
          height={50}
          src="/images/skills/sublime.svg"
          alt="C"
        />
        <Image
          className=" text-white"
          width={60}
          height={50}
          src="/images/skills/intellij.svg"
          alt="C"
        />
        <Image
          className=" rounded-lg bg-white"
          width={50}
          height={50}
          src="/images/skills/git.svg"
          alt="C"
        />
        <Image
          className=" rounded-lg bg-white"
          width={50}
          height={50}
          src="/images/skills/github.svg"
          alt="C"
        />
      </div>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className=" mt-4 list-disc ml-4">
        <li className="text-lg font-bold">
          Google IT Automation With Python (Coursera){" "}
        </li>
      </ul>
    ),
  },
];

const About = () => {
  //   const [activeTab, setActiveTab] = useState("skills");
  //   const [isPending, startTransition] = useTransition();
  const { activeTab, setActiveTab, isPending, startTransition } =
    usePageState();
  const handleTabChange = (id) => {
    startTransition(() => {
      setActiveTab(id);
    });
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const variants = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <>
      <section className="text-white mt-28 px-2">
        <motion.div
          ref={ref}
          variants={variants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.8 }}
          className="md:grid md:grid-cols-2 gap-8 items-center py-2 px-4 xl:gap-16 sm:py-16 xl:px-16"
        >
          <Image
            src="/images/about-image.png"
            alt="about image"
            width={500}
            height={500}
          />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
            <p className="text-base lg:text-lg text-[#ABD7BE] text-left leading-relaxed">
              {" "}
              Hi, I am a Front End Developer with a passion for learning new
              things in technology. My main interest lies in Full Stack Web
              Development, and I enjoy exploring new technologies and tools to
              enhance my skills. I have a strong love for coding and find it to
              be a rewarding and challenging career..
            </p>
            <div className="swiper-container flex flex-row mt-8">
              {/* <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b-4 border-purple-500">Skills</span> */}
              <Tab
                active={activeTab === "skills"}
                selectTab={() => handleTabChange("skills")}
              >
                {" "}
                Skills
              </Tab>
              <Tab
                active={activeTab === "tools"}
                selectTab={() => handleTabChange("tools")}
              >
                Tools
              </Tab>
              <Tab
                active={activeTab === "education"}
                selectTab={() => handleTabChange("education")}
              >
                Education
              </Tab>
              <Tab
                active={activeTab === "certification"}
                selectTab={() => handleTabChange("certification")}
              >
                Certification
              </Tab>
            </div>
            <div>{Tabdata.find((tab) => tab.id === activeTab).content}</div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
