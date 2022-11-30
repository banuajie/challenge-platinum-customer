import React from "react";
import SectionCTABanner from "../../components/SectionCTABanner";
import SectionFaq from "../../components/SectionFaq";
import SectionHero from "../../components/SectionHero";
import SectionNavigationBar from "../../components/SectionNavigationBar";
import SectionServices from "../../components/SectionServices";
import SectionTestimonial from "../../components/SectionTestimonial";
import SectionWhyUs from "../../components/SectionWhyUs";
import SectionFooter from "../../components/SectionFooter";

const LandingPage = () => {
    return (
        <div>
            <SectionNavigationBar />
            <SectionHero />
            <SectionServices />
            <SectionWhyUs />
            <SectionTestimonial />
            <SectionCTABanner />
            <SectionFaq />
            <SectionFooter />
        </div>
    );
};

export default LandingPage;
