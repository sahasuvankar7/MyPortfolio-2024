"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
import { motion, useInView } from "framer-motion";
import { usePageState } from "../../../usePageState";

const Contact = () => {
  //   const [emailSubmitted, setEmailSubmitted] = useState(false);
  const { emailSubmitted, setEmailSubmitted } = usePageState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      });
      const resData = await response.json();
      console.log(resData);

      if (!response.ok) {
        // Handle non-OK responses (e.g., server error)
        console.error(`Failed to send message. Status: ${response.status}`);
        // Handle the error here or provide user feedback
      } else {
        console.log("Message sent.");
        setEmailSubmitted(true);
      }
    } catch (error) {
      console.error("Unexpected error:", error.message);
      // Handle unexpected errors here or provide user feedback
    }
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const variants = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <section className="">
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 my-4 md:my-12 py-8 gap-4 relative"
      >
        <div className="z-0">
          <h5 className="text-xl font-bold text-white my-2">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="github.com">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="linkedin.com">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
        </div>
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-orange-600 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>

            {emailSubmitted && (
              <p className="text-green-500 text-sm mt-2">
                Email sent successfully!
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
