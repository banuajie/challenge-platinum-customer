import { Outlet, Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = () => {
    const location = useLocation();
    const token = window.localStorage.getItem("Token");
    const getSessionCarDetail = window.sessionStorage.getItem("SessionCarDetail");
    const getSessionSelectMethod = window.sessionStorage.getItem("SessionSelectMethod");

    if (token && getSessionCarDetail && getSessionSelectMethod) {
        return <Outlet />;
    } else if (!getSessionCarDetail || !getSessionSelectMethod) {
        return <Navigate to="/cars" />;
    } else {
        return <Navigate to="/signin" state={location.pathname} />;
    }
};

export default PrivateRoutes;
