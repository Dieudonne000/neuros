
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PartnerSection from "./components/Partner";
import ValueSection from "./components/Value";
import FeatureCard from "./components/Feature-card";
import Testimonials from "./components/Testimonials";
import InsightsSection from "./components/insights-section";
import FeatureGrid from "./components/feature-grid";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PartnerSection />
      <ValueSection />
      <FeatureCard/>
      <Testimonials/>
      <InsightsSection/>
      <FeatureGrid/>
    </div>
  );
}
