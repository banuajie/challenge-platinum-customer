import React from "react";

import "./index.css";

const SectionFAQ = () => {
    return (
        <>
            <div id="fAQ">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            {/* FAQ Title */}
                            <div className="row">
                                <div className="col">
                                    <p className="fAQTitle">Frequently Asked Question</p>
                                </div>
                            </div>
                            {/* Akhir FAQ Title */}

                            {/* FAQ Description */}
                            <div className="row">
                                <div className="col">
                                    <p className="fAQDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </div>
                            {/* Akhir FAQ Description */}
                        </div>

                        {/* FAQ */}
                        <div className="col-lg-7 col-md-7 col-sm-12 mb-5">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Apa saja syarat yang dibutuhkan?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam non nulla commodi cum quos delectus atque, odit unde, sit optio molestias reiciendis reprehenderit, rem eaque
                                            inventore quisquam aliquid harum.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Berapa hari minimal sewa mobil lepas kunci?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam non nulla commodi cum quos delectus atque, odit unde, sit optio molestias reiciendis reprehenderit, rem eaque
                                            inventore quisquam aliquid harum.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam non nulla commodi cum quos delectus atque, odit unde, sit optio molestias reiciendis reprehenderit, rem eaque
                                            inventore quisquam aliquid harum.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            Apakah Ada biaya antar-jemput?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam non nulla commodi cum quos delectus atque, odit unde, sit optio molestias reiciendis reprehenderit, rem eaque
                                            inventore quisquam aliquid harum.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                            Bagaimana jika terjadi kecelakaan
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam non nulla commodi cum quos delectus atque, odit unde, sit optio molestias reiciendis reprehenderit, rem eaque
                                            inventore quisquam aliquid harum.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Akhir FAQ */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionFAQ;
