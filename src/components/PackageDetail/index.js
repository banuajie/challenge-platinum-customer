import "./index.css";

// main style file and theme css file for "DateRange"
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import icon_user from "../../assets/images/icon_users.png";

const PackageDetail = () => {
    const { carDetailResult } = useSelector((state) => state.CarReducer);
    const navigate = useNavigate();

    const [selectionRange, setSelectionRange] = useState([
        {
            startDate: null,
            endDate: null,
            key: "selection",
        },
    ]);
    const [numberOfDays, setNumberOfDays] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleDate = () => {
        setSelectionRange([
            {
                startDate: null,
                endDate: null,
                key: "selection",
            },
        ]);

        setTotalPrice(0);
        setNumberOfDays(0);
    };

    useEffect(() => {
        if (selectionRange[0].endDate && selectionRange[0].startDate) {
            // if you have chosen a date
            const totalDays = (selectionRange[0].endDate - selectionRange[0].startDate) / 86400000; // count number of days

            if (selectionRange[0].startDate < new Date()) {
                window.alert("Tanggal yang Anda pilih tidak sesuai!");
                handleDate();
            } else if (totalDays > 7) {
                // when user select more than 7 day will be reselect date
                handleDate();
                window.alert("Batas sewa maksimal 7 Hari");
            } else {
                // calculates number of days based on the selected date.
                setNumberOfDays(totalDays);
                // price result
                setTotalPrice(carDetailResult.price * numberOfDays);
            }
        }
    }, [selectionRange, numberOfDays, carDetailResult]);

    const handlePayment = (event) => {
        event.preventDefault();

        const setSessionCarDetail = {
            start_rent_at: selectionRange[0].startDate, // start date
            finish_rent_at: selectionRange[0].endDate, // end date
            number_of_days: numberOfDays, // number of days
            total_price: totalPrice, // total rental price
        };

        // save to session storage, "key" and "value"
        window.sessionStorage.setItem("SessionCarDetail", JSON.stringify(setSessionCarDetail));
        navigate("/select-method");
    };

    return (
        <>
            <section id="package-detail" className="pb-5">
                <div className="top-rectangle-package container-fluid"></div>

                <div className="form-content container">
                    <form className="form-package-detail bg-light ps-3 pe-3 pt-1 shadow-sm">
                        <div className="row">
                            <p className="fs-5 fw-bold">Pencarianmu</p>
                        </div>

                        <div className="row">
                            <div className="col mb-3">
                                <label className="form-label">Nama Mobil</label>
                                <input type="text" className="form-control" placeholder={carDetailResult.name} disabled />
                            </div>
                            <div className="col mb-3">
                                <label className="form-label">Category</label>
                                <input type="text" className="form-control" placeholder={carDetailResult.category} disabled />
                            </div>
                            <div className="col mb-3">
                                <label className="form-label">Harga Sewa per Hari</label>
                                <input type="text" className="form-control" placeholder={`Rp ${new Intl.NumberFormat("id-ID").format(carDetailResult.price)}`} disabled />
                            </div>
                            <div className="col mb-3">
                                <label className="form-label">Status</label>
                                <input type="text" className="form-control" placeholder="Tersedia" disabled />
                            </div>
                        </div>
                    </form>
                </div>

                {/*  */}

                <div className="container pt-4">
                    <div className="row">
                        <div className="col-7">
                            <form className="form-about-package bg-light ps-3 pe-3 pt-1 pb-3 shadow-sm">
                                <p className="fs-5 fw-bold">Tentang Paket</p>
                                <p className="fs-6 fw-bold">Include</p>
                                <ul className="text-secondary">
                                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                    <li>Sudah termasuk bensin selama 12 jam</li>
                                    <li>Sudah termasuk Tiket Wisata</li>
                                    <li>Sudah termasuk pajak</li>
                                </ul>

                                <p className="fs-6 fw-bold">Exclude</p>
                                <ul className="text-secondary">
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                </ul>

                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Refund, Reschedule, Overtime
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <ul className="text-secondary">
                                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                    <li>Tidak termasuk akomodasi penginapan</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-5">
                            <form className="form-select-date bg-light ps-3 pe-3 pt-3 pb-3 shadow-sm">
                                <div className="row p-3">
                                    <img src={carDetailResult.image} className="img-fluid" alt={carDetailResult.name} />
                                </div>
                                <div className="row ps-3 pe-3">
                                    <p className="fs-6 fw-bold my-auto">{carDetailResult.name}</p>
                                </div>
                                <div className="row ps-3 pe-3">
                                    <div className="col">
                                        <img src={icon_user} alt="Icon User" />
                                        <span className="category-info ps-2">{carDetailResult.category}</span>
                                        <p className="title-select-date my-auto">Tentukan lama sewa mobil (max. 7 hari)</p>
                                        <div className="d-flex justify-content-center">
                                            <DateRange
                                                className="card-detail-calender"
                                                startDatePlaceholder="Tanggal Awal Sewa"
                                                endDatePlaceholder="Tanggal Akhir Sewa"
                                                onChange={(item) => setSelectionRange([item.selection])}
                                                retainEndDateOnFirstSelection={true}
                                                ranges={selectionRange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-between p-3">
                                    <div className="col">
                                        <p className="fs-5 fw-bold text-start my-auto">Total</p>
                                    </div>
                                    <div className="col">
                                        <p className="fs-5 fw-bold text-end my-auto">Rp {new Intl.NumberFormat("id-ID").format(totalPrice)}</p>
                                    </div>
                                </div>
                                <div className="row p-3">
                                    <div className="col">
                                        <Link to="/select-method">
                                            <button type="submit" className="btn btn-success w-100" disabled={numberOfDays ? false : true} onClick={(event) => handlePayment(event)}>
                                                Lanjutkan Pembayaran
                                            </button>
                                        </Link>
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

export default PackageDetail;
