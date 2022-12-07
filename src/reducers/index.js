import { combineReducers } from "redux";
import CarReducer from "./car";
import OrderReducer from "./order";

export default combineReducers({
    CarReducer,
    OrderReducer,
});
