import { cn } from "@/lib/utils";
import { Card,CardTitle,CardDescription } from "./ui/card";

const experienceData=[
  {
    role:'M.I.S Officer',
    company:'Ghana Free Zones Authority (01/21-PRESENT)',
    description:'Collaborated and assisted in building, testing and deployment of a world-bank funded ERP system for company operations.'
  },
  {
    role:'Senior Software Engineer ',
    company:'Scratch Code Academy (03/19-01/21:FT) (01/21-PRESENT)',
    description:'Developed and Deployed over 10+ full-stack applications with ReactJs, NextJs and NodeJs and assisted in the mentoring and training of junior or aspiring developers.'
  },
  {
    role:'Frontend Engineer',
    company:'DecentPak Ventures (08/18-03/19)',
    description:'Implemented payment features on the e-commerce platform and dashboard analytics with charts to track user enagement.'
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
   <h1 className="text-primary font-bold text-4xl pb-6 text-center">My Resume</h1>
  <div className="grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-2 pb-16 ">
{/*  */}
<div>
  <h1 className="text-primary font-bold text-3xl pb-8">Job Experience</h1>
{/*  */}
  <div className=" relative border-l-4 border-muted  ">
    {/* content */}
    <div className=" flex flex-col space-y-7 w-[83%] mx-auto">

    {experienceData.map((ele)=>(
      <>
      {/* <div /> */}
      {/* <div className="w-3 h-3 bg-muted rounded-full absolute left-[-8px] top-20"/>
      <div className="border-t-4 border-muted z-0 w-[56px] absolute left-0 top-[57px]"></div> */}
      <Card key={ele.role} className="p-8 h-52">
        <CardTitle className="pb-2">{ele.role}</CardTitle>
        <p className="text-secondary pb-6 text-xs uppercase">{ele.company}</p>
        <CardDescription className={cn('text-base ')}>{ele.description}</CardDescription>
      </Card>
      </>
    ))}
    </div>
  </div>

{/*  */}
</div>
{/*  */}
<div>
<h1 className="text-primary font-bold text-3xl pb-8">Education Quality</h1>


{/*  */}
  <div className=" border-l-4 border-muted  ">
    {/* content */}
    <div className="relative flex flex-col space-y-7 w-[83%] mx-auto">

    {qualificationsData.map((ele)=>(
      <Card key={ele.title} className="p-8 h-52">
        <CardTitle className="pb-2">{ele.title}</CardTitle>
        <p className="text-secondary pb-6 text-xs uppercase">{ele.institution}</p>
        <CardDescription className={cn('text-base ')}>{ele.description}</CardDescription>
      </Card>
    ))}
</div>
  </div>
  {/*  */}
  </div>
  {/*  */}
  </div>
  </div>
   );
}
 
export default Resume;