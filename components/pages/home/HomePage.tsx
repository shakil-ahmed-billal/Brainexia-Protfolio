import Brands from "@/components/Home/Brands";
import Circle from "@/components/Home/Circle";
import Comments from "@/components/Home/comments";
import DashboardImage from "@/components/Home/DashboardImage";
import Features from "@/components/Home/Features";
import FeatureCards from "@/components/Home/Featurescards";
import GrowProgress from "@/components/Home/GrowProgress";
import Hero from "@/components/Home/Hero";
import ReadyToUse from "@/components/Home/ReadyToUse";
import Security from "@/components/Home/Security";
import Transection from "@/components/Home/Transection";

function HomePage() {
    return (
        <>
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
        </>
    );
}

export default HomePage;