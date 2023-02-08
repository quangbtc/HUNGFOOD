import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    users: null,
    isLoading: false,
    error: false,
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.currentUser = action.payload;
        },
        loginFail: (state) => {
            state.error = true;
            state.isLoading = false;
        },
        logOut: (state) => {
            state.currentUser = null;
            localStorage.removeItem('persist:root');
        },
        signInStart: (state) => {
            state.isLoading = true;
        },
        signInSucess: (state, action) => {
            state.isLoading = false;
            state.currentUser = action.payload;
        },
        signInFail: (state) => {
            state.error = true;
            state.isLoading = false;
        },
        getAllUserStart: (state) => {
            state.isLoading = true;
        },
        getAllUserSuccess: (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        },
        getAllUserFail: (state) => {
            state.error = true;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    loginStart,
    loginSuccess,
    loginFail,
    logOut,
    signInStart,
    signInSucess,
    signInFail,
    getAllUserStart,
    getAllUserSuccess,
    getAllUserFail,
} = userSlice.actions;

export default userSlice.reducer;
