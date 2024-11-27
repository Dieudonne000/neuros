"use client"

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    quote: "Project management is smoother with Neuros. Its dashboards provide a clear view of progress and areas of improvement.",
    author: "Nathan D. Hall",
    role: "Project Lead",
    avatar: "/placeholder.svg?height=64&width=64"
  },
  {
    quote: "Neuros's real-time data has been crucial in refining our products. Its collaborative features ensure our team is always aligned.",
    author: "Naomi K. Johnson",
    role: "Product Manager",
    avatar: "/placeholder.svg?height=64&width=64"
  },
  {
    quote: "Real-time data processing with Neuros has changed how we make decisions. It's a must-have tool for modern businesses.",
    author: "Michael O. Lopez",
    role: "Operations Director",
    avatar: "/placeholder.svg?height=64&width=64"
  },
  {
    quote: "The analytics capabilities have transformed our decision-making process. We can now respond to market changes instantly.",
    author: "Sarah M. Chen",
    role: "Data Analyst",
    avatar: "/placeholder.svg?height=64&width=64"
  }
]

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            The Neuros Experience
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            At Neuros, we pride ourselves on delivering top-notch AI-driven business analytics. But don't just
            take our word for it. Hear what our satisfied users have to say.
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
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="flex h-full flex-col p-6">
                  <blockquote className="flex-1 text-lg text-gray-900">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-6 flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full object-cover"
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
  )
}

