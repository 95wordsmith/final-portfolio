import { Card, CardDescription, CardTitle } from "./ui/card";
import {Airplay,Archive,Folder,Layers3,LayoutGrid, RadioTower} from 'lucide-react'


const layoutInfo = [
  {
    icon: <Airplay className="stroke-secondary  size-10" />,
    title: "Website Design",
    description:' Developed a robust payment system integrating Stripe for secure credit cards and Mobile Money via telecommunication APIs, expanding payment options by 200%.'
  },
  {
    icon: <Archive className="stroke-secondary size-10" />,
    title: "Website Design",
    description:' Developed a robust payment system integrating Stripe for secure credit cards and Mobile Money via telecommunication APIs, expanding payment options by 200%.'
  
  },
  {
    icon: <Folder className="stroke-secondary size-10" />,
    title: "Website Design",
    description:' Developed a robust payment system integrating Stripe for secure credit cards and Mobile Money via telecommunication APIs, expanding payment options by 200%.'
   
  },
  {
    icon: <Layers3 className="stroke-secondary size-10" />,
    title: "Website Design",
    description:' Developed a robust payment system integrating Stripe for secure credit cards and Mobile Money via telecommunication APIs, expanding payment options by 200%.'

  },
  {
    icon: <LayoutGrid className="stroke-secondary size-10" />,
    title: "Website Design",
    description:' Developed a robust payment system integrating Stripe for secure credit cards and Mobile Money via telecommunication APIs, expanding payment options by 200%.'
 
  },
  {
    icon: <RadioTower className="stroke-secondary size-10" />,
    title: "Website Design",
    description:' Developed a robust payment system integrating Stripe for secure credit cards and Mobile Money via telecommunication APIs, expanding payment options by 200%.'

  },

];
const Services = () => {
  return ( 
    <div id="services">
    <h3 className="text-secondary font-semibold text-base pt-12 pb-4">MY SERVICES</h3>
    <h1 className="text-primary font-bold text-4xl">What I Do</h1>
  <div className="grid w-full py-12 box-border gap-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
    {layoutInfo.map((ele)=>(
      <Card className="h-72 p-10 flex flex-col space-y-6" key={ele.title}>
        {ele.icon}
        <CardTitle>{ele.title}</CardTitle>
        <CardDescription>{ele.description}</CardDescription>
      </Card>
    ))}
  </div> 
    </div>
  );
}
 
export default Services;