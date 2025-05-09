"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Pencil from "@/components/ui/pencil";

export default function Hero() {
  // No hydration error: remove client-only mounting logic, as there are no browser-only APIs or dynamic values
  return (
    <div className="flex flex-row col-span-2 items-center pl-50 justify-between h-screen font-heading space-x-20">
      {/* Left Side: Text and Button */}
      <div className="flex flex-col items-start space-y-6 max-w-xl">
        <h1 className="text-7xl font-heading font-extrabold text-purple-800 ">
          Design UIs <br />with a Smile!
        </h1>
        <p className="text-purple-700 text-lg mt-2">
          Let your imagination run wild. Generate fun, <br /> clean UI code just by typing what you want!
        </p>
        <div className="pt-10">
          <Button
            className="font-heading  bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-3 rounded-full border-2 border-blue-700 w-50 h-12 text-lg font-bold"
            style={{
              boxShadow:
                "4px 4px 0px 0 rgba(0,0,0,0.2), inset 4px -4px 0 rgba(214,100,0,1)",
            }}
          >
            Start Designing
          </Button>
        </div>
      </div>
      {/* Right Side: Beautiful Card with Pencil on the Left */}
      <div className="flex flex-1 justify-end pr-55">
        <div className="flex flex-row items-center">
          <div className="mr-[-40px]" style={{ transform: "rotate(-30deg)" }}>
            <Pencil />
          </div>
          <Card className="w-150 h-96 bg-gradient-to-br from-purple-200 via-white to-yellow-100 shadow-2xl rounded-3xl border-0 relative overflow-hidden flex flex-col">
            {/* Decorative floating shapes */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-yellow-300 rounded-full opacity-40 blur-2xl z-0 animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-300 rounded-full opacity-30 blur-2xl z-0 animate-pulse" />
            <div className="absolute top-10 right-10 w-16 h-16 bg-pink-300 rounded-full opacity-30 blur-lg z-0 animate-bounce" />
            <CardHeader className="bg-purple-100/80 rounded-t-3xl shadow-md z-10 relative">
              <CardTitle className="text-2xl font-bold text-purple-800 flex items-center gap-2">
                <span className="inline-block w-4 h-4 bg-yellow-400 rounded-full shadow-md animate-pulse" />
                Welcome to MakeWhiz!
              </CardTitle>
            </CardHeader>
            {/* Make the content scrollable */}
            <div className="p-8 z-10 relative flex flex-col items-center justify-center flex-1 overflow-auto h-0">
              <p className="text-lg text-purple-700 font-medium text-center mb-10">
                Instantly turn your ideas into beautiful UI code.<br />
                <span className="text-yellow-600 font-bold">No design skills required!</span>
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-green-400 rounded-full" />
                  <span className="text-purple-800 font-semibold">Fun & Fast UI Generation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-blue-400 rounded-full" />
                  <span className="text-purple-800 font-semibold">Clean, Readable Code</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-pink-400 rounded-full" />
                  <span className="text-purple-800 font-semibold">Customizable Components</span>
                </li>
              </ul>
              <Button
                className="bg-purple-600 hovers:bg-purple-700 text-white px-6 py-3 rounded-full border-2 border-purple-800 shadow-lg font-bold text-lg transition-all duration-200"
                style={{
                  boxShadow:
                    "6px 6px 0px 0 rgba(100,0,214,0.15), inset -4px 4px 0 rgba(255,255,255,0.2)",
                }}
              >
                Try it Now
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}