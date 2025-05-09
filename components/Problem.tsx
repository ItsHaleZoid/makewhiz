"use client";
import { useState } from "react";

export default function Problem() {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section className="relative py-20 bg-px-6 md:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Problem Statement */}
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-6 font-heading">
            The Problem with <span className="text-yellow-500">Generic AI</span> UI Generation
          </h2>
          <p className="text-lg text-purple-700 mb-6">
            Most AI tools aren’t built for UI. They generate code that’s messy, expensive, and hard to customize. You spend more time fixing than building.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 bg-red-400 rounded-full" />
              <span className="text-purple-900 font-medium">Bloated, unreadable code</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 bg-red-400 rounded-full" />
              <span className="text-purple-900 font-medium">Expensive API calls</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 bg-red-400 rounded-full" />
              <span className="text-purple-900 font-medium">No real customization</span>
            </li>
          </ul>
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-6 py-3 rounded-full border-2 border-blue-700 shadow-md transition-all duration-200"
            onClick={() => setShowComparison((v) => !v)}
          >
            {showComparison ? "Hide Comparison" : "See the Difference"}
          </button>
        </div>
        {/* Right: Comparison */}
        <div className="flex-1 w-full">
          <div className="relative bg-white rounded-3xl shadow-2xl border-4 border-purple-100 p-8 transition-all duration-300">
            <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
              <span className="inline-block w-4 h-4 bg-yellow-400 rounded-full" />
              <span>Normal AI vs <span className="text-purple-900">Our App</span></span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Normal AI */}
              <div className="bg-yellow-100 rounded-2xl p-5 flex flex-col gap-2 border-2 border-yellow-200">
                <span className="font-bold text-yellow-700 text-lg mb-1">Normal AI</span>
                <ul className="text-purple-800 text-base space-y-2">
                  <li>❌ Generic, unoptimized code</li>
                  <li>❌ High cost per request</li>
                  <li>❌ Limited or no UI customization</li>
                  <li>❌ Needs lots of manual fixes</li>
                </ul>
                {showComparison && (
                  <pre className="bg-yellow-50 text-xs text-purple-700 rounded-lg p-3 mt-3 overflow-x-auto">
{`<div>
  <p style="color:blue;">Hello</p>
  <!-- ...lots of inline styles and messy code... -->
</div>`}
                  </pre>
                )}
              </div>
              {/* Our App */}
              <div className="bg-purple-100 rounded-2xl p-5 flex flex-col gap-2 border-2 border-purple-200">
                <span className="font-bold text-purple-700 text-lg mb-1">Our App</span>
                <ul className="text-purple-900 text-base space-y-2">
                  <li>✅ Specialized, clean UI code</li>
                  <li>✅ Cheaper, optimized requests</li>
                  <li>✅ Fully customizable components</li>
                  <li>✅ Built for designers & devs</li>
                </ul>
                {showComparison && (
                  <pre className="bg-purple-50 text-xs text-purple-800 rounded-lg p-3 mt-3 overflow-x-auto">
{`<Button className="bg-yellow-400 text-blue-900 rounded-full">
  Hello
</Button>`}
                  </pre>
                )}
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="inline-block bg-yellow-300 text-purple-900 font-bold px-4 py-2 rounded-full shadow">
                Specialized AI for UI. Cheaper. Customizable. Better.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
