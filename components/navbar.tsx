'use client'
import Image from "next/image"
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {delay, motion} from 'framer-motion'

import { SheetClose } from "./ui/sheet";
import MobileNavbar from "./mobileNavbar";
import { useState } from "react";

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

const navVariant = {
  outside:{
    y:-20,
    opacity: 0
  },
  inside:{
    y:0,
    opacity: 1,

  }

}

const Navbar = () => {
const [active,setActive]= useState('')
  return ( 

  <motion.nav transition={{delay:0.2}} variants={navVariant} initial='outside' animate='inside' className=" flex z-50 w-full fixed px-8 md:px-20 lg:px-30  xl:px-36 top-8  justify-between items-center">
    <Image className="cursor-pointer" src={'/logo.png'} alt="logo" width={60} height={60}/>
   <div className=" hidden md:flex md:gap-4 lg:gap-7 xl:gap-16 text-xl">
    {navLinks.map((nav)=>(
      <Link onClick={()=>setActive(nav.title)} className={`${active===nav.title?'text-secondary  text-xl font-semibold':'text-primary'} hover:text-secondary hover:font-bold  `}  key={nav.id} href={nav.link}>{nav.title}</Link>
    ))}
   </div>
    <Button onClick={()=>window.open('https://firebasestorage.googleapis.com/v0/b/my-portfolio-1e271.appspot.com/o/anthony-resumefinal.pdf?alt=media&token=d1cd0d39-5f1d-4b09-9c9c-22f295c44230','_blank')} className={cn('hidden md:block text-sm md:text-base  px-6 lg:px-8 ')}>Download CV</Button>


   <MobileNavbar>
   <div className=" flex flex-col items-center  gap-16 text-3xl pt-20">
    {navLinks.map((nav)=>(
      <SheetClose asChild key={nav.id}>
        <Link onClick={()=>setActive(nav.title)} className={`hover:text-secondary text-center hover:font-semibold border-secondary  font-serif w-full text-primary text-3xl`} key={nav.id} href={nav.link}>{nav.title}</Link>
      </SheetClose>
    ))}
        <Button onClick={()=>window.open('https://firebasestorage.googleapis.com/v0/b/my-portfolio-1e271.appspot.com/o/anthony-resumefinal.pdf?alt=media&token=d1cd0d39-5f1d-4b09-9c9c-22f295c44230','_blank')} className={cn(' font-serif text-xl flex justify-center items-center font-semibold px-5 py-7  ')}>Download CV</Button>
   </div>
   </MobileNavbar>

  </motion.nav>



   );
}
 
export default Navbar;