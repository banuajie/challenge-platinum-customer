import axios from "axios";

export const ADD_ORDER = "ADD_ORDER";

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
