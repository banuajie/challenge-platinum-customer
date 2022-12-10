import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarDetail from "./pages/CarDetail";
import LandingPage from "./pages/LandingPage";
import SearchCar from "./pages/SearchCar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SelectMethod from "./pages/SelectMethod";
import PrivateRoutes from "./route/PrivateRoutes";
import NotFound from "./pages/NotFound";
import Payment from "./pages/Payment";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/cars" element={<SearchCar />} />
                    <Route path="/cars/:id" element={<CarDetail />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route element={<PrivateRoutes />}>
                        <Route path="/select-method" element={<SelectMethod />} />
                        <Route path="/payment" element={<Payment />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
