import "./index.css";
import React from "react";
import icon_facebook from "../../assets/images/icon_facebook.png";
import icon_instagram from "../../assets/images/icon_instagram.png";
import icon_twitter from "../../assets/images/icon_twitter.png";
import icon_mail from "../../assets/images/icon_mail.png";
import icon_twitch from "../../assets/images/icon_twitch.png";
import logo from "../../assets/images/logo.png";

const Footer = () => {
    return (
        <>
            <section id="Footer" className="pt-3 pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-3 pb-3">
                            <p className="footer-address">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                            <p className="footer-email">binarcarrental@gmail.com</p>
                            <p className="footer-handphone">081-233-334-808</p>
                        </div>

                        <div className="col-12 col-lg-3 pb-3">
                            <p className="footer-nav">
                                <a href="#our-services" className="footer-link text-dark">
                                    Our services
                                </a>
                            </p>
                            <p className="footer-nav">
                                <a href="#why-us" className="footer-link text-dark">
                                    Why Us
                                </a>
                            </p>
                            <p className="footer-nav">
                                <a href="#testimony" className="footer-link text-dark">
                                    Testimonial
                                </a>
                            </p>
                            <p className="footer-nav">
                                <a href="#faq" className="footer-link text-dark">
                                    FAQ
                                </a>
                            </p>
                        </div>

                        <div className="col-12 col-lg-3 pb-3">
                            <div className="row">
                                <p className="sosmed-title">Connect with us</p>
                            </div>
                            <div className="row">
                                <div className="col-auto pe-0">
                                    <img src={icon_facebook} alt="Icon Facebook" />
                                </div>
                                <div className="col-auto ps-1 pe-0">
                                    <img src={icon_instagram} alt="Icon Instagram" />
                                </div>
                                <div className="col-auto ps-1 pe-0">
                                    <img src={icon_twitter} alt="Icon Twitter" />
                                </div>
                                <div className="col-auto ps-1 pe-0">
                                    <img src={icon_mail} alt="Icon Mail" />
                                </div>
                                <div className="col-auto ps-1 pe-0">
                                    <img src={icon_twitch} alt="Icon Twitch" />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3 pb-3">
                            <div className="row">
                                <p className="copyright-title">Copyright Binar 2022</p>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <img src={logo} alt="Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
