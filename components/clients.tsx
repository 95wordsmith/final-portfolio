import { Card } from "./ui/card";
import Image from "next/image";
const clientsData = [ 
  {
    name:'PMI',
    link:'/pmilogo.jpg'
  },
  {
    name:'GFZA',
    link:'/gfza.JPG'
  },
  {
    name:'ScratchCode',
    link:'/scratch.JPG'
  },
  {
    name:'DecentPak',
    link:'/decent.JPG'
  }
 ]
const Clients = () => {
  return ( 
    <div>
          <p className="text-center text-secondary text-sm pt-12 pb-2">BEST CUSTOMERS</p>
   <h1 className="text-primary font-bold text-4xl pb-8 text-center">Clients and Affiliations</h1>

   <div className="grid w-full py-12 box-border gap-10 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {clientsData.map((ele)=>(
      <Card key={ele.name} className=" cursor-pointer p-10 flex gap-3 justify-center items-center">
        <Image className="rounded-full" src={ele.link} alt={ele.name} width={80} height={80}/>
        <p className="text-secondary font-semibold  text-2xl">{ele.name}</p>
      </Card>
    ))}
   </div>
    </div>
   );
}
 
export default Clients;