import { Feature } from "@/components/landing-page/features";
import { Hero } from "@/components/landing-page/hero-section";
import { Workflow } from "@/components/landing-page/work";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <Feature />
      <Workflow />
    </div>
  );
}
