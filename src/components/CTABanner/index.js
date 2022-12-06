import "./index.css";
import React from "react";
import { Link } from "react-router-dom";

const CTABanner = () => {
    return (
        <>
            <section id="cta-banner" className="pt-3 pb-3 ps-3 pe-3">
                <div className="cta-content container text-white text-center pt-5 pb-5">
                    <p className="cta-title mx-auto my-auto">Sewa Mobil di Bandung Sekarang</p>
                    <p className="cta-desc mx-auto my-auto p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link to="/cars">
                        <button className="btn btn-success btn-sm">Mulai Sewa Mobil</button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default CTABanner;
