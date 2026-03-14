import AllPortfoliosGrid from "./components/home/AllPortfoliosGrid";
import FeaturedPortfolios from "./components/home/FeaturedPortfolios";
import Hero from "./components/home/Hero";
import HowItWorks from "./components/home/HowItWorks";
import InvestmentPlans from "./components/home/InvestmentPlans";
import PlatformFeatures from "./components/home/PlatformFeatures";
import ROICalculator from "./components/home/ROICalculator";
import TrustIndicators from "./components/home/TrustIndicators";
import Navbar from "./components/layout/Navbar";
 

 
export default function Home() {
   const heroImages = [
    {
      src: "/hero-1.jpg", // Replace with your actual paths
      alt: "Tesla Innovation Portfolio - Electric Vehicles & AI Technology"
    },
    {
      src: "/hero2.jpg",
      alt: "Space Technology Portfolio - SpaceX & Starlink Satellite Network"
    },
    {
      src: "/hero-3.jpg", 
      alt: "AI Portfolio - Advanced Machine Learning & Neural Networks"
    }
  ];
  return (
    <div>
      <Navbar />
      <Hero images={heroImages}/>
      <TrustIndicators />
      <InvestmentPlans />
      <FeaturedPortfolios   />
     <ROICalculator />
     <AllPortfoliosGrid />
     <HowItWorks />
      <PlatformFeatures />

    </div>
  );
}
