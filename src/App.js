import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarDetail from "./pages/CarDetail";
import LandingPage from "./pages/LandingPage";
import SearchCar from "./pages/SearchCar";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/cars" element={<SearchCar />} />
                    <Route path="/cars/:id" element={<CarDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
