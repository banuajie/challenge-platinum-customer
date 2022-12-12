import "./index.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import img_bank_bca from "../../assets/images/img_bank_bca.png";
import img_bank_bni from "../../assets/images/img_bank_bni.png";
import img_bank_mandiri from "../../assets/images/img_bank_mandiri.png";
import icon_checklist from "../../assets/images/icon_checklist.png";
import icon_users from "../../assets/images/icon_users.png";
import img_back from "../../assets/images/img_back.png";
import icon_step_line from "../../assets/images/icon_step_line.svg";
import icon_step_1_blue from "../../assets/images/icon_step_1_blue.svg";
import icon_step_2_white from "../../assets/images/icon_step_2_white.svg";
import icon_step_3_white from "../../assets/images/icon_step_3_white.svg";

const MethodDetail = () => {
    const { carDetailResult } = useSelector((state) => state.CarReducer);
    const getSessionCarDetail = JSON.parse(window.sessionStorage.getItem("SessionCarDetail"));

    const navigate = useNavigate();

    const [bca, setBca] = useState(false);
    const [bni, setBni] = useState(false);
    const [mandiri, setMandiri] = useState(false);
    const [selectBank, setSelectBank] = useState("");

    // collect days and month name
    const nameDay = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
    const nameMonth = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Novenber", "Desember"];
    const startMount = getSessionCarDetail.start_rent_at.slice("5", "7");
    const endMount = getSessionCarDetail.finish_rent_at.slice("5", "7");

    const startDate = getSessionCarDetail.start_rent_at.slice("8", "10");
    const startMonthString = nameMonth[startMount - 1];
    const startYear = getSessionCarDetail.start_rent_at.slice("0", "4");
    const endDate = getSessionCarDetail.finish_rent_at.slice("8", "10");
    const endMonthString = nameMonth[endMount - 1];
    const endYear = getSessionCarDetail.finish_rent_at.slice("0", "4");

    const combineStartDate = `${startYear}-${startMount}-${startDate}`;
    const combineEndDate = `${endYear}-${endMount}-${endDate}`;

    const today = new Date();
    const transactionDate = `${nameDay[today.getDay()]}, ${today.getDate()} ${nameMonth[today.getMonth()]} ${today.getFullYear()}`;
    const transactionTime = `${today.getHours()}:${today.getMinutes()}`;
    const limitDatePayment = `${nameDay[today.getDay() + 1]}, ${today.getDate() + 1} ${nameMonth[today.getMonth()]} ${today.getFullYear()}`;

    const handlerBayar = (event) => {
        event.preventDefault();

        const generatedOrderId = () => {
            return Date.now();
        };

        const setSessionSelectMethod = {
            order_id: generatedOrderId(),
            select_bank: selectBank,
            start_rent_at: combineStartDate,
            finish_rent_at: combineEndDate,
            transaction_date: transactionDate,
            transaction_time: transactionTime,
            limit_date_payment: limitDatePayment,
        };

        window.sessionStorage.setItem("SessionSelectMethod", JSON.stringify(setSessionSelectMethod));
        navigate("/payment");
    };

    return (
        <>
            <section id="method-detail" className="pb-5">
                <div className="top-rectangle-method container-fluid">
                    <div className="top-content container h-100">
                        <div className="row h-50 align-items-center">
                            <div className="col-7">
                                <span
                                    className="text-back fs-5 fw-bold"
                                    onClick={() => {
                                        navigate(`/cars/${carDetailResult.id}`);
                                    }}
                                >
                                    <img src={img_back} alt="Back" /> {"  "} Pembayaran
                                </span>
                            </div>
                            <div className="col-5">
                                <div className="row justify-content-end">
                                    <div className="col-auto">
                                        <img src={icon_step_1_blue} alt="Step 1" /> {"  "}
                                        <span className="my-auto ms-1">Pilih Metode</span> {"  "}
                                        <img src={icon_step_line} alt="Line" className="ms-3" />
                                    </div>

                                    <div className="col-auto">
                                        <img src={icon_step_2_white} alt="Step 2" /> {"  "}
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
                    </div>
                </div>

                <div className="form-content container">
                    <form className="form-order-detail bg-light ps-4 pe-3 pt-3 shadow-sm">
                        <div className="row">
                            <p className="fs-5 fw-bold">Detail Pesananmu</p>
                        </div>

                        <div className="row">
                            <div className="col mb-3">
                                <label className="form-label">Nama/Tipe Mobil</label>
                                <p className="text-secondary">{carDetailResult.name}</p>
                            </div>
                            <div className="col mb-3">
                                <label className="form-label">Kategori</label>
                                <p className="text-secondary">{carDetailResult.category}</p>
                            </div>
                            <div className="col mb-3">
                                <label className="form-label">Tanggal Mulai Sewa</label>
                                <p className="text-secondary">
                                    {startDate} {startMonthString} {startYear}
                                </p>
                            </div>
                            <div className="col mb-3">
                                <label className="form-label">Tanggal Akhir Sewa</label>
                                <p className="text-secondary">
                                    {endDate} {endMonthString} {endYear}
                                </p>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="container pt-4">
                    <div className="row">
                        <div className="col-7">
                            <form className="form-select-bank bg-light ps-3 pe-3 pt-3 pb-3 shadow-sm">
                                <p className="fs-5 fw-bold">Pilih Bank Transfer</p>
                                <p className="fs-6">Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
                                <div
                                    className="row pt-2 pb-2"
                                    onClick={() => {
                                        setBca(true);
                                        setBni(false);
                                        setMandiri(false);
                                        setSelectBank("BCA Transfer");
                                    }}
                                >
                                    <div className="col-11">
                                        <img src={img_bank_bca} alt="Bank BCA" /> {"  "}
                                        <span>BCA Transfer</span>
                                    </div>
                                    <div className="col-1">{bca && <img src={icon_checklist} alt="Checklist" />}</div>
                                </div>

                                <hr />

                                <div
                                    className="row pt-2 pb-2"
                                    onClick={() => {
                                        setBni(true);
                                        setBca(false);
                                        setMandiri(false);
                                        setSelectBank("BNI Transfer");
                                    }}
                                >
                                    <div className="col-11">
                                        <img src={img_bank_bni} alt="Bank BNI" /> {"  "}
                                        <span>BNI Transfer</span>
                                    </div>
                                    <div className="col-1">{bni && <img src={icon_checklist} alt="Checklist" />}</div>
                                </div>

                                <hr />

                                <div
                                    className="row pt-2 pb-2"
                                    onClick={() => {
                                        setMandiri(true);
                                        setBni(false);
                                        setBca(false);
                                        setSelectBank("Mandiri Transfer");
                                    }}
                                >
                                    <div className="col-11">
                                        <img src={img_bank_mandiri} alt="Bank Mandiri" /> {"  "}
                                        <span>Mandiri Transfer</span>
                                    </div>
                                    <div className="col-1">{mandiri && <img src={icon_checklist} alt="Checklist" />}</div>
                                </div>
                            </form>
                        </div>

                        <div className="col-5">
                            <form className="form-detail-payment bg-light ps-3 pe-3 pt-3 pb-3 shadow-sm">
                                <div className="row">
                                    <p className="fs-5 fw-bold">{carDetailResult.name}</p>
                                </div>

                                <div className="row">
                                    <p className="fs-6 text-secondary">
                                        <img src={icon_users} alt="Category" /> {"  "} {carDetailResult.category}
                                    </p>
                                </div>

                                <div className="row pb-3">
                                    <div className="accordion accordion-flush">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    Total
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    <p className="fs-5 fw-bold">Harga</p>
                                                    <ul>
                                                        <div className="row justify-content-between">
                                                            <div className="col-8">
                                                                <li>
                                                                    Sewa Mobil Rp {carDetailResult.price} x {getSessionCarDetail.number_of_days} Hari
                                                                </li>
                                                            </div>
                                                            <span className="col-4 text-end">Rp {getSessionCarDetail.total_price}</span>
                                                        </div>
                                                    </ul>

                                                    <p className="fs-5 fw-bold">Biaya Lainnya</p>
                                                    <ul>
                                                        <div className="row justify-content-between">
                                                            <div className="col">
                                                                <li>Pajak</li>
                                                            </div>
                                                            <span className="col text-end text-success">Termasuk</span>
                                                        </div>
                                                        <div className="row justify-content-between">
                                                            <div className="col">
                                                                <li>Biaya makan sopir</li>
                                                            </div>
                                                            <span className="col text-end text-success">Termasuk</span>
                                                        </div>
                                                    </ul>

                                                    <p className="fs-5 fw-bold">Belum Termasuk</p>
                                                    <ul>
                                                        <li>Bensin</li>
                                                        <li>Tol dan parkir</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr />

                                <div className="row">
                                    <div className="col fs-5 fw-bold">Total</div>
                                    <div className="col fs-5 fw-bold text-end">Rp {getSessionCarDetail.total_price}</div>
                                </div>

                                <div className="row p-3">
                                    <div className="col">
                                        <button type="submit" className="btn btn-success w-100" onClick={(event) => handlerBayar(event)} disabled={selectBank === "" ? true : false}>
                                            Bayar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MethodDetail;
