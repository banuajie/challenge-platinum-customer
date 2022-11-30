import React from "react";
import logo from "../../assets/images/logo.png";

const SectionNavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="logo website" width="30" height="24" className="d-inline-block align-text-top me-2" />
                        BCR
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto me-5">
                            <li className="nav-item me-1">
                                <a className="nav-link" aria-current="page" href="#ourServices">
                                    Our Services
                                </a>
                            </li>
                            <li className="nav-item me-1">
                                <a className="nav-link" href="#whyUs">
                                    Why Us
                                </a>
                            </li>
                            <li className="nav-item me-1">
                                <a className="nav-link" href="#testimony">
                                    Testimonial
                                </a>
                            </li>
                            <li className="nav-item me-1">
                                <a className="nav-link" href="#fAQ">
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

export default SectionNavBar;
