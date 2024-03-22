"use client";
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "./ui/textarea";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Phone, Mail, Send, Map, CircleCheckBig } from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import {motion} from 'framer-motion'

const sideDetails = [
  {
    icon: <Map className="stroke-secondary size-9 " />,
    detail: "J.S Ave. East Legon, Accra, Ghana",
  },
  {
    icon: <Phone className="stroke-secondary size-9" />,
    detail: "+233-57-636-7799",
  },
  {
    icon: <Mail className="stroke-secondary size-9" />,
    detail: "95attakayny@gmail.com",
  },
  {
    icon: <CircleCheckBig className="stroke-secondary size-9" />,
    detail: "Freelance Available",
  },
];
const formSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2).max(50),
  message: z.string().min(2),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    emailjs.send(
      'service_vt33p7j',
    'template_ekvshal',
    {
      from_name:values.name,
      to_name:'Anthony',
      from_email: values.email,
      from_phone: values.phone,
      to_email:'95attakayny@gmail.com',
      subject:values.subject,
      message:values.message
    },
    'n6ySUZEQ0Q787A20b'
    ).then(()=>{
      alert('Email has been sent!')
      form.reset()
    }).catch(()=>{
      alert('there was an error')
    })
  

  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  const formVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 0.5,
      },
    },
  };
  return (
    <div id="contact" >
   
    <p className="text-center text-secondary text-sm pt-12 pb-2">CONTACT</p>
   <h1 className="text-primary font-bold text-4xl pb-8 text-center">Contact With Me</h1>
    <div className="lg:flex gap-10">
      <div className="flex-initial">
        {sideDetails.map((ele,index) => (
          <motion.div
          key={ele.detail}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index}
          >
          <Card
            className="mb-7 flex flex-col items-center justify-center p-10"
                      >
            {ele.icon}
            <p className="text-primary text-sm pt-3">{ele.detail}</p>
          </Card>

          </motion.div>
        ))}
      </div>
      {/* seperator */}
      <motion.div className="flex-1"  variants={formVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          >
        <Card className="px-8 py-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-7">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="col-span-2 sm:col-span-1">
                      <FormControl>
                        <Input
                          className={cn("")}
                          placeholder="Enter Your Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="col-span-2 sm:col-span-1" >
                      <FormControl>
                        <Input placeholder="Enter Your Phone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="col-span-2 sm:col-span-1" >
                      <FormControl>
                        <Input placeholder="Enter Your Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="col-span-2 sm:col-span-1" >
                      <FormControl>
                        <Input placeholder="Enter Your Subject" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormControl>
                        <Textarea placeholder="Type Your Message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-center pt-8">
                <Button
                  className={cn(
                    "flex w-1/2 items-center gap-3 justify-center rounded-md bg-muted text-primary py-6 text-base "
                  )}
                  type="submit"
                >
                  Send Message <Send className="size-5" />{" "}
                </Button>
              </div>
            </form>
          </Form>
        </Card>
      </motion.div>
    </div>
    </div>
  );
};

export default Contact;
