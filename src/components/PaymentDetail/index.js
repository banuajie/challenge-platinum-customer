/* eslint-disable react/no-unescaped-entities */
import "./index.css";
import DropFile from "../DropFile";
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
import { useDispatch, useSelector } from "react-redux";
import { addOrder, updateOrder } from "../../actions/orderAction";

const PaymentDetail = () => {
    const navigate = useNavigate();
    const { carDetailResult } = useSelector((state) => state.CarReducer);

    const dispatch = useDispatch();
    const getSessionCarDetail = JSON.parse(window.sessionStorage.getItem("SessionCarDetail"));
    const getSessionSelectMethod = JSON.parse(window.sessionStorage.getItem("SessionSelectMethod"));

    const [image, setImage] = useState(null);
    const [tabPayment, setTabPayment] = useState("");
    const [stepConfirm, setStepConfirm] = useState("Payment Confirmation");
    const [hours, setHours] = useState(23);
    const [minutes, setMinutes] = useState(59);
    const [seconds, setSeconds] = useState(59);
    const [minutesDeadline, setMinutesDeadline] = useState(0);
    const [secondsDeadline, setSecondsDeadline] = useState(0);

    // Payment Deadline
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

    // Confirm Deadline
    useEffect(() => {
        setTimeout(() => {
            if (secondsDeadline > 0) {
                setSecondsDeadline(secondsDeadline - 1);
            } else {
                setSecondsDeadline(59);
                if (minutesDeadline > 0) {
                    setMinutesDeadline(minutesDeadline - 1);
                } else {
                    setMinutesDeadline(0);
                    setSecondsDeadline(0);
                }
            }
        }, 1000);
    }, [secondsDeadline, minutesDeadline]);

    const handleKonfirmasiPembayaran = (event) => {
        event.preventDefault();

        setStepConfirm("Upload Slip");
        setMinutesDeadline(9);
        setSecondsDeadline(59);

        dispatch(addOrder({ start_rent_at: getSessionSelectMethod.start_rent_at, finish_rent_at: getSessionSelectMethod.finish_rent_at, car_id: carDetailResult.id }));
    };

    const uploadSlip = (event) => {
        event.preventDefault();

        dispatch(updateOrder({ slip: image }));
        navigate("/ticket");
        window.location.reload();
    };

    return (
        <>
            <section id="payment-detail" className="mb-5">
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
                    <div className="row g-5">
                        {/* Start Content Left */}
                        <div className="col-7">
                            {/* Start Form Selesaikan Pembayaran Sebelum */}
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
                            {/* End Form Selesaikan Pembayaran Sebelum */}

                            {/* Start Form Lakukan Transfer Ke */}
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
                                                            <span className="fw-bold">Rp {new Intl.NumberFormat("id-ID").format(getSessionCarDetail.total_price)}</span>
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
                            {/* End Form Lakukan Transfer Ke */}

                            {/* Start Form Intruksi Pembayaran */}
                            <div className="row pt-4">
                                <form className="form-payment-time-limit bg-light ps-3 pe-3 pt-3 pb-3 shadow-sm">
                                    <div className="row">
                                        <div className="col">
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
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* End Form Intruksi Pembayaran */}
                        </div>
                        {/* End Content Left */}

                        {/* Start Content Right */}
                        <div className="col-5">
                            <div className="row pt-5">
                                <form className="form-payment-confirmation bg-light ps-3 pe-3 pt-3 pb-3 shadow-sm">
                                    {/* Start Payment Confirmation */}
                                    {stepConfirm === "Payment Confirmation" && (
                                        <div className="container">
                                            <div className="row mb-5">
                                                <p className="desc-payment-confirmation my-auto">Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
                                            </div>

                                            <div className="row">
                                                <button className="btn btn-success" onClick={(event) => handleKonfirmasiPembayaran(event)}>
                                                    Konfirmasi Pembayaran
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    {/* End Payment Confirmation */}

                                    {/* Start Upload Slip */}
                                    {stepConfirm === "Upload Slip" && (
                                        <div className="container">
                                            <div className="row">
                                                <div className="col">
                                                    <p className="fs-5 fw-bold">Konfirmasi Pembayaran</p>
                                                </div>

                                                <div className="col align-self-center text-end">
                                                    <span className="text-time">
                                                        {minutesDeadline < 10 ? "0" : ""}
                                                        {minutesDeadline}
                                                    </span>
                                                    <span className="separator"> : </span>
                                                    <span className="text-time">
                                                        {secondsDeadline < 10 ? "0" : ""}
                                                        {secondsDeadline}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col">
                                                    <p className="desc-payment-confirmation">
                                                        Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.
                                                    </p>
                                                    <p className="title-upload-payment">Upload Bukti Pembayaran</p>
                                                    <p className="desc-upload-payment">Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</p>
                                                </div>
                                            </div>

                                            <div className="row pb-2">
                                                <div className="col">
                                                    <DropFile setImage={setImage} />
                                                    {image ? (
                                                        <div className="row">
                                                            <div className="col">
                                                                <button className="btn btn-success w-100" onClick={(event) => uploadSlip(event)} disabled={hours === 0 && minutes === 0 && seconds === 0 ? true : false}>
                                                                    Konfirmasi
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="row">
                                                            <div className="col">
                                                                <button className="btn btn-success w-100" disabled>
                                                                    Upload
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {/* End Upload Slip */}
                                </form>
                            </div>
                        </div>
                        {/* End Content Right */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PaymentDetail;
