import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ServicesSection from "@/components/ServicesSections";

export default function Home() {
  return (
    <>
      {/* HERO */}
    <HeroSection />

      {/* SERVICES */}
      <ServicesSection />

      {/* How it works section*/}
     <HowItWorks/>

      {/* FINAL CTA */}
       <CTASection />
     
    </>
  );
}
