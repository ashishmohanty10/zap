import { Feature } from "@/components/landing-page/features";
import FooterSection from "@/components/landing-page/footer";
import { Hero } from "@/components/landing-page/hero-section";
import { Navbar } from "@/components/landing-page/navbar";
import { Workflow } from "@/components/landing-page/work";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto background">
      <Navbar />
      <Hero />
      <Feature />
      <Workflow />
      <FooterSection />
    </div>
  );
}
