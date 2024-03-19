'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
const carouseldetails = [
  {
    image: "/javascript.svg",
    name: "Javascript",
  },
  {
    image: "/typescript.svg",
    name: "Typescript",
  },
  {
    image: "/aws.svg",
    name: "AWS",
  },
  {
    image: "/django-icon.svg",
    name: "Django",
  },
  {
    image: "/git.svg",
    name: "Git",
  },
  {
    image: "/graphql.svg",
    name: "GraphQl",
  },
  // {
  //   image: "/mongodb.svg",
  //   name: "MongoDb",
  // },
  {
    image: "/nextjs.svg",
    name: "NextJs",
  },
  {
    image: "/nodejs.svg",
    name: "NodeJs",
  },
  {
    image: "/postgresql.svg",
    name: "Postgresql",
  },
  {
    image: "/prisma.svg",
    name: "Prisma",
  },
  {
    image: "/python.svg",
    name: "Python",
  },
  {
    image: "/react.svg",
    name: "ReactJs",
  },
  {
    image: "/redis.svg",
    name: "Redis",
  },
  {
    image: "/redux.svg",
    name: "Redux",
  },
];

const HeroCarousel = () => {
  return (
    <Carousel 
    // plugins={[
    //   Autoplay({
    //     delay: 2000,
    //   }),
    // ]}
    opts={{
      align: "start",
      loop: true,

    }}
    
    >
      <CarouselContent>
        {carouseldetails.map((ele) => (
          <CarouselItem key={ele.image} className="pl-2 cursor-pointer shrink-0 basis-1/2 md:basis-1/3 lg:basis-1/4 ">
            <Card className="bg-muted">
              <CardContent className="flex flex-col  gap-1  items-center justify-center p-2">
              <Image
      
                src={ele.image}
                width={25}
                height={25}
                alt={ele.image}
              />
              <h2 className="text-primary hover:text-secondary text-xs">{ele.name}</h2>

              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default HeroCarousel;
