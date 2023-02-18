import {
    loginFail,
    loginStart,
    loginSuccess,
    getAllUserFail,
    getAllUserStart,
    getAllUserSuccess,
} from './userSlice';
import AuthApi from '../api/Auth';
import UserApi from '../api/User';

export const login = async (dispatch, user) => {
    //Goi redux loginstart
    dispatch(loginStart());
    try {
        const res = await AuthApi.login(user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFail());
    }
};
export const signIn = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await AuthApi.register(user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFail());
    }
};
export const getAllUser = async (dispatch, data) => {
    dispatch(getAllUserStart());
    try {
        const res = await UserApi.getAllUser(data);
        dispatch(getAllUserSuccess(res.data));
    } catch (error) {
        dispatch(getAllUserFail());
    }
};
