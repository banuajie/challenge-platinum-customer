import "./index.css";
import React from "react";
import img_photo1 from "../../assets/images/img_photo1.png";
import img_photo2 from "../../assets/images/img_photo2.png";
import icon_rating from "../../assets/images/icon_rating.png";

const Testimony = () => {
    return (
        <>
            <section id="testimony" className="ps-3 pe-3 pt-5">
                <div className="container pt-3 pb-3">
                    <div className="row text-center">
                        <p className="testimony-title">Testimonial</p>
                        <p className="testimony-desc">Berbagai review positif dari para pelanggan kami</p>
                    </div>

                    <div className="row row-cols-1 row-cols-xl-3 g-4 g-xl-5">
                        <div className="col">
                            <div className="testimony-item-content row pt-3 pb-3">
                                <div className="col-3">
                                    <div className="row h-100 flex-column justify-content-center align-content-center">
                                        <img src={img_photo2} alt="Testimony Photo 2" className="w-auto" />
                                    </div>
                                </div>
                                <div className="col-9 align-self-center">
                                    <img src={icon_rating} alt="Rating" />
                                    <p>
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod”
                                    </p>
                                    <p>John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="testimony-item-content row pt-3 pb-3">
                                <div className="col-3">
                                    <div className="row h-100 flex-column justify-content-center align-content-center">
                                        <img src={img_photo1} alt="Testimony Photo 1" className="w-auto" />
                                    </div>
                                </div>
                                <div className="col-9 align-self-center">
                                    <img src={icon_rating} alt="Rating" />
                                    <p>
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod”
                                    </p>
                                    <p>John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="testimony-item-content row pt-3 pb-3">
                                <div className="col-3">
                                    <div className="row h-100 flex-column justify-content-center align-content-center">
                                        <img src={img_photo2} alt="Testimony Photo 2" className="w-auto" />
                                    </div>
                                </div>
                                <div className="col-9 align-self-center">
                                    <img src={icon_rating} alt="Rating" />
                                    <p>
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod”
                                    </p>
                                    <p>John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center gap-4 pt-3 pb-3">
                        <button className="button-prev"></button>
                        <button className="button-next"></button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimony;
