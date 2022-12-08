import axios from "axios";

export const POST_LOGIN = "POST_LOGIN";

export const postLogin = (data) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: POST_LOGIN,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        // post data
        axios({
            method: "POST",
            url: "https://bootcamp-rent-cars.herokuapp.com/customer/auth/login",
            timeout: 10000,
            data: data,
        })
            .then((response) => {
                // when success post data
                dispatch({
                    type: POST_LOGIN,
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
                    type: POST_LOGIN,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};
