import { CAR_DETAIL, FILTER_CARS, GET_ALL_CARS } from "../../actions/carActions";

const initialState = {
    getAllCarsLoading: false,
    getAllCarsResult: false,
    getAllCarsError: false,

    filterCarsLoading: false,
    filterCarsResult: false,
    filterCarsError: false,

    carDetailResult: false,
};

const CarReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CARS:
            return {
                ...state,
                getAllCarsLoading: action.payload.loading,
                getAllCarsResult: action.payload.data,
                getAllCarsError: action.payload.errorMessage,
            };

        case FILTER_CARS:
            return {
                ...state,
                filterCarsLoading: action.payload.loading,
                filterCarsResult: action.payload.data,
                filterCarsError: action.payload.errorMessage,
            };

        case CAR_DETAIL:
            return {
                ...state,
                carDetailResult: action.payload.data,
            };

        default:
            return state;
    }
};

export default CarReducer;
