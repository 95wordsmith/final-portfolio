import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Twitter className="stroke-primary hover:stroke-secondary size-9" />,
      link: "www.twiiter.com",
    },
    {
      icon: <Github className="stroke-primary hover:stroke-secondary size-9" />,
      link: "www.github.com",
    },
    {
      icon: <Linkedin className="stroke-primary hover:stroke-secondary size-9" />,
      link: "www.linkedin.com",
    },
    {
      icon: <Instagram className="stroke-primary hover:stroke-secondary size-9" />,
      link: "www.Instagram.com",
    },
  ];
  return (
    <footer className="w-full flex gap-8 flex-col  items-center pt-16 pb-4">
      <div>
      <Image src={"/logo.png"} alt="logo" width={60} height={60} />
      </div>
      <div className="flex gap-3">
        {socialLinks.map((ele) => (
          <div
            key={ele.link}
            className="bg-muted rounded-sm w-16 h-16 flex  items-center justify-center"
          >
            <Link href={ele.link}>{ele.icon}</Link>
          </div>
        ))}
      </div>
       <p className="text-primary text-base"> Anthony Atta-Konadu &copy; 2024 All rights reserved</p>
    </footer>
  );
};

export default Footer;
