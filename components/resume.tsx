'use client'
import { cn } from "@/lib/utils";
import { Card,CardTitle,CardDescription } from "./ui/card";

import {motion} from 'framer-motion'

const experienceData=[

  {
    role:'Senior Software Engineer ',
    company:'Scratch Code Academy (03/19-01/21:FT) (01/21-PRESENT)',
    description:'Developed and Deployed over 10+ full-stack applications with ReactJs, NextJs and NodeJs and assisted in the mentoring and training of junior or aspiring developers.'
  },
  {
    role:'M.I.S Officer',
    company:'Ghana Free Zones Authority (01/21-PRESENT)',
    description:'Collaborated and assisted in building, testing and deployment of a world-bank funded ERP system for company operations.'
  },
  {
    role:'Frontend Engineer',
    company:'DecentPak Ventures (08/18-03/19)',
    description:'Led the development of two e-commerce platforms, integrating vendor management, medical query systems, and secure payment gateways.'
  },
  

]
const qualificationsData=[
  {
    title:'MSC. Project Management',
    institution:'KNUST (01/21-06/22)',
    description:''
  },
  {
    title:'PMP Certificate',
    institution:'Project Management Institute (26/22)',
    description:''
  },
  {
    title:'B.A History',
    institution:'KNUST (09/13-06/17)',
    description:''
  },

]



const Resume = () => {
  return (
    <div id="resume">
      <p className="text-center text-secondary text-sm pt-12 pb-2">YEARS OF EXPERIENCE</p>
      <motion.h1
        className="text-primary font-bold text-4xl pb-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }} 
      >
        My Resume
      </motion.h1>
      <div className="grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-2 pb-16">
        <div>
          <motion.h1
            className="text-primary font-bold text-3xl pb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.3 }} 
          >
            Job Experience
          </motion.h1>
          <div className="relative border-l-4 border-muted">
            {/* content */}
            <div className="flex flex-col space-y-7 w-[83%] mx-auto">
              {experienceData.map((ele) => (
                <motion.div key={ele.role} initial={{ opacity: 0 }} viewport={{ once: true }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>
                  <Card className="p-8 lg:h-60">
                    <CardTitle className="pb-2">{ele.role}</CardTitle>
                    <p className="text-secondary pb-6 text-xs uppercase">{ele.company}</p>
                    <CardDescription className={cn('text-base ')}>{ele.description}</CardDescription>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <motion.h1
            className="text-primary font-bold text-3xl pb-8"
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }} 
          >
            Education & Qualifications
          </motion.h1>
          <div className="border-l-4 border-muted">
            {/* content */}
            <div className="relative flex flex-col space-y-7 w-[83%] mx-auto">
              {qualificationsData.map((ele) => (
                <motion.div key={ele.title} initial={{ opacity: 0 }} viewport={{ once: true }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}>
                  <Card className="p-8 md:h-60">
                    <CardTitle className="pb-2">{ele.title}</CardTitle>
                    <p className="text-secondary pb-6 text-xs uppercase">{ele.institution}</p>
                    <CardDescription className={cn('text-base ')}>{ele.description}</CardDescription>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;



