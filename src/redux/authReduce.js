import {statusMeAPI} from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';
const LOGIN_USER = 'LOGIN_USER';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    loginUser: {email: null, password: null, rememberMe: false, captcha: false}
}

export const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return  {
                ...state,
                ...action.data,
                isAuth: true
            };
        }
        case LOGIN_USER: {
            return{
                ...state, ...state.loginUser, ...state.loginUser.data
            }
        }
        default:  return state;
    }
}

export const setAuthUserData = (userId, email, login) => {
    return ({
        type: SET_USER_DATA,
        data: {userId, email, login}
    });
}
const  getLoginUserData = (data) => {
    return ({
        type: LOGIN_USER, data
    })
}
export const loginUser = (data) => {
    return (
        (dispatch) => {
            statusMeAPI.loginMe(data).then(respons => {
                if (respons.resultCode === 0){
                    dispatch(getLoginUserData(data));
                }
            })
        }
    )
}

export const getAuthMe = () => {
    return (
        (dispatch) => {
            statusMeAPI.statusMe().then(data=> {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login));
                }
            });
        }
    )
}




export default authReducer