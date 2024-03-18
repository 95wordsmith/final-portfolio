import { cn } from "@/lib/utils";
import { Card,CardTitle,CardDescription } from "./ui/card";

const experienceData=[
  {
    role:'M.I.S Officer',
    company:'Ghana Free Zones Authority (01/21-PRESENT)',
    description:'Assisted the successful implementation of a World Bank funded single-window project by fostering close stakeholder collaboration throughout the SDLC (design, development reviews, testing) resulting in project success.'
  },
  {
    role:'Senior Software Engineer ',
    company:'Scratch Code Academy (03/19-01/21:FT) (01/21-PRESENT)',
    description:' Led a team of developers and consultants in delivering 10+ high-performing web applications, prioritizing scalability, performance, and security throughout the CI/CD pipeline.'
  },
  {
    role:'Frontend Engineer',
    company:'DecentPak Ventures (08/18-03/19)',
    description:'Migrated 80% of frontend components to functional components (React 16) for improved readability and maintainability.'
  },
  

]
const qualificationsData=[
  {
    title:'Msc Project Management',
    institution:'KNUST (01/21-06/22)',
    description:'Assisted the successful implementation of a World Bank funded single-window project by fostering close stakeholder collaboration throughout the SDLC (design, development reviews, testing) resulting in project success.'
  },
  {
    title:'PMP Certificate',
    institution:'Project Management Institute (26/22)',
    description:' Led a team of developers and consultants in delivering 10+ high-performing web applications, prioritizing scalability, performance, and security throughout the CI/CD pipeline.'
  },
  {
    title:'B.A History',
    institution:'KNUST (09/13-06/17)',
    description:'Migrated 80% of frontend components to functional components (React 16) for improved readability and maintainability.'
  },

]

const Resume = () => {
  return ( 
    <>
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
      <Card key={ele.role} className="p-8">
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
      <Card key={ele.title} className="p-8">
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
  </>
   );
}
 
export default Resume;