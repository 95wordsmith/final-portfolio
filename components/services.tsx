'use client'
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Card, CardDescription, CardTitle } from "./ui/card";
import {
  LayoutGrid,
  Database,
  AppWindow,
  SquareKanban,
  GraduationCap,
  ShieldCheck
} from "lucide-react";

const layoutInfo = [
  {
    icon: <AppWindow className="stroke-secondary  size-8" />,
    title: "Application Developemnt",
    description:
      "From web-based to mobile applications, I specialize in crafting tailored solutions that meet your business needs, ensuring scalability, performance, and user satisfaction throughout the development process.",
  },
  {
    icon: <LayoutGrid className="stroke-secondary size-8" />,
    title: "Enterprise Resource Planning",
    description:
      "Leveraging industry-leading ERP systems, I design and implement comprehensive solutions to streamline your organization's operations, optimizing efficiency and facilitating seamless communication across departments.",
  },
  {
    icon: <Database className="stroke-secondary size-8" />,
    title: "Database Design and Management",
    description:
      "I specialize in creating robust database architectures tailored to your specific requirements, ensuring data integrity, security, and optimal performance.",
  },
  {
    icon: <ShieldCheck className="stroke-secondary size-8" />,
    title: "Quality Assurance and Testing",
    description:
      "I conduct thorough testing throughout the development lifecycle to identify and rectify issues, ensuring that your software meets the highest standards of quality, reliability, and user experience.",
  },
  {
    icon: <SquareKanban className="stroke-secondary size-8" />,
    title: "Project Planning",
    description:
      "I work to meticulously craft project plans tailored to your unique needs and requirements, ensuring alignment with industry best practices and methodologies such as Agile, predictive, or hybrid approaches.",
  },
  {
    icon: <GraduationCap className="stroke-secondary size-8" />,
    title: "Software Development Training",
    description:
      "I offer training on popular software development technologies such as ReactJs and Node, along with comprehensive coverage of fundamental computer science concepts, data structures, and algorithms."
  },
];

const Services = () => {


  return (
    <div id="services">
    <h3 className="text-secondary font-semibold text-base pt-12 pb-4">
      MY SERVICES
    </h3>
    <h1 className="text-primary font-bold text-4xl">What I Do</h1>
    <motion.div
      className="grid w-full py-12 box-border gap-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
      initial="hidden"
      // animate="visible"
      whileInView='visible'
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
    >
      {layoutInfo.map((ele) => (
        <motion.div
          key={ele.title}
          variants={{
            hidden: { opacity: 0, y: 30 }, // Initial state with slight offset
            visible: { opacity: 1, y: 0 }, // Animate opacity and remove offset
          }}
          transition={{ duration: 0.5 }} // Adjust animation duration as needed
        >
          <Card className="p-8 flex flex-col space-y-6">
            {ele.icon}
            <CardTitle>{ele.title}</CardTitle>
            <CardDescription>{ele.description}</CardDescription>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
);
};

export default Services;