import { combineReducers } from "redux";
import CarReducer from "./car";
import OrderReducer from "./order";
import SignInReducer from "./signin";

export default combineReducers({
    CarReducer,
    OrderReducer,
    SignInReducer,
});
