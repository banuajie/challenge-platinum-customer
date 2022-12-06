import axios from "axios";

export const GET_ALL_CARS = "GET_ALL_CARS";
export const FILTER_CARS = "FILTER_CARS";
export const CAR_DETAIL = "CAR_DETAIL";

export const getAllCars = () => {
    return (dispatch) => {
        // loading
        dispatch({
            type: GET_ALL_CARS,
            payload: {
                loading: true,
                data: false,
                error: false,
            },
        });

        // get data
        axios({
            method: "GET",
            url: "https://bootcamp-rent-cars.herokuapp.com/customer/car",
            timeout: 10000,
        })
            .then((response) => {
                // when success get data
                dispatch({
                    type: GET_ALL_CARS,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                // when failed get data
                dispatch({
                    type: GET_ALL_CARS,
                    payload: {
                        loading: true,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const filterCars = (data) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: FILTER_CARS,
            payload: {
                loading: true,
                data: false,
                error: false,
            },
        });

        // get data
        axios({
            method: "GET",
            url: `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${data.name}&category=${data.category}&isRented=false&minPrice=${data.minPrice}&maxPrice=${data.maxPrice}&page=1&pageSize=10`,
            timeout: 10000,
            data: data,
        })
            .then((response) => {
                // when success get data
                dispatch({
                    type: FILTER_CARS,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                // when failed get data
                dispatch({
                    type: FILTER_CARS,
                    payload: {
                        loading: true,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const carDetail = (data) => {
    return (dispatch) => {
        // get data
        dispatch({
            type: CAR_DETAIL,
            payload: {
                data: data,
            },
        });
    };
};
