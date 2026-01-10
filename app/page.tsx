"use client";

import { SplitText } from "@/components/ui/split-text";
import CircularGallery from "@/components/CircularGallery";

const galleryItems = [
  { image: "/images/photo0.jpg", text: "" },
  { image: "/images/photo2.jpg", text: "" },
  { image: "/images/photo3.jpg", text: "" },
  { image: "/images/photo6.jpg", text: "" },
  { image: "/images/L1100431.jpg", text: "" },
  { image: "/images/L1090728.jpg", text: "" },
];

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="px-4 pt-6">
        <header className="text-center">
          <SplitText
            as="h1"
            text="Johann Hipp"
            className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-[family-name:var(--font-noto-serif)]"
          />
          <p className="text-gray-500 mt-6 max-w-xl mx-auto">
            still trying to figure all of this out. love ultrarunning, trad
            climbing and alpine mountaineering. authenticity is all that
            matters.
          </p>
          <div className="max-w-xl mx-auto mt-4 mb-4 flex justify-center">
            <hr className="border-gray-200 w-2/3" />
          </div>
          <p className="text-gray-500 max-w-xl mx-auto">
            currently working on AgentOS, an agentic operating system.
            we're running a research preview and would love to hear your
            feedback :)
          </p>
        </header>
      </div>

      <div style={{ height: "600px", position: "relative" }} className="mt-3">
        <CircularGallery items={galleryItems} bend={2} />
      </div>
    </div>
  );
}
