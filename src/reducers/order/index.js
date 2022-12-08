import { ADD_ORDER } from "../../actions/orderAction";

const initialState = {
    addOrderLoading: false,
    addOrderResult: false,
    addOrderError: false,
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

        default:
            return state;
    }
};

export default OrderReducer;
