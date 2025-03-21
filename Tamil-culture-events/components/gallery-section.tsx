"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    { id: 1, src: "/images/gallery-1.jpg", alt: "Bharatanatyam Performance" },
    { id: 2, src: "/images/gallery-2.jpg", alt: "Traditional Music Concert" },
    { id: 3, src: "/images/gallery-3.jpg", alt: "Kolattam Dance" },
    { id: 4, src: "/images/gallery-4.jpg", alt: "Cultural Festival" },
    { id: 5, src: "/images/gallery-5.jpg", alt: "Wedding Performance" },
    { id: 6, src: "/images/gallery-6.jpg", alt: "Corporate Event" },
  ]

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="relative h-64 overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(image.src)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="text-white font-medium">{image.alt}</span>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-2 right-2 z-10 bg-black/50 text-white p-2 rounded-full"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          {selectedImage && (
            <div className="relative h-[80vh] w-full">
              <Image src={selectedImage || "/placeholder.svg"} alt="Gallery image" fill className="object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

