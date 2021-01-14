import { USER_SIGNIN_REQUEST } from "../constants/userConstants";

function userSigninReducer(state={}, action){
    switch(action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true };
        case USER_SIGNIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_SIGNIN_FAIL:
            return { loading: false, error: action.payload };
        default: return state;    
    }
}

function useRegisterReducer(state={}, action){
    switch(action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true };
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default: return state;    
    }
}
export {
    userSigninReducer, useRegisterReducer
}
