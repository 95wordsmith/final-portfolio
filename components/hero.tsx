"use client";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    icon: <Twitter className="stroke-primary size-7" />,
    link: "www.twiiter.com",
  },
  {
    icon: <Github className="stroke-primary size-7" />,
    link: "www.github.com",
  },
  {
    icon: <Linkedin className="stroke-primary size-7" />,
    link: "www.linkedin.com",
  },
];
const HeroPage = () => {
  return (
    <div className="flex justify-center md:justify-between flex-wrap ">
      <div className="w-[65%] text-primary ">
        <h2 className="font-semibold text-xl pb-5">
          Hello, <span className="text-secondary">I'm</span>
        </h2>
        <h1 className="font-bold  text-6xl tracking-wide pb-5">
          Anthony Atta-Konadu
        </h1>
        <h3 className="font-bold tracking-wide text-2xl pb-10">
          Project Manager And Software Engineer
        </h3>
        <p className="tracking-wide font-thin text-base/relaxed pb-12">
          Experienced Senior software engieer with over 5 years of expertise in
          developing features accross both backend and frontend frameworks
          including ReactJs and NextJs, Node Js and express and Python and
          Django coupled.
        </p>
        <h4 className="font-semibold text-base pb-7">FIND ME ON</h4>

        <div className="flex gap-3 pb-16 ">
          {socialLinks.map((ele, index) => (
            <div className="bg-muted rounded-sm w-14 h-14 flex  items-center justify-center">
              <Link key={index} href={ele.link}>
                {ele.icon}
              </Link>
            </div>
          ))}
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
      <div className="w-[35]  relative">
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
