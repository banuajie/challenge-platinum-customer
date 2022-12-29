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
import jsPDF from "jspdf";
import img_invoice from "../../assets/images/img_invoice.png";

const Invoice = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { getOrderResult } = useSelector((state) => state.OrderReducer);
    const [updateOrder, setUpdateOrder] = useState({});

    useEffect(() => {
        dispatch(getOrder());
    }, [dispatch]);

    useEffect(() => {
        if (getOrderResult) {
            setUpdateOrder(getOrderResult);
        }
    }, [getOrderResult]);

    const handleDownload = (event) => {
        event.preventDefault();

        const doc = new jsPDF("landscape", "px", "a4", "false");

        doc.addImage(img_invoice, "PNG", 65, 20, 500, 400);
        doc.addPage();

        doc.setFontSize("36");
        doc.setFont("Arial", "bold");
        doc.text(130, 60, "INVOICE BINAR CAR RENTAL");
        doc.setFontSize("14");
        doc.text(180, 80, "Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000");
        doc.text(60, 100, "========================================================================================");

        doc.setFontSize("14");
        doc.text(60, 120, "ID Order");
        doc.text(160, 120, `: ${updateOrder.id}`);

        doc.text(60, 140, "Name Car");
        doc.text(160, 140, `: ${updateOrder.Car.name}`);

        doc.text(60, 160, "Email User");
        doc.text(160, 160, `: ${updateOrder.User.email}`);

        doc.text(60, 180, "Start Rent Date");
        doc.text(160, 180, `: ${updateOrder.start_rent_at.slice("8", "10")} / ${updateOrder.start_rent_at.slice("5", "7")} / ${updateOrder.start_rent_at.slice("0", "4")}`);

        doc.text(60, 200, "Finish Rent Date");
        doc.text(160, 200, `: ${updateOrder.finish_rent_at.slice("8", "10")} / ${updateOrder.finish_rent_at.slice("5", "7")} / ${updateOrder.finish_rent_at.slice("0", "4")}`);

        doc.text(60, 220, "Total Price");
        doc.text(160, 220, `: Rp ${new Intl.NumberFormat("id-ID").format(updateOrder.total_price)}`);

        doc.text(60, 240, "Status Pembayaran");
        doc.text(160, 240, ": LUNAS");

        doc.text(60, 260, "========================================================================================");
        doc.text(60, 280, `Kelompok : Nugraha Banuajie dan Virna Oktarina`);

        doc.save("invoice-binar-rental.pdf");
    };

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
                                        <button className="button-download" onClick={(event) => handleDownload(event)}>
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
