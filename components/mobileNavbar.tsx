import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Menu} from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
interface mobileNavbarProps {
  children: React.ReactNode
}

const MobileNavbar = ({children}:mobileNavbarProps) => {
  return ( 
  <>
   <Sheet>
      <SheetTrigger asChild>
      <Menu className="md:hidden hover:stroke-primary stroke-secondary w-14 h-14 cursor-pointer"/>
     
      </SheetTrigger>
      <SheetContent>
        {children}
      </SheetContent>
    </Sheet>
  </> 
  );
}
 
export default MobileNavbar;