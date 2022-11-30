import React from "react";
import { Link } from "react-router-dom";

import "./index.css";
import img_car from "../../assets/images/img_car.png";

const SectionHero = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    {/* Jumbotroon Content */}
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="row mb-4 mt-5">
                            <div className="col-12">
                                <p className="jumbotroonTitle">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</p>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-12">
                                <p className="jumbotroonDesc">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-12">
                                {/* <Link to="/cari-mobil"> */}
                                <Link to="/car">
                                    <button type="button" className="btn btn-success btn-sm">
                                        Mulai Sewa Mobil
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Akhir Jumbotroon Content */}

                    {/* Jumbotroon Image */}
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="jumbotroonImage" src={img_car} />
                    </div>
                    {/* Akhir Jumbotroon Image */}
                </div>
            </div>
        </>
    );
};

export default SectionHero;
