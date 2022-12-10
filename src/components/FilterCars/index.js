import "./index.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carDetail, filterCars, getAllCars } from "../../actions/carActions";
import { Link } from "react-router-dom";

const FilterCars = () => {
    const dispatch = useDispatch();
    const { getAllCarsLoading, getAllCarsResult, getAllCarsError, filterCarsLoading, filterCarsResult, filterCarsError } = useSelector((state) => state.CarReducer);

    const [unfilled, setUnfilled] = useState(true);
    const [filterName, setFilterName] = useState("");
    const [filterCategory, setFilterCategory] = useState("");
    const [filterPrice, setFilterPrice] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000000);
    const [saveFilter, setSaveFilter] = useState([]);

    useEffect(() => {
        // get all cars
        dispatch(getAllCars());
    }, [dispatch]);

    useEffect(() => {
        // set unfilled status to true or false
        if (filterName === "" && filterCategory === "" && filterPrice === "") {
            setUnfilled(true);
        } else {
            setUnfilled(false);
        }
    }, [filterName, filterCategory, filterPrice]);

    useEffect(() => {
        // refresh list when all input search unfilled
        setSaveFilter(getAllCarsResult);
    }, [unfilled, getAllCarsResult]);

    useEffect(() => {
        // save filter result on "saveFilter" state
        setSaveFilter(filterCarsResult.cars);
    }, [filterCarsResult]);

    useEffect(() => {
        // include data all car to save filter state
        setSaveFilter(getAllCarsResult);
    }, [getAllCarsResult]);

    const handlerSearch = (event) => {
        event.preventDefault();

        // filter cars by input data
        dispatch(filterCars({ name: filterName, category: filterCategory, minPrice: minPrice, maxPrice: maxPrice }));
    };

    return (
        <>
            <div id="filter-cars">
                <div className="container pb-3">
                    <div className="row ps-4 pe-4">
                        <div className="col">
                            <form className="filter-cars p-3 bg-light shadow">
                                <div className="row">
                                    <div className="col-12 col-lg mb-3">
                                        <label className="form-label">Nama Mobil</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Ketik nama/tipe mobil"
                                            name="filter-name"
                                            value={filterName}
                                            onChange={(event) => {
                                                setFilterName(event.target.value);
                                            }}
                                        />
                                    </div>

                                    <div className="col-12 col-lg mb-3">
                                        <label className="form-label">Kategori</label>
                                        <select
                                            className="form-select"
                                            name="filter-category"
                                            value={filterCategory}
                                            onChange={(event) => {
                                                setFilterCategory(event.target.value);
                                            }}
                                        >
                                            <option value="">Masukan Kapasitas Mobil</option>
                                            <option value="small">2 - 4 orang</option>
                                            <option value="medium">4 - 6 orang</option>
                                            <option value="large">6 - 8 orang</option>
                                        </select>
                                    </div>

                                    <div className="col-12 col-lg mb-3">
                                        <label className="form-label">Harga</label>
                                        <select
                                            className="form-select"
                                            name="filter-price"
                                            value={filterPrice}
                                            onChange={(event) => {
                                                setFilterPrice(event.target.value);
                                                if (event.target.value === "400000") {
                                                    setMinPrice(0);
                                                    setMaxPrice(400000);
                                                } else if (event.target.value === "400000-600000") {
                                                    setMinPrice(400000);
                                                    setMaxPrice(600000);
                                                } else if (event.target.value === "600000") {
                                                    setMinPrice(600000);
                                                    setMaxPrice(10000000);
                                                } else {
                                                    setMinPrice(0);
                                                    setMaxPrice(10000000);
                                                }
                                            }}
                                        >
                                            <option value="">Masukan Harga Sewa per Hari</option>
                                            <option value="400000">&#60; Rp. 400.000</option>
                                            <option value="400000-600000">Rp. 400.000 - Rp. 600.000</option>
                                            <option value="600000">&#62; Rp. 600.000</option>
                                        </select>
                                    </div>

                                    <div className="col-12 col-lg mb-3">
                                        <label className="form-label">Status</label>
                                        <select className="form-select" disabled>
                                            <option value="">Status Mobil</option>
                                        </select>
                                    </div>

                                    <div className="col-auto mb-3 text-center pt-3">
                                        <button type="submit" className="btn btn-success my-auto mt-3" onClick={(event) => handlerSearch(event)} disabled={unfilled ? true : false}>
                                            Cari Mobil
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {saveFilter && (
                    <div className="container pt-3 pb-5">
                        {saveFilter ? (
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ps-4 pe-4">
                                {saveFilter.map((car) => {
                                    return (
                                        <div key={car.id} className="col">
                                            <div className="card h-100">
                                                <img src={car.image} className="car-image card-img-top" alt="Car" />
                                                <div className="card-body">
                                                    <p className="car-name card-text">{car.name}</p>
                                                    <h5 className="car-price card-title">Rp {car.price} / hari</h5>
                                                    <p className="car-desc card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                    <div className="row ps-2 pe-2">
                                                        <Link to={`/cars/${car.id}`} className="ps-2 pe-2">
                                                            <button className="btn btn-success w-100" onClick={() => dispatch(carDetail(car))}>
                                                                Pilih Mobil
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : getAllCarsLoading || filterCarsLoading ? (
                            <div className="container">
                                <div className="row">
                                    <div className="col text-center">
                                        <p className="text-loading">Loading Cars Data...</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="container">
                                <div className="row">
                                    <div className="col text-center">
                                        <p className="text-error">{getAllCarsError || filterCarsError ? getAllCarsError || filterCarsError : "Empty Data..."}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default FilterCars;
