import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const SectionCTABanner = () => {
    return (
        <>
            <div id="cTABanner">
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="card text-center">
                                <div className="cardBody card-body">
                                    <p className="cardBodyTitle card-title mb-5">Sewa Mobil di (Lokasimu) Sekarang</p>
                                    <p className="cardBodyDesc card-text mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <Link to="/car">
                                        <button type="button" className="btn btn-success">
                                            Mulai Sewa Mobil
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionCTABanner;
