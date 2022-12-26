import { ADD_ORDER, GET_ORDER, UPDATE_ORDER } from "../../actions/orderAction";

const initialState = {
    addOrderLoading: false,
    addOrderResult: false,
    addOrderError: false,

    updateOrderLoading: false,
    updateOrderResult: false,
    updateOrderError: false,

    getOrderLoading: false,
    getOrderResult: false,
    getOrderError: false,
};

const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            return {
                ...state,
                addOrderLoading: action.payload.loading,
                addOrderResult: action.payload.data,
                addOrderError: action.payload.errorMessage,
            };

        case UPDATE_ORDER:
            return {
                ...state,
                updateOrderLoading: action.payload.loading,
                updateOrderResult: action.payload.data,
                updateOrderError: action.payload.errorMessage,
            };

        case GET_ORDER:
            return {
                ...state,
                getOrderLoading: action.payload.loading,
                getOrderResult: action.payload.data,
                getOrderError: action.payload.errorMessage,
            };

        default:
            return state;
    }
};

export default OrderReducer;
