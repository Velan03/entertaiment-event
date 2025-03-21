import Image from "next/image"
import EventCard from "@/components/event-card"
import ServiceCard from "@/components/service-card"
import TestimonialSlider from "@/components/testimonial-slider"
import GallerySection from "@/components/gallery-section"
import ContactForm from "@/components/contact-form"
import CountdownTimer from "@/components/countdown-timer"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Home() {
  // Next upcoming event date
  const upcomingEventDate = new Date("2025-04-15T18:00:00")

  // Services data
  const services = [
    {
      id: 1,
      title: "Bharatanatyam Dance",
      description:
        "Experience the elegance of Bharatanatyam, a classical Tamil dance form known for its grace, precision, and storytelling.",
      image: "/images/bharatanatyam.jpg",
      icon: "music",
    },
    {
      id: 2,
      title: "Traditional Music",
      description:
        "Enjoy live performances of Tamil folk and classical music with authentic instruments and talented vocalists.",
      image: "/images/traditional-music.jpg",
      icon: "music",
    },
    {
      id: 3,
      title: "Kolattam Performance",
      description:
        "Witness the vibrant and rhythmic Kolattam dance, a traditional folk art form performed with colorful sticks.",
      image: "/images/kolattam.jpg",
      icon: "music",
    },
  ]

  // Upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Pongal Cultural Festival",
      date: "January 15, 2025",
      location: "Tamil Cultural Center",
      image: "/images/pongal-festival.jpg",
      description: "Join us for a day of traditional celebrations, music, and dance performances.",
    },
    {
      id: 2,
      title: "Classical Dance Competition",
      date: "February 28, 2025",
      location: "City Convention Hall",
      image: "/images/dance-competition.jpg",
      description: "Watch talented dancers compete in various classical Tamil dance forms.",
    },
    {
      id: 3,
      title: "Tamil New Year Celebration",
      date: "April 14, 2025",
      location: "Community Park",
      image: "/images/tamil-new-year.jpg",
      description: "Celebrate Tamil New Year with cultural performances, traditional food, and festivities.",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-background.jpg" alt="Tamil Culture" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container relative z-10 px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-up">
            Experience the Richness of <span className="text-primary">Tamil Culture</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Traditional Music, Dance, and Performances for Your Special Events
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Contact Us
            </Button>
          </div>
        </div>
        <a
          href="#services"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </a>
      </section>

      {/* Featured Event Countdown */}
      <section className="bg-primary/10 py-12">
        <div className="container px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Next Featured Event</h2>
            <p className="text-muted-foreground">Tamil New Year Celebration - April 14, 2025</p>
          </div>
          <CountdownTimer targetDate={upcomingEventDate} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Entertainment Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer authentic Tamil cultural performances to make your events memorable and culturally enriching.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join us for these upcoming celebrations of Tamil culture and tradition.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Glimpses of our past performances and cultural events.
            </p>
          </div>
          <GallerySection />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-primary/5">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from those who have experienced our cultural performances.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interested in our services? Get in touch with us to discuss your event needs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <ContactForm />
            </div>
            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">info@tamilcultureevents.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">123 Cultural Avenue, Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Business Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Tamil Culture Events</h3>
              <p className="mb-4">
                Bringing the rich heritage of Tamil culture to your special events through authentic performances and
                experiences.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white/80 transition-colors" aria-label="Facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-white/80 transition-colors" aria-label="Instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="hover:text-white/80 transition-colors" aria-label="Twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-white/80 transition-colors" aria-label="YouTube">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:text-white/80 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white/80 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#events" className="hover:text-white/80 transition-colors">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-white/80 transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white/80 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white/80 transition-colors">
                    Bharatanatyam
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white/80 transition-colors">
                    Traditional Music
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white/80 transition-colors">
                    Kolattam
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white/80 transition-colors">
                    Wedding Performances
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white/80 transition-colors">
                    Corporate Events
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="mb-4">Subscribe to our newsletter for updates on upcoming events and performances.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none text-black"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-primary px-4 py-2 rounded-r-md hover:bg-white/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Tamil Culture Events. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

