import Image from "next/image";
import { HeroSection } from "@/components/home-page/HeroSection";
import { AboutUs } from "@/components/home-page/AboutUs";
import { Services } from "@/components/home-page/Services";
import { Features } from "@/components/home-page/Features";
import { Footer } from "@/components/common/Footer";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutUs />
      <Services />
      <Features />
      <Footer />
    </div>
  );
}
