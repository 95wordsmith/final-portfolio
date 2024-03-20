import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Twitter className="stroke-primary hover:stroke-secondary size-7" />,
      link: "https://twitter.com/_Mike_Anthonyy",
    },
    {
      icon: <Github className="stroke-primary hover:stroke-secondary size-7" />,
      link: "https://github.com/95wordsmith",
    },
    {
      icon: <Linkedin className="stroke-primary hover:stroke-secondary size-7" />,
      link: "https://www.linkedin.com/in/anthony-nana-yaw-atta-konadu-msc-pmp-%C2%AE-b7b252179/",
    },
    {
      icon: <Instagram className="stroke-primary hover:stroke-secondary size-7" />,
      link: "https://www.instagram.com/neezy_anyak/",
    },
  ];
  return (
    <footer className="w-full flex gap-8 flex-col  items-center pt-16 pb-4">
      <div>
      <Image src={"/logo.png"} alt="logo" width={55} height={55} />
      </div>
      <div className="flex gap-3">
        {socialLinks.map((ele) => {
          return (
            <div
              key={ele.link}
              className="bg-muted rounded-sm w-14 h-14 flex  items-center justify-center"
            >
              <Link target="_blank" href={ele.link}>{ele.icon}</Link>
            </div>
          );
        })}
      </div>
       <p className="text-primary text-base"> Anthony Atta-Konadu <span className="text-secondary">&copy; 2024</span>   All rights reserved</p>
    </footer>
  );
};

export default Footer;
