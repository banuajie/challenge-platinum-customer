import "./index.css";
import React from "react";
import img_car from "../../assets/images/img_car.png";
import { Link, useLocation } from "react-router-dom";

const HeroSection = () => {
    const locationSearchCars = useLocation();

    return (
        <>
            <section id="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 align-self-center">
                            <div className="row">
                                <p className="hero-title">Sewa & Rental Mobil Terbaik di kawasan Bandung</p>
                            </div>
                            <div className="row">
                                <p className="hero-desc">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                            </div>
                            <div className="my-3" hidden={locationSearchCars.pathname === "/cars" ? true : false}>
                                <Link to="/cars">
                                    <button className="btn btn-success btn-sm w-auto">Mulai Sewa Mobil</button>
                                </Link>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <img src={img_car} alt="Car Logo" className="w-100 h-100" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
