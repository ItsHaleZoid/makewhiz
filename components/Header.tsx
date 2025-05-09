"use client";
import { Fredoka } from "next/font/google";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
const fredoka = Fredoka({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: '--font-fredoka' });

type HeaderProps = {
  onHomeClick?: React.MouseEventHandler<HTMLAnchorElement>;
  onFeaturesClick?: React.MouseEventHandler<HTMLAnchorElement>;
  onPricingClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export default function Header({
  onHomeClick,
  onFeaturesClick,
  onPricingClick,
}: HeaderProps) {
  const router = useRouter();
  return (
    <header className="w-full flex items-center justify-between px-51 py-4 bg-purple-100 shadow-md font-heading -mb-25">
      <div className="flex items-center space-x-3">
        <span className="text-2xl font-extrabold text-purple-800 font-fredoka">MakeWhiz</span>
      </div>
     
      <nav className="flex items-center space-x-10">
        <a
          href="#"
          className="text-purple-700 hover:text-purple-900 font-semibold transition-colors"
          onClick={onHomeClick}
        >
          Home
        </a>
        <a
          href="#"
          className="text-purple-700 hover:text-purple-900 font-semibold transition-colors"
          onClick={onFeaturesClick}
        >
          Features
        </a>
        <a
          href="#"
          className="text-purple-700 hover:text-purple-900 font-semibold transition-colors"
          onClick={onPricingClick}
        >
          Pricing
        </a>
      </nav>
      <div className="flex items-center space-x-3">
        <Button
          className="bg-purple-600 text-white hover:bg-purple-900 w-20 h-10 border-black border-2 transition-transform duration-200 active:scale-80"
          style={{
            boxShadow:
              "4px 4px 0px 0 rgba(0,0,0,0), inset -3px -3px 0 rgba(26,0,100,1)",
          }}
          onClick={() => router.push("/auth")}
        >
          Login
        </Button>
      </div>
    </header>
  );
}
