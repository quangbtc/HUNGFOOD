import { loginFail, loginStart, loginSuccess } from "./userSlice"
import AuthApi from "../api/Auth"

export const login=async (dispatch,user)=>{
    //Goi redux loginstart
    dispatch(loginStart())
    try {
        const res= await AuthApi.login(user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFail())
    }

}
export const signIn=async(dispatch,user)=>{
    dispatch(loginStart())
    try {
        const res=await AuthApi.register(user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFail())
    }
}
