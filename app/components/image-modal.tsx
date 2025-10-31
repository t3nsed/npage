"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface ImageModalProps {
  images: {
    src: string
    alt?: string
  }[]
  selectedIndex: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export function ImageModal({ images, selectedIndex, onClose, onNavigate }: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft" && selectedIndex !== null) {
        onNavigate((selectedIndex - 1 + images.length) % images.length)
      } else if (e.key === "ArrowRight" && selectedIndex !== null) {
        onNavigate((selectedIndex + 1) % images.length)
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    // Prevent scrolling when modal is open
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [selectedIndex, onClose, onNavigate, images.length])

  if (selectedIndex === null) return null

  const selectedImage = images[selectedIndex]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div
        className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt || ""}
              fill
              className="object-contain animate-in fade-in zoom-in-95 duration-300"
              sizes="(max-width: 768px) 100vw, 90vw"
              priority
            />
          </div>
        </div>

        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
          Image {selectedIndex + 1} of {images.length}
        </div>
      </div>
    </div>
  )
}

