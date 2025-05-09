import React from "react";
import Image from "next/image";

const competitorImages = [
  {
    src: "https://placehold.co/220x160?text=Other+AI+1",
    label: "Other AI 1",
    width: 220,
    height: 160,
  },
  {
    src: "https://placehold.co/220x160?text=Other+AI+2",
    label: "Other AI 2",
    width: 220,
    height: 160,
  },
  {
    src: "https://placehold.co/220x160?text=Other+AI+3",
    label: "Other AI 3",
    width: 220,
    height: 160,
  },
];

const ourImage = {
  src: "https://placehold.co/600x400/FFF7B2/1a1a1a?text=MakeWhiz",
  label: "MakeWhiz",
  width: 600,
  height: 400,
};

export default function Compare() {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-50 via-white to-yellow-50 px-2 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top: Competitors */}
        <div className="w-full flex flex-col items-center">
          <h3 className="text-2xl font-bold text-purple-700 mb-8 font-heading">
            Other AI UI Generators
          </h3>
          <div className="flex flex-row gap-8 mb-8">
            {competitorImages.map((img) => (
              <div
                key={img.label}
                className="flex flex-col items-center bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-4 min-w-[220px]"
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  width={img.width}
                  height={img.height}
                  className="rounded-xl object-cover w-[220px] h-[160px] border-2 border-gray-100"
                  style={{ width: "220px", height: "160px" }}
                  unoptimized
                />
                <span className="mt-3 text-gray-700 text-base font-semibold">
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* VS Divider */}
        <div className="flex flex-col items-center my-6">
          <span className="text-5xl font-black text-purple-400 mb-2 drop-shadow-lg">VS</span>
          <div className="w-1 h-16 bg-gradient-to-b from-yellow-300 via-purple-200 to-purple-100 rounded-full" />
        </div>
        {/* Bottom: Our App */}
        <div className="flex flex-col items-center mt-6 w-full">
          <h3 className="text-2xl font-bold text-yellow-600 mb-8 font-heading">
            MakeWhiz
          </h3>
          <div className="flex flex-col items-center bg-yellow-50 rounded-2xl shadow-2xl border-2 border-yellow-300 p-10 min-w-[360px]">
            <Image
              src={ourImage.src}
              alt={ourImage.label}
              width={ourImage.width}
              height={ourImage.height}
              className="rounded-xl object-cover w-[600px] h-[400px] border-4 border-yellow-400 max-w-full"
              style={{ maxWidth: "100%", height: "auto" }}
              unoptimized
            />
            <span className="mt-7 text-purple-900 text-3xl font-extrabold font-heading">
              {ourImage.label}
            </span>
            <span className="mt-4 text-yellow-700 text-lg font-medium text-center max-w-xl">
              Cleaner, more customizable, and production-ready UI code.
            </span>
            {/* Start Designing Button */}
            <button
              className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-4 rounded-full border-2 border-blue-700 shadow-md transition-all duration-200 text-lg"
              type="button"
            >
              Start Designing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
