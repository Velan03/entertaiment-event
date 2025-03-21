"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

export default function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Raman",
      role: "Wedding Planner",
      content:
        "The Bharatanatyam performance at our client's wedding was absolutely mesmerizing. The dancers were professional, and the choreography was beautiful. Our clients were thrilled!",
      avatar: "/images/avatar-1.jpg",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Corporate Event Manager",
      content:
        "We hired Tamil Culture Events for our company's annual celebration, and they delivered beyond our expectations. The traditional music performance created the perfect atmosphere.",
      avatar: "/images/avatar-2.jpg",
    },
    {
      id: 3,
      name: "Anita Venkat",
      role: "Festival Organizer",
      content:
        "The Kolattam performance was the highlight of our cultural festival. The energy and precision of the dancers captivated our audience. We'll definitely work with them again!",
      avatar: "/images/avatar-3.jpg",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, currentIndex])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <div className="relative max-w-4xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="text-center">
          <h3 className="text-xl font-semibold">Client Testimonials</h3>
          <p className="text-muted-foreground">
            {currentIndex + 1} of {testimonials.length}
          </p>
        </div>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <Card className="border-none shadow-lg bg-background">
        <CardContent className="p-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 bg-primary/10 p-3 rounded-full">
              <Quote className="h-6 w-6 text-primary" />
            </div>
            <p className="text-lg mb-6 italic">{testimonials[currentIndex].content}</p>
            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3">
                <Image
                  src={testimonials[currentIndex].avatar || "/placeholder.svg?height=200&width=200"}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
              <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-primary/30"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

