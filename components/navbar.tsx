import Image from "next/image"
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {Menu} from 'lucide-react'
import { SheetClose } from "./ui/sheet";
import MobileNavbar from "./mobileNavbar";
const navLinks = [
  {
    id:'1',
    title:'Home',
    link:'/'
  },
  {
    id:'2',
    title:'Services',
    link:'#services'
  },
  {
    id:'3',
    title:'Portfolio',
    link:'#portfolio'
  },
  {
    id:'4',
    title:'Resume',
    link:'#resume'
  },
  {
    id:'5',
    title:'Contact',
    link:'#contact'
  }
]

const Navbar = () => {
  return ( 

  <nav className=" flex z-50 w-full fixed px-8 md:px-20 lg:px-30  xl:px-36 top-8  justify-between items-center">
    <Image className="cursor-pointer" src={'/logo.png'} alt="logo" width={60} height={60}/>
   <div className=" hidden md:flex md:gap-4 lg:gap-7 xl:gap-16 text-xl">
    {navLinks.map((nav)=>(
      <Link className="hover:text-secondary hover:font-bold text-primary text-base lg:text-lg  " key={nav.id} href={nav.link}>{nav.title}</Link>
    ))}
   </div>
    <Button className={cn('hidden md:block text-sm md:text-base  px-6 lg:px-8 ')}>Download CV</Button>


   <MobileNavbar>
   <div className=" flex flex-col items-center  gap-16 text-3xl pt-20">
    {navLinks.map((nav)=>(
      <SheetClose asChild>
        <Link className="hover:text-secondary text-center hover:font-semibold border-secondary  hover:border-primary border-b-4 w-full text-primary text-3xl   " key={nav.id} href={nav.link}>{nav.title}</Link>
      </SheetClose>
    ))}
   </div>
   </MobileNavbar>

  </nav>



   );
}
 
export default Navbar;