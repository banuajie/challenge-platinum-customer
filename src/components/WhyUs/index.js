import "./index.css";
import React from "react";
import icon_complete from "../../assets/images/icon_complete.png";
import icon_price from "../../assets/images/icon_price.png";
import icon_24hrs from "../../assets/images/icon_24hrs.png";
import icon_professional from "../../assets/images/icon_professional.png";

const WhyUs = () => {
    return (
        <>
            <section id="why-us" className="pt-5">
                <div className="container pt-3 pb-3">
                    <div className="row">
                        <p className="why-us-title">Why Us?</p>
                        <p className="why-us-desc">Mengapa harus pilih Binar Car Rental?</p>
                    </div>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <img src={icon_complete} alt="Icon Complete" className="mb-3" />
                                    <p className="why-us-item-title card-title">Mobil Lengkap</p>
                                    <p className="why-us-item-desc card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <img src={icon_price} alt="Icon Price" className="mb-3" />
                                    <p className="why-us-item-title card-title">Harga Murah</p>
                                    <p className="why-us-item-desc card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <img src={icon_24hrs} alt="Icon 24hrs" className="mb-3" />
                                    <p className="why-us-item-title card-title">Layanan 24 Jam</p>
                                    <p className="why-us-item-desc card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <img src={icon_professional} alt="Icon Profesional" className="mb-3" />
                                    <p className="why-us-item-title card-title">Sopir Profesional</p>
                                    <p className="why-us-item-desc card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyUs;
