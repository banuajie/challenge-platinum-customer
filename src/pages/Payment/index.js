import React from "react";
import { useSelector } from "react-redux";
import HeaderNav from "../../components/HeaderNav";

const Payment = () => {
    const { carDetailResult } = useSelector((state) => state.CarReducer);
    const { addOrderResult } = useSelector((state) => state.OrderReducer);

    const getSessionCarDetail = JSON.parse(window.sessionStorage.getItem("SessionCarDetail"));

    const handleClick = (event) => {
        event.preventDefault();

        console.log("ini carDetailResult", carDetailResult);
        console.log("ini addOrderResult", addOrderResult);
        console.log("ini getSessionCarDetail", getSessionCarDetail);
    };

    return (
        <div>
            <HeaderNav />
            <div>
                <button className="btn btn-success" onClick={(event) => handleClick(event)}>
                    Click Here
                </button>
            </div>
        </div>
    );
};

export default Payment;
