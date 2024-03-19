"use client";
import { Button } from "@/components/ui/button";
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
    console.log(values);
  };
  return (
    <div id="contact">
   
    <p className="text-center text-secondary text-sm pt-12 pb-2">CONTACT</p>
   <h1 className="text-primary font-bold text-4xl pb-8 text-center">Contact With Me</h1>
    <div className="lg:flex gap-10">
      <div className="flex-initial">
        {sideDetails.map((ele) => (
          <Card
            className="mb-7 flex flex-col items-center justify-center p-10"
            key={ele.detail}
          >
            {ele.icon}
            <p className="text-primary text-sm pt-3">{ele.detail}</p>
          </Card>
        ))}
      </div>
      {/* seperator */}
      <div className="flex-1">
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
      </div>
    </div>
    </div>
  );
};

export default Contact;
