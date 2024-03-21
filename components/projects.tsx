'use client'
import Image from "next/image";
import { Card } from "./ui/card";
import { useState } from "react";
import ProjectModal from "./projectModal";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="portfolio">
      <p className="text-center text-secondary text-sm pt-12 pb-2">
        MY PROJECTS
      </p>
      <h1 className="text-primary font-bold text-4xl pb-8 text-center">
        Recent Works
      </h1>

      <div >
        <Card className="w-full lg:w-1/2 cursor-pointer">       
          <Image className="w-full rounded-md" onClick={()=>setIsOpen(true)} src={'/iskus.JPG'} height={400} width={400} alt="iskus"/>
        </Card>
      </div>
      <ProjectModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
};

export default Projects;
