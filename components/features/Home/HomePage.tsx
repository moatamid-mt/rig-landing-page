import Image from "next/image";
import Hero from "./Hero/Hero";
import Features from "./Feature Cards/Features";
import CTA from "./CTA/CTA";
export default function HomePage() {
  return (
    <>

      <div className="px-6 sm:px-12 lg:px-28">
        <Hero />
        <Features />
        <CTA />
      </div>
    </>
  );
}
