import React from "react";
import { useSelector } from "react-redux";

const Payment = () => {
    const { carDetailResult } = useSelector((state) => state.CarReducer);
    const { addOrderResult } = useSelector((state) => state.OrderReducer);

    const getSessionCarDetail = JSON.parse(window.sessionStorage.getItem("SessionCarDetail"));

    const handleClick = (event) => {
        event.preventDefault();

        console.log("ini carDetailResult", carDetailResult);
        console.log("ini getSessionCarDetail", getSessionCarDetail);

        if (addOrderResult) {
            console.log("ini addOrderResult", addOrderResult);
        }
    };

    return (
        <div>
            <div>
                <button className="btn btn-success" onClick={(event) => handleClick(event)}>
                    Click Here
                </button>
            </div>
        </div>
    );
};

export default Payment;
