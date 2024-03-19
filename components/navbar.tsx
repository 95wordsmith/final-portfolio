import Image from "next/image"
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
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
    <Image className="cursor-pointer" src={'/logo.png'} alt="logo" width={70} height={70}/>
   <div className=" hidden md:flex md:gap-4 lg:gap-7 xl:gap-16 text-xl">
    {navLinks.map((nav)=>(
      <Link className="hover:text-secondary hover:font-bold text-primary text-base lg:text-lg  " key={nav.id} href={nav.link}>{nav.title}</Link>
    ))}
   </div>
    <Button className={cn('hidden md:block text-sm md:text-base  px-6 lg:px-8 ')}>Download CV</Button>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="md:hidden hover:stroke-primary stroke-secondary w-14 h-14">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

  </nav>



   );
}
 
export default Navbar;