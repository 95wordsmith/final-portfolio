import Link from "next/link";
import Image from "next/image";
const Logo = ({width, height}:{width:number, height:number}) => {
  return ( 
    <Link href={'/'}>
      <Image className="cursor-pointer" src={"/logo.png"} alt="logo" width={width} height={height} />

    </Link>
   );
}
 
export default Logo;