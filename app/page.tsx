"use client";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Features from "@/components/Features";
import Problem from "@/components/Problem";
import Showcase from "@/components/Showcase";
import Compare from "@/components/Compare";
import Pricing from "@/components/Prcing";
import Footer from "@/components/Footer";

export default function Home() {
  // Helper function to smoothly scroll to a section by id
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="font-sans">
      <div className="sticky top-0 z-50">
        <Header
          onHomeClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          onFeaturesClick={(e) => {
            e.preventDefault();
            scrollToSection("features");
          }}
          onPricingClick={(e) => {
            e.preventDefault();
            scrollToSection("pricing");
          }}
        />
      </div>
      <section id="hero">
        <Hero />
      </section>
      <hr className="border-t-2 border-purple-500 w-full" />
      <section id="problem">
        <Problem />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="compare">
        <Compare />
      </section>
      <section id="showcase">
        <Showcase />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <Footer />
    </main>
  );
}