import Brands from "@/components/Brands";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Security from "@/components/Security";
import Transection from "@/components/Transection";
import FeatureCards from "@/components/Featurescards";
import ReadyToUse from "@/components/ReadyToUse";
import GrowProgress from "@/components/GrowProgress";
import DashboardImage from "@/components/DashboardImage";
import Comments from "@/components/comments";
import Footer from "@/components/Footer";
import Circle from "@/components/Circle";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Features />
      <Security />
      <Transection />
      <Circle />
      <FeatureCards />
      <ReadyToUse />
      <GrowProgress />
      <DashboardImage />
      <Comments />
      <Footer />
    </>
  );
}
