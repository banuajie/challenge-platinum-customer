import "./index.css";
import React from "react";
import img_service from "../../assets/images/img_service.png";
import icon_list from "../../assets/images/icon_list.png";

const OurServices = () => {
    return (
        <>
            <section id="our-services" className="pt-5">
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="row justify-content-center">
                                <img src={img_service} alt="Image Our Services" className="w-75" />
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
                            <p className="our-services-title">Best Car Rental for any kind of trip in Bandung!</p>
                            <p className="our-services-desc">
                                Sewa mobil di Bandung bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                            </p>

                            <p className="services-list-item">
                                <img src={icon_list} alt="Icon List" />
                                Sewa Mobil Dengan Supir di Bali 12 Jam
                            </p>
                            <p className="services-list-item">
                                <img src={icon_list} alt="Icon List" />
                                Sewa Mobil Lepas Kunci di Bali 24 Jam
                            </p>
                            <p className="services-list-item">
                                <img src={icon_list} alt="Icon List" />
                                Sewa Mobil Jangka Panjang Bulanan
                            </p>
                            <p className="services-list-item">
                                <img src={icon_list} alt="Icon List" />
                                Gratis Antar - Jemput Mobil di Bandara
                            </p>
                            <p className="services-list-item">
                                <img src={icon_list} alt="Icon List" />
                                Layanan Airport Transfer / Drop In Out
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurServices;
