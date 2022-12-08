import { Outlet, Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = () => {
    const location = useLocation();
    const token = window.localStorage.getItem("Token");
    const getSessionCarDetail = window.sessionStorage.getItem("SessionCarDetail");

    if (token && getSessionCarDetail) {
        return <Outlet />;
    } else if (!getSessionCarDetail) {
        return <Navigate to="/cars" />;
    } else {
        return <Navigate to="/signin" state={location.pathname} />;
    }
};

export default PrivateRoutes;