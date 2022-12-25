import "./index.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import img_back from "../../assets/images/img_back.png";
import icon_step_line from "../../assets/images/icon_step_line.svg";
import icon_step_checklist from "../../assets/images/icon_step_checklist.svg";
import icon_step_3_blue from "../../assets/images/icon_step_3_blue.svg";
import icon_success from "../../assets/images/icon_success.png";
import icon_download from "../../assets/images/icon_download.png";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../actions/orderAction";

const Invoice = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { getOrderResult } = useSelector((state) => state.OrderReducer);
    const [updateOrder, setUpdateOrder] = useState({});

    useEffect(() => {
        setUpdateOrder(getOrderResult);
    }, [getOrderResult]);

    useEffect(() => {
        dispatch(getOrder());
    }, [dispatch]);

    return (
        <>
            <section id="ticket">
                <div className="top-rectangle-payment container-fluid">
                    <div className="top-content container h-100">
                        <div className="row h-75 align-items-center">
                            <div className="col-7">
                                <span
                                    className="text-back fs-5 fw-bold"
                                    onClick={() => {
                                        navigate(`/payment`);
                                    }}
                                >
                                    <img src={img_back} alt="Back" /> {"  "} Tiket
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
                                        <img src={icon_step_checklist} alt="Step 2" /> {"  "}
                                        <span className="my-auto ms-1">Bayar</span> {"  "}
                                        <img src={icon_step_line} alt="Line" className="ms-3" />
                                    </div>

                                    <div className="col-auto">
                                        <img src={icon_step_3_blue} alt="Step 3" /> {"  "}
                                        <span className="my-auto ms-1">Tiket</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row-order-id row">
                            <div className="col">
                                <span className="text-order-id">Order ID : {updateOrder.id}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col text-center pt-5 pb-5">
                            <img src={icon_success} alt="Success" />
                            <p className="ticket-title">Pembayaran Berhasil!</p>
                            <p className="ticket-desc">Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form className="form-invoice p-3 shadow-sm w-50 mx-auto">
                                <div className="row">
                                    <div className="col align-self-center">
                                        <p className="text-invoice my-auto">Invoice</p>
                                    </div>

                                    <div className="col text-end">
                                        <button className="button-download">
                                            <div className="row">
                                                <div className="col w-auto">
                                                    <img src={icon_download} alt="Download" className="my-2" />
                                                </div>
                                                <div className="col align-self-center w-auto ps-0">
                                                    <span className="text-download my-auto">Unduh</span>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            ;
        </>
    );
};

export default Invoice;
