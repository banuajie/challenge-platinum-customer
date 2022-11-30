import React from "react";
import logo from "../../assets/images/logo.png";

const SectionNavigationBar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light sticky-top">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <img src={logo} alt="logo website" width="30" height="24" class="d-inline-block align-text-top me-2" />
                        Car Rental
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto me-5">
                            <li class="nav-item me-1">
                                <a class="nav-link" aria-current="page" href="#ourServices">
                                    Our Services
                                </a>
                            </li>
                            <li class="nav-item me-1">
                                <a class="nav-link" href="#whyUs">
                                    Why Us
                                </a>
                            </li>
                            <li class="nav-item me-1">
                                <a class="nav-link" href="#testimony">
                                    Testimonial
                                </a>
                            </li>
                            <li class="nav-item me-1">
                                <a class="nav-link" href="#fAQ">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default SectionNavigationBar;
