import React from "react";

import icon_facebook from "../../assets/images/icon_facebook.png";
import icon_instagram from "../../assets/images/icon_instagram.png";
import icon_twitter from "../../assets/images/icon_twitter.png";
import icon_mail from "../../assets/images/icon_mail.png";
import icon_twitch from "../../assets/images/icon_twitch.png";
import logo from "../../assets/images/logo.png";

import "./index.css";

const SectionFooter = () => {
    return (
        <>
            <div id="footer">
                <br />
                <div className="container mt-5">
                    <div className="row">
                        {/* Footer Address */}
                        <div className="footerAddress col-lg-3 col-md-6 col-sm-12 mb-5">
                            <div className="row">
                                <div className="col">
                                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>binarcarrental@gmail.com</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>081-233-334-808</p>
                                </div>
                            </div>
                        </div>
                        {/* Akhir Footer Address */}

                        {/* Footer Navigation */}
                        <div className="footerNavigation col-lg-3 col-md-6 col-sm-12 mb-5">
                            <div className="row">
                                <div className="col">
                                    <ul>
                                        <li>
                                            <a href="#ourServices">Our Services</a>
                                        </li>
                                        <li>
                                            <a href="#whyUs">Why Us</a>
                                        </li>
                                        <li>
                                            <a href="#testimony">Testimonial</a>
                                        </li>
                                        <li>
                                            <a href="#fAQ">FAQ</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Akhir Footer Menu */}

                        {/* Footer Sosmed */}
                        <div className="footerSosmed col-lg-3 col-md-6 col-sm-12 mb-5">
                            <div className="row">
                                <div className="col">
                                    <p className="footerSosmedTitle">Connect with us</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <img src={icon_facebook} />
                                </div>
                                <div className="col-2">
                                    <img src={icon_instagram} />
                                </div>
                                <div className="col-2">
                                    <img src={icon_twitter} />
                                </div>
                                <div className="col-2">
                                    <img src={icon_mail} />
                                </div>
                                <div className="col-2">
                                    <img src={icon_twitch} />
                                </div>
                            </div>
                        </div>
                        {/* Akhir Footer Sosmed */}

                        {/* Footer Copyright */}
                        <div className="footerCopyright col-lg-3 col-md-6 col-sm-12 mb-5">
                            <div className="row">
                                <div className="col">
                                    <p className="footerCopyrightTitle">Copyright Binar 2022</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <img src={logo} width="32px" height="32px" />
                                </div>
                                <div className="col">
                                    <h4>BCR</h4>
                                </div>
                            </div>
                        </div>
                        {/* Akhir Footer Copyright */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionFooter;
