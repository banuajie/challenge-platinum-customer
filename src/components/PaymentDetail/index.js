import "./index.css";
import React from "react";
import img_back from "../../assets/images/img_back.png";
import icon_step_line from "../../assets/images/icon_step_line.svg";
import icon_step_checklist from "../../assets/images/icon_step_checklist.svg";
import icon_step_2_blue from "../../assets/images/icon_step_2_blue.svg";
import icon_step_3_white from "../../assets/images/icon_step_3_white.svg";

import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const PaymentDetail = () => {
    const navigate = useNavigate();
    const { carDetailResult } = useSelector((state) => state.CarReducer);
    const getSessionCarDetail = JSON.parse(window.sessionStorage.getItem("SessionCarDetail"));
    const getSessionSelectMethod = JSON.parse(window.sessionStorage.getItem("SessionSelectMethod"));

    return (
        <>
            <section id="payment-detail">
                <div className="top-rectangle-payment container-fluid">
                    <div className="top-content container h-100">
                        <div className="row h-75 align-items-center">
                            <div className="col-7">
                                <span
                                    className="text-back fs-5 fw-bold"
                                    onClick={() => {
                                        navigate(`/select-method`);
                                    }}
                                >
                                    <img src={img_back} alt="Back" /> {"  "} {getSessionSelectMethod.select_bank}
                                </span>
                            </div>
                            <div className="col-5">
                                <div className="row justify-content-end">
                                    <div className="col-auto">
                                        <img src={icon_step_checklist} alt="Step 1" /> {"  "}
                                        <span className="my-auto ms-1">Pilih Metode</span> {"  "}
                                        <img src={icon_step_line} alt="Line" className="ms-3" />
                                    </div>

                                    <div className="col-auto">
                                        <img src={icon_step_2_blue} alt="Step 2" /> {"  "}
                                        <span className="my-auto ms-1">Bayar</span> {"  "}
                                        <img src={icon_step_line} alt="Line" className="ms-3" />
                                    </div>

                                    <div className="col-auto">
                                        <img src={icon_step_3_white} alt="Step 3" /> {"  "}
                                        <span className="my-auto ms-1">Tiket</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-order-id row">
                            <div className="col">
                                <span className="text-order-id">Order ID : {getSessionSelectMethod.order_id}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PaymentDetail;
