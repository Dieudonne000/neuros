"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image"; // Import Image from next/image

const testimonials = [
  {
    quote:
      "Project management is smoother with Neuros. Its dashboards provide a clear view of progress and areas of improvement.",
    author: "Nathan D. Hall",
    role: "Project Lead",
    avatar: "https://i.pravatar.cc/150?img=1", // Updated image link
  },
  {
    quote:
      "Neuros&apos;s real-time data has been crucial in refining our products. Its collaborative features ensure our team is always aligned.", // Escaped apostrophe
    author: "Naomi K. Johnson",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/150?img=2", // Updated image link
  },
  {
    quote:
      "Real-time data processing with Neuros has changed how we make decisions. It&apos;s a must-have tool for modern businesses.", // Escaped apostrophe
    author: "Michael O. Lopez",
    role: "Operations Director",
    avatar: "https://i.pravatar.cc/150?img=3", // Updated image link
  },
  {
    quote:
      "The analytics capabilities have transformed our decision-making process. We can now respond to market changes instantly.",
    author: "Sarah M. Chen",
    role: "Data Analyst",
    avatar: "https://i.pravatar.cc/150?img=4", // Updated image link
  },
  {
    quote:
      "The seamless integrations and customizable dashboards make Neuros an indispensable tool for our business operations.",
    author: "Chance Regine",
    role: "General Auditor",
    avatar: "https://i.pravatar.cc/150?img=5", // Updated image link
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            The Neuros Experience
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            At Neuros, we pride ourselves on delivering top-notch AI-driven
            business analytics. But don&apos;t just take our word for it. Hear
            what our satisfied users have to say.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full max-w-6xl"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="flex h-full flex-col p-6 bg-white border-none shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-200">
                  <blockquote className="flex-1 text-lg text-gray-900">
                    &quot;{testimonial.quote}&quot;{" "}
                    {/* Escaped double quotes */}
                  </blockquote>
                  <div className="mt-6 flex items-center gap-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={50} // Set appropriate width
                      height={50} // Set appropriate height
                      className="h-12 w-12 rounded-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
