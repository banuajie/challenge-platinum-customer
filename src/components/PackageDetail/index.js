import "./index.css";
import React from "react";
import { useSelector } from "react-redux";
import { DateRange } from "react-date-range";
import icon_user from "../../assets/images/icon_users.png";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const PackageDetail = () => {
    const { carDetailResult } = useSelector((state) => state.CarReducer);

    return (
        <>
            <section id="package-detail">
                <div className="top-rectangle container-fluid"></div>

                <div className="form-content container">
                    <form className="form-package-detail bg-light ps-3 pe-3 pt-1 shadow-sm">
                        <div className="row">
                            <p className="fs-5 fw-bold">Pencarianmu</p>
                        </div>

                        <div className="row">
                            <div class="col mb-3">
                                <label class="form-label">Nama Mobil</label>
                                <input type="text" class="form-control" placeholder={carDetailResult.name} disabled />
                            </div>
                            <div class="col mb-3">
                                <label class="form-label">Category</label>
                                <input type="text" class="form-control" placeholder={carDetailResult.category} disabled />
                            </div>
                            <div class="col mb-3">
                                <label class="form-label">Harga Sewa per Hari</label>
                                <input type="text" class="form-control" placeholder={`Rp ${carDetailResult.price}`} disabled />
                            </div>
                            <div class="col mb-3">
                                <label class="form-label">Status</label>
                                <input type="text" class="form-control" placeholder="Tersedia" disabled />
                            </div>
                        </div>
                    </form>
                </div>

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

                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Refund, Reschedule, Overtime
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
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
                                        <DateRange
                                            className="card-detail__calender"
                                            startDatePlaceholder="Tanggal Awal Sewa"
                                            endDatePlaceholder="Tanggal Akhir Sewa"
                                            // onChange={(item) => setSelectionRange([item.selection])}
                                            retainEndDateOnFirstSelection={true}
                                            // ranges={selectionRange}
                                        />
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
