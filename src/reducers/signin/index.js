import { POST_LOGIN } from "../../actions/signinAction";

const initialState = {
    postLoginLoading: false,
    postLoginResult: false,
    postLoginError: false,
};

const SignInReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_LOGIN:
            return {
                ...state,
                postLoginLoading: action.payload.loading,
                postLoginResult: action.payload.data,
                postLoginError: action.payload.errorMessage,
            };

        default:
            return state;
    }
};

export default SignInReducer;
