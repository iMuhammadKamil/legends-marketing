import Hero from "@/components/sections/home/Hero";
import FeaturedProjects from "@/components/sections/home/FeaturedProjects";
import ValuePillars from "@/components/sections/home/ValuePillars";
import AmenitiesToggle from "@/components/sections/home/AmenitiesToggle";
import WhyInvest from "@/components/sections/home/WhyInvest";
import InvestmentOpportunities from "@/components/sections/home/InvestmentOpportunities";
import MarketInsightsPreview from "@/components/sections/home/MarketInsightsPreview";
import Testimonials from "@/components/sections/home/Testimonials";
import StrategicPartners from "@/components/sections/home/StrategicPartners";
import HomeCTA from "@/components/sections/home/HomeCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ValuePillars />
      <AmenitiesToggle />
      <WhyInvest />
      <InvestmentOpportunities />
      <MarketInsightsPreview />
      <Testimonials />
      <StrategicPartners />
      <HomeCTA />
    </>
  );
}
