"use client";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import HeroCarousel from "./hero-carousel";


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
    <div className="flex  md:justify-between flex-wrap ">
      <div className="lg:w-[65%] text-primary ">
        <h2 className="font-semibold text-xl pb-4">
          Hello, <span className="text-secondary">I'm</span>
        </h2>
        <h1 className="font-bold  text-6xl tracking-wide pb-4">
          Anthony Atta-Konadu
        </h1>
        <h3 className="font-semibold  text-2xl pb-8">
          Full-Stack Software Engineer And Project Manager
        </h3>
        <p className="text-base/relaxed pb-12">
          Experienced senior software engineer with over 7 years of
          expertise in developing features across both backend and frontend
          frameworks, possessing a collective background in project management
          and the ability to effectively lead development teams through the
          software development cycle. I am available for freelance,
          consultation, or full-time work opportunities.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 pb-3">
          <div >
            <h4 className="font-semibold text-base pb-5">FIND ME ON</h4>
            <div className="flex gap-3 pb-10 ">
              {socialLinks.map((ele) => (
                <div
                  key={ele.link}
                  className="bg-muted rounded-sm w-16 h-16 flex  items-center justify-center"
                >
                  <Link target="_blank" href={ele.link}>{ele.icon}</Link>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <h4 className="font-semibold text-base pb-5 uppercase">Skills</h4>

            <HeroCarousel />
          </div>
        </div>

        <div className="flex  flex-wrap gap-8 lg:gap-12 xl:gap-16">
          <div className=" shrink-0">
            <h2 className="font-semibold pb-2 text-3xl">7+</h2>
            <p className="text-xs">YEARS OF EXPERIENCE</p>
          </div>
          <div className=" shrink-0">
            <h2 className="font-semibold pb-2 text-3xl">10+</h2>
            <p className="text-xs">SOFTWARE PROJECTS</p>
          </div>
          <div className=" shrink-0">
            <h2 className="font-semibold pb-2 text-3xl ">PMP®</h2>
            <p className="text-xs">PROJECT MANAGEMENT PROFESSIONAL</p>
          </div>
        </div>
      </div>
      <div className="lg:w-[35]  relative">
        <Image
          className="contain  z-50"
          src={"/profileImg.png"}
          height={500}
          width={400}
          alt="profile image"
        />

        <div className="absolute bg-muted w-full h-[80%] rounded-md bottom-0 -z-30" />
      </div>
    </div>
  );
};

export default HeroPage;
