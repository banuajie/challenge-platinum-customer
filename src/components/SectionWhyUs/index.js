import React from "react";
import "./index.css";

import icon_complete from "../../assets/images/icon_complete.png";
import icon_price from "../../assets/images/icon_price.png";
import icon_24hrs from "../../assets/images/icon_24hrs.png";
import icon_professional from "../../assets/images/icon_professional.png";

const SectionWhyUs = () => {
    return (
        <>
            <div id="whyUs">
                <br />
                <div className="container mt-5">
                    {/* Why Us Title */}
                    <div className="row">
                        <div className="col col-12">
                            <p className="whyUsTitle">Why Us?</p>
                        </div>
                    </div>
                    {/* Akhir Why Us Title*/}

                    {/* Why Us Description */}
                    <div className="row">
                        <div className="col col-12">
                            <p className="whyUsDesc">Mengapa harus pilih Binar Car Rental?</p>
                        </div>
                    </div>
                    {/* Akhir Why Us Description */}

                    {/* Why Us Card */}
                    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img src={icon_complete} className="card-img-top" alt="Mobil Lengkap" />
                                <div className="card-body">
                                    <h5 className="card-title">Mobil Lengkap</h5>
                                    <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={icon_price} className="card-img-top" alt="Harga Murah" />
                                <div className="card-body">
                                    <h5 className="card-title">Harga Murah</h5>
                                    <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={icon_24hrs} className="card-img-top" alt="Layanan 24 Jam" />
                                <div className="card-body">
                                    <h5 className="card-title">Layanan 24 Jam</h5>
                                    <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={icon_professional} className="card-img-top" alt="Sopir Profesional" />
                                <div className="card-body">
                                    <h5 className="card-title">Sopir Profesional</h5>
                                    <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Akhir Why Us Card */}
                </div>
            </div>
        </>
    );
};

export default SectionWhyUs;
