"use client";
import { FaBolt, FaPalette, FaPuzzlePiece } from "react-icons/fa";

export default function Features() {
  return (
    <section className="relative py-24 bg-gradient-to-l from-purple-500 to-purple-600 overflow-hidden px-8 md:px-34">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-16">
        {/* Left: Features Text */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 font-heading">
            <span className="bg-white bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <ul className="space-y-8">
            <li className="flex items-start gap-5">
              <span className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100 rounded-full flex items-center justify-center shadow-lg border-4 border-yellow-100">
                <FaBolt className="text-3xl text-purple-700 drop-shadow-md" />
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-1 font-heading">
                  Instant UI Generation
                </h3>
                <p className="text-purple-100 text-lg font-light">
                  <span className="font-semibold text-yellow-200">Describe</span> your idea and get <span className="font-semibold text-white">beautiful</span>, production-ready UI code in seconds.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-5">
              <span className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-200 via-green-500 to-green-200 rounded-full flex items-center justify-center shadow-lg border-4 border-green-100">
                <FaPalette className="text-3xl text-purple-700 drop-shadow-md" />
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-1 font-heading">
                  Customizable Components
                </h3>
                <p className="text-purple-100 text-lg font-light">
                  <span className="font-semibold text-pink-200">Tweak</span> colors, layouts, and styles to match your brand and vision—<span className="font-semibold text-white">no design skills needed</span>.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-5">
              <span className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-pink-200 via-purple-100 to-yellow-100 rounded-full flex items-center justify-center shadow-lg border-4 border-pink-100">
                <FaPuzzlePiece className="text-3xl text-purple-700 drop-shadow-md" />
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-1 font-heading">
                  Clean, Readable Code
                </h3>
                <p className="text-purple-100 text-lg font-light">
                  <span className="font-semibold text-white">Export</span> code that’s easy to understand and <span className="font-semibold text-yellow-200">integrate</span> into your projects.
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* Right: Empty White Box for Video */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full h-80 md:h-[420px] bg-white rounded-3xl shadow-2xl border-4 border-white flex items-center justify-center">
            {/* Placeholder for future video */}
          </div>
        </div>
      </div>
    </section>
  );
}
