import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const HeaderNav = () => {
    const location = useLocation();

    const token = window.localStorage.getItem("Token");

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "#F1F3FF" }}>
                <div className="container">
                    <Link to="/">
                        <img src={logo} alt="BCR Logo" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav gap-4">
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#our-services">
                                    Our Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#why-us">
                                    Why Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#testimony">
                                    Testimonial
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#faq">
                                    FAQ
                                </a>
                            </li>
                            <li className="nav-item">
                                {!token && (
                                    <Link to="/signin" state={location.pathname}>
                                        <button className="btn btn-success">Register</button>
                                    </Link>
                                )}

                                {location.pathname !== "/select-method" && location.pathname !== "/payment" && token && (
                                    <Link to=".">
                                        <button className="btn btn-success" onClick={() => window.localStorage.removeItem("Token")}>
                                            Logout
                                        </button>
                                    </Link>
                                )}

                                {location.pathname === "/select-method" && token && (
                                    <button className="btn btn-success" disabled>
                                        Logout
                                    </button>
                                )}

                                {location.pathname === "/payment" && token && (
                                    <button className="btn btn-success" disabled>
                                        Logout
                                    </button>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default HeaderNav;
