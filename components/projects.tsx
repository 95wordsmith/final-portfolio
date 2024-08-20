'use client'
import Image from "next/image";
import { Card } from "./ui/card";

import ProjectModal from "./projectModal";
import {motion} from 'framer-motion'
import { MousePointerClick } from "lucide-react";
import { Cursor } from "./ui/cursor";
import { useState,useEffect } from "react";

const Projects = () => {
  const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
    setIsMounted(true);
}, []);
  const projectVariant= {
    hidden:{
      opacity:0,
      x:-100
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        type: 'spring', stiffness: 20
      }
    }
  }
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    {isMounted && (

    <div id="portfolio">
      <p className="text-center text-secondary text-sm pt-12 pb-2">
        MY PROJECTS
      </p>
      <h1 className="text-primary font-bold text-4xl pb-10 text-center">
        Recent Works
      </h1>

    
      <motion.div variants={projectVariant}  initial='hidden' whileInView='visible'   viewport={{ once: true }} >
        <Card className="w-full lg:w-1/2 cursor-pointer">  
        <Cursor
          attachToParent
          variants={{
            initial: { scale: 0.3, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.3, opacity: 0 },
          }}
          transition={{
            ease: 'easeInOut',
            duration: 0.15,
          }}
          className='left-12 top-4'
        >
          <div className="flex items-center justify-center gap-1 bg-[#82829a] rounded-full px-4 py-2">
            <MousePointerClick className="size-8 stroke-secondary/50"/>
            <p className='text-primary font-semibold '>
              Click Here !
            </p>
          </div>
        </Cursor>     
          <Image className="w-full rounded-md" onClick={()=>setIsOpen(true)} src={'/iskus.JPG'} height={400} width={400} alt="iskus"/>
        </Card>
      </motion.div>
      <ProjectModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
    )}
    </>
  );
};

export default Projects;
