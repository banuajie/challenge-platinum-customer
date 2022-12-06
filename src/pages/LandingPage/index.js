import React from "react";
import CTABanner from "../../components/CTABanner";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import HeaderNav from "../../components/HeaderNav";
import HeroSection from "../../components/HeroSection";
import OurServices from "../../components/OurServices";
import Testimony from "../../components/Testimony";
import WhyUs from "../../components/WhyUs";

const LandingPage = () => {
    return (
        <>
            <HeaderNav />
            <HeroSection />
            <OurServices />
            <WhyUs />
            <Testimony />
            <CTABanner />
            <FAQ />
            <Footer />
        </>
    );
};

export default LandingPage;
