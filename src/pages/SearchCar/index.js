import React from "react";
import HeaderNav from "../../components/HeaderNav";
import HeroSection from "../../components/HeroSection";
import Footer from "../../components/Footer";
import FilterCar from "../../components/FilterCars";

const SearchCar = () => {
    return (
        <>
            <HeaderNav />
            <HeroSection />
            <FilterCar />
            <Footer />
        </>
    );
};

export default SearchCar;
