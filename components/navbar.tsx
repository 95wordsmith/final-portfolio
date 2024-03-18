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

  <nav className=" flex w-full fixed px-8 md:px-20 lg:px-30  xl:px-36 top-8  justify-between items-center">
    <Image src={'/logo.png'} alt="logo" width={70} height={70}/>
   <div className=" hidden md:flex md:gap-2 lg:gap-7 xl:gap-16 text-xl">
    {navLinks.map((nav)=>(
      <Link className="text-[#d6d0a9]" key={nav.id} href={nav.link}>{nav.title}</Link>
    ))}
   </div>
    <Button className={cn('hidden md:block text-md px-8 ')}>Download CV</Button>
    {/* <Image  className="md:hidden stroke-[#f0084c]" src={'/menu.svg'} alt="menu-svg" width={50} height={50}/> */}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="md:hidden hover:stroke-primary stroke-secondary w-14 h-14">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

  </nav>



   );
}
 
export default Navbar;