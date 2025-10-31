"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageModal } from "./image-modal"

const images = [
  {
    src: "/images/photo1.jpg",
    rotation: "rotate-2",
    zIndex: "z-20",
  },
  {
    src: "/images/photo2.jpg",
    rotation: "-rotate-3",
    zIndex: "z-10",
  },
  {
    src: "/images/photo3.jpg",
    rotation: "rotate-1",
    zIndex: "z-30",
  },
  {
    src: "/images/photo5.jpg",
    rotation: "-rotate-2",
    zIndex: "z-20",
  },
  {
    src: "/images/photo4.jpg",
    rotation: "rotate-3",
    zIndex: "z-40",
  },
  {
    src: "/images/photo6.jpg",
    rotation: "rotate-2",
    zIndex: "z-50",
  },
]

export function ImageGrid() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  return (
    <>
      <div className="relative grid grid-cols-2 gap-4 md:grid-cols-3 p-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative aspect-[3/4] group ${image.rotation} ${image.zIndex} 
              transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 
              hover:shadow-xl will-change-transform cursor-pointer text-left block w-full p-0 border-none bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg`}
            style={{
              transformOrigin: "center",
              margin: index % 2 ? "-0.5rem" : "0.5rem",
            }}
            onClick={() => setSelectedImageIndex(index)}
            aria-label={`View image ${index + 1}`}
          >
            <div className="absolute inset-0 bg-white rounded-xl shadow-md transform transition-transform duration-300 group-hover:shadow-lg">
              <div className="absolute inset-[6px] overflow-hidden rounded-lg">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  priority={index < 3}
                />
              </div>
            </div>
            {/* Paper texture overlay */}
            <div className="absolute inset-0 rounded-xl opacity-30 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNmNWY1ZjUiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]" />
          </button>
        ))}
      </div>

      <ImageModal
        images={images}
        selectedIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onNavigate={setSelectedImageIndex}
      />
    </>
  )
}

