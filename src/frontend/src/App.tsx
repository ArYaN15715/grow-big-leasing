import CTASection from "./components/CTASection";
import CategorySection from "./components/CategorySection";
import ExpansionSection from "./components/ExpansionSection";
import FloatingCTAs from "./components/FloatingCTAs";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { MapSection } from "./components/MapSection";
import Navbar from "./components/Navbar";
import ProcessSection from "./components/ProcessSection";
import PropertyShowcase from "./components/PropertyShowcase";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <div style={{ backgroundColor: "#111111", minHeight: "100dvh" }}>
      <Navbar />
      <HeroSection />
      <CategorySection />
      <ServicesSection />
      <PropertyShowcase />
      <ExpansionSection />
      <StatsSection />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <MapSection />
      <Footer />
      <FloatingCTAs />
    </div>
  );
}
