"use client";
import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ArrowBl from "./ui/arrow-bl";
const showcaseUIs = [
  {
    bg: "bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-100",
    border: "border-yellow-300",
    shadow: "shadow-yellow-200",
    label: "Playful Button UI",
    content: (
      <div className="flex flex-col items-center justify-center h-full"></div>
    ),
  },
  {
    bg: "bg-gradient-to-br from-purple-200 via-purple-400 to-pink-100",
    border: "border-purple-300",
    shadow: "shadow-purple-200",
    label: "Modern Card UI",
    content: (
      <div className="flex flex-col items-center justify-center h-full"></div>
    ),
  },
  {
    bg: "bg-gradient-to-br from-pink-200 via-yellow-100 to-purple-100",
    border: "border-pink-200",
    shadow: "shadow-pink-100",
    label: "Colorful Input UI",
    content: (
      <div className="flex flex-col items-center justify-center h-full"></div>
    ),
  },
];

export default function Showcase() {
  // Fix hydration error by ensuring client-only rendering
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const prev = () => {
    setCurrent((c) => (c === 0 ? showcaseUIs.length - 1 : c - 1));
  };
  const next = () => {
    setCurrent((c) => (c === showcaseUIs.length - 1 ? 0 : c + 1));
  };

  const handleDotClick = (idx: number) => {
    setCurrent(idx);
  };

  if (!mounted) return null;

  return (
    <section className="py-24 bg-purple-100 flex flex-col items-center pr-50">
      <div className="flex justify-start mb-2 w-full pl-40 ">
        <span className="inline-flex items-center px-4 py-1 rounded-full bg-yellow-200 text-purple-900 font-bold text-lg shadow font-heading border border-yellow-300">
          Showcase
        </span>
      </div>
      <div className="flex flex-row items-center justify-center w-full max-w-6xl">
        {/* Left: Present things (carousel and dots) */}
        <div className="flex flex-col items-center flex-1">
          <div className="flex items-center justify-center w-full">
            {/* Left Arrow */}
            <button
              aria-label="Previous UI"
              onClick={prev}
              className="p-4 rounded-full bg-purple-100 hover:bg-purple-200 border-2 border-purple-300 shadow-lg transition-all duration-200 mr-6"
            >
              <FaChevronLeft className="text-2xl text-purple-700" />
            </button>
            {/* UI Mockup Carousel */}
            <div
              className="overflow-hidden w-[480px] h-[320px] md:w-[600px] md:h-[350px] rounded-3xl relative"
              style={{
                boxShadow: "0 8px 32px 0 rgba(80, 0, 120, 0.10)",
              }}
            >
              <div
                ref={sliderRef}
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{
                  width: `${showcaseUIs.length * 100}%`,
                  transform: `translateX(-${current * (100 / showcaseUIs.length)}%)`,
                }}
              >
                {showcaseUIs.map((ui) => (
                  <div
                    key={ui.label}
                    className={`flex-shrink-0 w-[480px] h-[320px] md:w-[600px] md:h-[350px] rounded-3xl border-4 ${ui.border} ${ui.bg} ${ui.shadow} flex items-center justify-center relative`}
                    style={{
                      boxShadow: "0 8px 32px 0 rgba(80, 0, 120, 0.10)",
                      transition: "box-shadow 0.3s",
                    }}
                  >
                    {ui.content}
                    <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 text-purple-700 font-bold px-4 py-1 rounded-full shadow text-sm">
                      {ui.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right Arrow */}
            <button
              aria-label="Next UI"
              onClick={next}
              className="p-4 rounded-full bg-purple-100 hover:bg-purple-200 border-2 border-purple-300 shadow-lg transition-all duration-200 ml-6"
            >
              <FaChevronRight className="text-2xl text-purple-700" />
            </button>
          </div>
          {/* Dots */}
          <div className="flex space-x-3 mt-8">
            {showcaseUIs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-4 h-4 rounded-full border-2 ${
                  idx === current
                    ? "bg-yellow-400 border-yellow-500"
                    : "bg-purple-200 border-purple-300"
                } transition-all`}
                aria-label={`Show UI ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Right: Text with arrow */}
        <div className="flex flex-col items-center justify-center ml-30 min-w-[220px] mb-20 tracking-wide">
          <div className="flex items-center pl-20">
            <span className="text-xl md:text-6xl font-black text-purple-700 whitespace-nowrap text-center flex flex-col items-center gap-y-6 pt-15">
              <span className="ml-4">
                All generated
              </span>

              <span className="flex items-center">
                <span>by</span>
                <span
                  className="text-yellow-500 px-3 pr-5 ml-4 scale-z-50 py-1"
                  style={{
                    background: "#1a1a1a",
                    display: "inline-block",
                    transform: "skewX(-12deg)",
                  }}
                >
                  <span style={{ display: "inline-block", transform: "skewX(12deg)" }}>
                    MakeWhiz
                  </span>
                </span>
              </span>
              <ArrowBl
                className="text-60xl text-black animate-bounce-x  -ml-20 -mt-5"
                size={150}
                style={{ transform: "rotate(11deg)" }}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
