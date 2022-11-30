import React from "react";

import "./index.css";
import img_service from "../../assets/images/img_service.png";

const SectionOurServices = () => {
    return (
        <>
            <div id="ourServices">
                <br />
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        {/* Our Services Image */}
                        <div className="col-lg-5 col-md-12 col-sm-12 justify-content-center">
                            <img className="ourServicesImage" src={img_service} />
                        </div>
                        {/* Akhir Our Services Image */}

                        {/* Our Services Content */}
                        <div className="col-lg-5 col-md-12 col-sm-12 justify-content-center">
                            <div className="row mb-3 mt-5">
                                <div className="col">
                                    <p className="ourServicesTitle">Best Car Rental for any kind of trip in (Lokasimu)!</p>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <p className="ourServicesDesc">
                                        Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
                                        meeting, dll.
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <ul className="ourServicesList">
                                        <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                                        <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                                        <li>Sewa Mobil Jangka Panjang Bulanan</li>
                                        <li>Gratis Antar - Jemput Mobil di Bandara</li>
                                        <li>Layanan Airport Transfer / Drop In Out</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Akhir Our Services Content */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionOurServices;
