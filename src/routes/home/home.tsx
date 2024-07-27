import { HeroSection } from "../../components/organisms/hero-section";
import { WhyUsSection } from "../../components/organisms/why-us-section";
import { MOTIVES } from "../../data/motives";

export function Home() {
    return (
        <>
            <HeroSection />
            <WhyUsSection motives={MOTIVES} />
        </>
    );
}
