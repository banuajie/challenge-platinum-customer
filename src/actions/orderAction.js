import axios from "axios";

export const ADD_ORDER = "ADD_ORDER";
export const UPDATE_ORDER = "UPDATE_ORDER";
export const GET_ORDER = "GET_ORDER";

const token = window.localStorage.getItem("Token");

export const addOrder = (data) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: ADD_ORDER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        // post data
        axios({
            method: "POST",
            url: "https://bootcamp-rent-cars.herokuapp.com/customer/order",
            timeout: 10000,
            headers: {
                access_token: token,
            },
            data: data,
        })
            .then((response) => {
                // when success post data
                dispatch({
                    type: ADD_ORDER,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });

                window.sessionStorage.setItem("SessionAddOrder", JSON.stringify(response.data));
            })
            .catch((error) => {
                // when failed post data
                dispatch({
                    type: ADD_ORDER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const updateOrder = (data) => {
    const getSessionAddOrder = JSON.parse(window.sessionStorage.getItem("SessionAddOrder"));

    return (dispatch) => {
        // loading
        dispatch({
            type: UPDATE_ORDER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        // put data
        axios({
            method: "PUT",
            url: `https://bootcamp-rent-cars.herokuapp.com/customer/order/${getSessionAddOrder.id}/slip`,
            timeout: 10000,
            headers: {
                access_token: token,
                accept: "application/json",
                "Content-Type": "multipart/form-data",
            },
            data: data,
        })
            .then((response) => {
                // when success put data
                dispatch({
                    type: UPDATE_ORDER,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });

                window.sessionStorage.setItem("SessionUpdateOrder", JSON.stringify(response.data));
            })
            .catch((error) => {
                // when failed put data
                dispatch({
                    type: UPDATE_ORDER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const getOrder = () => {
    const getSessionAddOrder = JSON.parse(window.sessionStorage.getItem("SessionAddOrder"));

    return (dispatch) => {
        // loading
        dispatch({
            type: GET_ORDER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        // get data
        axios({
            method: "GET",
            url: `https://bootcamp-rent-cars.herokuapp.com/customer/order/${getSessionAddOrder.id}`,
            timeout: 10000,
            headers: {
                access_token: token,
            },
        })
            .then((response) => {
                // when success get data
                dispatch({
                    type: GET_ORDER,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });

                window.sessionStorage.setItem("SessionGetOrder", JSON.stringify(response.data));
            })
            .catch((error) => {
                // when failed get data
                dispatch({
                    type: GET_ORDER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};
