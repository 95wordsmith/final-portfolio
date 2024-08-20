"use client";
import { Card } from "./ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";


const clientsData = [
  {
    name: "PMI",
    link: "/pmilogo.jpg",
    url:'https://www.pmi.org/'
  },
  {
    name: "GFZA",
    link: "/gfza.JPG",
    url:'https://gfza.gov.gh/'
  },
  {
    name: "ScratchCode",
    link: "/scratch2.svg",
    url:'https://lms.scratchcode.org/'
  },
  {
    name: "DecentPak",
    link: "/decent.JPG",
    url:'https://www.decentpak.com/'
  },
];

const Clients = () => {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <motion.div initial="hidden" viewport={{ once: true }} whileInView="visible" variants={variants}>
      <p className="text-center text-secondary text-sm pt-12 pb-2">
        BEST CUSTOMERS
      </p>
      <h1 className="text-primary font-bold text-4xl pb-8 text-center">
        Clients and Affiliations
      </h1>

      <div className="grid w-full py-12 box-border gap-10 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {clientsData.map((ele) => (
          <motion.div
            key={ele.name}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            variants={variants}
          >
            <Link href={ele.url} target="_blank">
            <Card className=" cursor-pointer p-10 flex gap-3 justify-center items-center">
              <Image
                className="rounded-full"
                src={ele.link}
                alt={ele.name}
                width={80}
                height={80}
              />
              <p className="text-secondary font-semibold tracking-wide leading-none hover:text-primary hover:scale-90 text-2xl">
                {ele.name}
              </p>
            </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Clients;
