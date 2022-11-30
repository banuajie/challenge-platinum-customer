import React from "react";
import SectionCTABanner from "../../components/SectionCTABanner";
import SectionFAQ from "../../components/SectionFAQ";
import SectionHero from "../../components/SectionHero";
import SectionNavBar from "../../components/SectionNavBar";
import SectionOurServices from "../../components/SectionOurServices";
import SectionTestimonial from "../../components/SectionTestimonial";
import SectionWhyUs from "../../components/SectionWhyUs";
import SectionFooter from "../../components/SectionFooter";

const LandingPage = () => {
    return (
        <div>
            <SectionNavBar />
            <SectionHero />
            <SectionOurServices />
            <SectionWhyUs />
            <SectionTestimonial />
            <SectionCTABanner />
            <SectionFAQ />
            <SectionFooter />
        </div>
    );
};

export default LandingPage;
