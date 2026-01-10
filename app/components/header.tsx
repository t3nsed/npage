"use client";

import Link from "next/link";
import { useState } from "react";
import ElectricBorder from "@/components/ElectricBorder";

export function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent z-50">
      <div className="container mx-auto px-4 py-4 max-w-7xl flex justify-end">
        <Link
          href="https://useagentos.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className={`transition-transform duration-150 ${isHovered ? "scale-[1.15]" : "scale-100"}`}
        >
          <ElectricBorder
            color="#ff8c00"
            speed={1}
            chaos={0.12}
            borderRadius={999}
          >
            <span className="text-black bg-transparent px-4 py-2 text-sm font-medium">
              AgentOS
            </span>
          </ElectricBorder>
        </Link>
      </div>
    </header>
  );
}
