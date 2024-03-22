'use client'
import {X,ArrowUpRight, Github}from 'lucide-react'
import Image from 'next/image'
import {AnimatePresence,motion} from 'framer-motion'
import { Button } from './ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'



interface ModalProps{
  isOpen:boolean
  setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}
const ProjectModal = ({ isOpen, setIsOpen }:ModalProps) => {
  const router = useRouter()
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-muted/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-muted text-primary  rounded-lg w-[80%] p-8 shadow-xl cursor-default relative overflow-hidden"
          >
            
            <X  onClick={()=>setIsOpen(false)} className='absolute top-0 right-0 size-9 hover:stroke-secondary cursor-pointer'/>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <div>
          <Image className='rounded-md' src={'/iskus.gif'} width={700} height={700} alt='iskus-gif'/>
          <span className='text-lg font-semibold'>Stack:</span>
          <span className='text-secondary font-semibold'> #NextJs #Prisma #PostgresSql #RestApi #NeonDb #NextAuth #Jwt</span>
          <br/>
          <span className='text-lg font-semibold'>Login Details: </span>
          <span className='text-secondary font-semibold'>Username: Guest </span>
          <span className='text-secondary font-semibold'>Password: Password123</span>
          <br/>
          <div className='flex justify-center' >
          <Button onClick={()=>window.open('https://iskusadmin.vercel.app/auth/login?username=guest&password=Password123','_blank')} className='flex text-base pt-4  hover:text-secondary stroke-secondary' variant={'link'}>Click to Visit<ArrowUpRight/></Button>
          <Button onClick={()=>window.open('https://github.com/95wordsmith/erp-app-iskus.git','_blank')} className='flex text-base pt-4 hover:text-secondary stroke-secondary' variant={'link'}>Github<Github/></Button>
            
          </div>

              </div>
              <div className='hidden md:block'>
                <h1 className='text-center font-semibold'>ERP-Software Clone for a Small-Sized Solar Company in Production</h1>
                <h1 className='text-center text-secondary font-semibold'>Features, Instructions and Limitations </h1>
                <div className='text-sm leading-5'>
                <p>Overview Dashboard: Provides data analytics responsive to a selected date range using a date picker.</p>
                <p>Project Management Module: Allows addition, deletion, and updating of projects. Users can also download project invoices.</p>
                <p>Staff Module: Facilitates deletion and updating of employee information.</p>
                <p>Setting Module: Enables the creation of user roles with customizable permissions. Users can update their information or change passwords.</p>
                <p>Guest Access: Clicking on the provided link will direct you to a page with guest login details already filled in.</p>
                <p>Invoice Links: Some invoice links may be invalid. Users can create their own projects, upload invoices, and view them.</p>
                <p>Data Tables: The project and staff modules feature data tables with filtering and sorting capabilities.</p>
                <p>User Permissions: Guest users are restricted from creating additional users. However, they can update guest user details.</p>

                </div>
                <p className='font-semibold text-secondary'>Feel free to interact with the system and explore its functionalities. </p>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal