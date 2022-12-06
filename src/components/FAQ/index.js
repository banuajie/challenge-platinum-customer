import "./index.css";
import React from "react";

const FAQ = () => {
    return (
        <>
            <section id="faq" className="pt-3 pb-3 pt-5">
                <div className="container pt-3">
                    <div className="row">
                        <div className="col col-12 col-md-5">
                            <p className="faq-title">Frequently Asked Question</p>
                            <p className="faq-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>

                        <div className="col col-12 col-md-7">
                            <select className="form-select my-2" aria-label="Default select example">
                                <option>Apa saja syarat yang dibutuhkan?</option>
                                <option>Lorem ipsum dolor sit amet consectetur adipisicing elit.</option>
                            </select>

                            <select className="form-select my-2" aria-label="Default select example">
                                <option>Berapa hari minimal sewa mobil lepas kunci?</option>
                                <option>Lorem ipsum dolor sit amet consectetur adipisicing elit.</option>
                            </select>

                            <select className="form-select my-2" aria-label="Default select example">
                                <option>Berapa hari sebelumnya sabaiknya booking sewa mobil?</option>
                                <option>Lorem ipsum dolor sit amet consectetur adipisicing elit.</option>
                            </select>

                            <select className="form-select my-2" aria-label="Default select example">
                                <option>Apakah Ada biaya antar-jemput?</option>
                                <option>Lorem ipsum dolor sit amet consectetur adipisicing elit.</option>
                            </select>

                            <select className="form-select my-2" aria-label="Default select example">
                                <option>Bagaimana jika terjadi kecelakaan</option>
                                <option>Lorem ipsum dolor sit amet consectetur adipisicing elit.</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;
