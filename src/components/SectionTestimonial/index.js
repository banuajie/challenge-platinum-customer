import React from "react";

import "./index.css";
import bg_testimony from "../../assets/images/bg_testimony.png";
import icon_rating from "../../assets/images/icon_rating.png";
import img_photo1 from "../../assets/images/img_photo1.png";
import img_photo2 from "../../assets/images/img_photo2.png";

const SectionTestimonial = () => {
    return (
        <>
            <div id="testimony">
                <br />
                <div className="container mt-5">
                    {/* Testimony Title */}
                    <div className="row text-center">
                        <div className="col-12">
                            <p className="testimonyTitle">Testimonial</p>
                        </div>
                    </div>
                    {/* Akhir Testimony Title */}

                    {/* Testimony Desc */}
                    <div className="row text-center">
                        <div className="col-12">
                            <p className="testimonyDesc">Berbagai review positif dari para pelanggan kami</p>
                        </div>
                    </div>
                    {/* Akhir Testimony Desc */}

                    {/* Testimony Carousel */}
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="2000">
                                        <img src={bg_testimony} className="d-block w-100" alt="Gambar 1" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-lg-2">
                                                        <img src={img_photo1} alt="Gambar 1" />
                                                    </div>
                                                    <div className="col-lg-10 testimonyContent">
                                                        <img src={icon_rating} alt="Gambar 1" />
                                                        <h5>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet
                                                            consectetur adipiscing elit, sed do eiusmod.
                                                        </h5>
                                                        <p>John Dee 32, Bromo</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src={bg_testimony} className="d-block w-100" alt="Gambar 2" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-lg-2">
                                                        <img src={img_photo2} alt="Gambar 2" />
                                                    </div>
                                                    <div className="col-lg-10 testimonyContent">
                                                        <img src={icon_rating} alt="Gambar 2" />
                                                        <h5>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet
                                                            consectetur adipiscing elit, sed do eiusmod.
                                                        </h5>
                                                        <p>John Dee 32, Bromo</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src={bg_testimony} className="d-block w-100" alt="Gambar 3" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-lg-2">
                                                        <img src={img_photo1} alt="Gambar 3" />
                                                    </div>
                                                    <div className="col-lg-10 testimonyContent">
                                                        <img src={icon_rating} alt="Gambar 3" />
                                                        <h5>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet
                                                            consectetur adipiscing elit, sed do eiusmod.
                                                        </h5>
                                                        <p>John Dee 32, Bromo</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Akhir Testimony Carousel */}
                </div>
            </div>
        </>
    );
};

export default SectionTestimonial;
