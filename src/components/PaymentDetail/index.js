import "./index.css";
import React, { useEffect, useState } from "react";
import img_back from "../../assets/images/img_back.png";
import icon_step_line from "../../assets/images/icon_step_line.svg";
import icon_step_checklist from "../../assets/images/icon_step_checklist.svg";
import icon_step_2_blue from "../../assets/images/icon_step_2_blue.svg";
import icon_step_3_white from "../../assets/images/icon_step_3_white.svg";
import img_bank_bca from "../../assets/images/img_bank_bca.png";
import img_bank_bni from "../../assets/images/img_bank_bni.png";
import img_bank_mandiri from "../../assets/images/img_bank_mandiri.png";
import icon_copy from "../../assets/images/icon_copy.png";

import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const PaymentDetail = () => {
    const navigate = useNavigate();
    const { carDetailResult } = useSelector((state) => state.CarReducer);
    const getSessionCarDetail = JSON.parse(window.sessionStorage.getItem("SessionCarDetail"));
    const getSessionSelectMethod = JSON.parse(window.sessionStorage.getItem("SessionSelectMethod"));

    const [tabPayment, setTabPayment] = useState("");
    const [hours, setHours] = useState(23);
    const [minutes, setMinutes] = useState(59);
    const [seconds, setSeconds] = useState(59);

    useEffect(() => {
        setTimeout(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                setSeconds(59);
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                } else {
                    setMinutes(59);
                    if (hours > 0) {
                        setHours(hours - 1);
                    } else {
                        setHours(0);
                        setMinutes(0);
                        setSeconds(0);
                    }
                }
            }
        }, 1000);
    }, [seconds, minutes, hours]);

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

                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <div className="row pt-5">
                                <form className="form-payment-time-limit bg-light ps-3 pe-3 pt-3 pb-3 shadow-sm">
                                    <div className="row">
                                        <div className="col">
                                            <p className="fs-5 fw-bold">Selesaikan Pembayaran Sebelum</p>
                                            <p className="my-auto">
                                                {getSessionSelectMethod.limit_date_payment} jam {getSessionSelectMethod.transaction_time} WIB
                                            </p>
                                        </div>

                                        <div className="col align-self-center text-end">
                                            <span className="text-time">
                                                {hours < 10 ? "0" : ""}
                                                {hours}
                                            </span>
                                            <span className="separator"> : </span>
                                            <span className="text-time">
                                                {minutes < 10 ? "0" : ""}
                                                {minutes}
                                            </span>
                                            <span className="separator"> : </span>
                                            <span className="text-time">
                                                {seconds < 10 ? "0" : ""}
                                                {seconds}
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="row pt-4">
                                <form className="form-payment-time-limit bg-light ps-3 pe-3 pt-3 pb-3 shadow-sm">
                                    <div className="row">
                                        <div className="col">
                                            <div className="row">
                                                <div className="col">
                                                    <p className="fs-5 fw-bold">Lakukan Transfer Ke</p>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-auto">
                                                    <img
                                                        src={getSessionSelectMethod.select_bank === "BCA Transfer" ? img_bank_bca : getSessionSelectMethod.select_bank === "BNI Transfer" ? img_bank_bni : img_bank_mandiri}
                                                        alt="Bank Ttansfer"
                                                    />{" "}
                                                </div>
                                                <div className="col-10">
                                                    <span>{getSessionSelectMethod.select_bank}</span>
                                                    <p className="my-auto">a.n Binar Car Rental</p>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="mb-3">
                                                    <div className="row">
                                                        <label className="form-label">Nomor Rekening</label>
                                                    </div>
                                                    <div className="box-rekening-number row">
                                                        <div className="col">
                                                            <span>54104257877</span>
                                                        </div>
                                                        <div className="col text-end align-content-center">
                                                            <img src={icon_copy} alt="Copy Text" className="icon-copy" onClick={() => navigator.clipboard.writeText("54104257877")} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="row">
                                                        <label className="form-label">Total Bayar</label>
                                                    </div>
                                                    <div className="box-total-payment row">
                                                        <div className="col">
                                                            <span className="fw-bold">Rp {getSessionCarDetail.total_price}</span>
                                                        </div>
                                                        <div className="col text-end align-content-center">
                                                            <img src={icon_copy} alt="Copy Text" className="icon-copy" onClick={() => navigator.clipboard.writeText(getSessionCarDetail.total_price)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="row pt-4">
                                <form className="form-payment-time-limit bg-light ps-3 pe-3 pt-3 pb-3 shadow-sm">
                                    <div className="row">
                                        <div className="col">
                                            {/* Content Form Start */}
                                            <div className="row">
                                                <div className="col">
                                                    <p className="fs-5 fw-bold">Intruksi Pembayaran</p>
                                                </div>
                                            </div>

                                            <div className="row text-center">
                                                <div
                                                    className="tab-atm col"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => {
                                                        setTabPayment("ATM");
                                                    }}
                                                >
                                                    <p style={tabPayment === "ATM" ? { fontWeight: "bold" } : { fontWeight: "normal" }}>
                                                        {getSessionSelectMethod.select_bank === "BCA Transfer" ? "ATM BCA" : getSessionSelectMethod.select_bank === "BNI Transfer" ? "ATM BNI" : "ATM Mandiri"}
                                                    </p>
                                                    <hr style={tabPayment === "ATM" ? { color: "green" } : { color: "lightgrey" }} />
                                                </div>

                                                <div
                                                    className="tab-mobile-banking col"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => {
                                                        setTabPayment("Mobile Banking");
                                                    }}
                                                >
                                                    <p style={tabPayment === "Mobile Banking" ? { fontWeight: "bold" } : { fontWeight: "normal" }}>
                                                        {getSessionSelectMethod.select_bank === "BCA Transfer" ? "M-BCA" : getSessionSelectMethod.select_bank === "BNI Transfer" ? "M-BNI" : "M-Mandiri"}
                                                    </p>
                                                    <hr style={tabPayment === "Mobile Banking" ? { color: "green" } : { color: "lightgrey" }} />
                                                </div>

                                                <div
                                                    className="tab-bank-klik col"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => {
                                                        setTabPayment("Banking Klik");
                                                    }}
                                                >
                                                    <p style={tabPayment === "Banking Klik" ? { fontWeight: "bold" } : { fontWeight: "normal" }}>
                                                        {getSessionSelectMethod.select_bank === "BCA Transfer" ? "BCA Klik" : getSessionSelectMethod.select_bank === "BNI Transfer" ? "BNI Klik" : "Mandiri Klik"}
                                                    </p>
                                                    <hr style={tabPayment === "Banking Klik" ? { color: "green" } : { color: "lightgrey" }} />
                                                </div>

                                                <div
                                                    className="tab-internet-banking col"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => {
                                                        setTabPayment("Internet Banking");
                                                    }}
                                                >
                                                    <p style={tabPayment === "Internet Banking" ? { fontWeight: "bold" } : { fontWeight: "normal" }}>
                                                        {getSessionSelectMethod.select_bank === "BCA Transfer" ? "Internet Banking" : getSessionSelectMethod.select_bank === "BNI Transfer" ? "Internet Banking" : "Internet Banking"}
                                                    </p>
                                                    <hr style={tabPayment === "Internet Banking" ? { color: "green" } : { color: "lightgrey" }} />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col">
                                                    <ul className="text-secondary">
                                                        <li>Masukkan kartu ATM, lalu PIN</li>
                                                        <li>
                                                            Pilih menu "Transaksi Lainnya" - "Transfer" - "Ke Rek{" "}
                                                            {getSessionSelectMethod.select_bank === "BCA Transfer" ? "BCA" : getSessionSelectMethod.select_bank === "BNI Transfer" ? "BNI" : "Mandiri"} Virtual Account"
                                                        </li>
                                                        <li>
                                                            Masukkan nomor {getSessionSelectMethod.select_bank === "BCA Transfer" ? "BCA" : getSessionSelectMethod.select_bank === "BNI Transfer" ? "BNI" : "Mandiri"} Virtual Account:
                                                            70020+Order ID
                                                            <br />
                                                            Contoh:
                                                            <br />
                                                            No. Peserta: 12345678, maka ditulis 7002012345678
                                                        </li>
                                                        <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                                                        <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* Content Form End */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-5"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PaymentDetail;
