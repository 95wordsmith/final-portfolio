"use client";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import HeroCarousel from "./hero-carousel";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: <Twitter className="stroke-primary hover:stroke-secondary size-8" />,
    link: "https://twitter.com/_Mike_Anthonyy",
  },
  {
    icon: <Github className="stroke-primary hover:stroke-secondary size-8" />,
    link: "https://github.com/95wordsmith",
  },
  {
    icon: <Linkedin className="stroke-primary hover:stroke-secondary size-8" />,
    link: "https://www.linkedin.com/in/anthony-nana-yaw-atta-konadu-msc-pmp-%C2%AE-b7b252179/",
  },
];

const HeroPage = () => {
  return (
    <motion.div
      className="flex md:justify-between flex-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="lg:w-[65%] text-primary">
        <h2 className="font-semibold text-xl pb-4">
          Hello, <span className="text-secondary">I'm</span>
        </h2>
        <h1 className="font-bold text-6xl tracking-wide pb-4">
          Anthony Atta-Konadu
        </h1>
        <h3 className="font-semibold text-2xl pb-8">
          Full-Stack Software Engineer And Project Manager
        </h3>
        <p className="text-base/relaxed pb-12">
          Experienced senior software engineer with over 7 years of expertise,
          proficient in developing features across both backend and frontend
          frameworks. Possessing a collective background in project management,
          I have the ability to effectively lead development teams throughout
          the software development cycle. Available for freelance, consultation,
          or full-time work opportunities.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 pb-3">
          <div>
            <h4 className="font-semibold text-base pb-5">FIND ME ON</h4>
            <div className="flex gap-3 pb-10 ">
              {socialLinks.map((ele) => (
                <div
                  key={ele.link}
                  className="bg-muted rounded-sm w-16 h-16 flex items-center justify-center"
                >
                  <Link target="_blank" href={ele.link}>
                    {ele.icon}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <h4 className="font-semibold text-base pb-5 uppercase">Skills</h4>
            <HeroCarousel />
          </div>
        </div>

        <div className="flex flex-wrap gap-8 lg:gap-16 xl:gap-24">
          <motion.div
            className="shrink-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="font-semibold pb-2 text-3xl">7+</h2>
            <p className="text-xs">YEARS OF EXPERIENCE</p>
          </motion.div>
          <motion.div
            className="shrink-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="font-semibold pb-2 text-3xl">10+</h2>
            <p className="text-xs">SOFTWARE PROJECTS</p>
          </motion.div>
          <motion.div
            className="shrink-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="font-semibold pb-2 text-3xl ">PMP®</h2>
            <p className="text-xs">PROJECT MANAGEMENT PROFESSIONAL</p>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="lg:w-[35] relative"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <Image
          className="contain z-50"
          src={"/profileImg.png"}
          height={500}
          width={400}
          alt="profile image"
        />
        <div className="absolute bg-muted w-full h-[80%] rounded-md bottom-0 -z-30" />
      </motion.div>
    </motion.div>
  );
};

export default HeroPage;
