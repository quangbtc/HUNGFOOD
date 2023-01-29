import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    isLoading: false,
    error: false,
};
export const userSlice = createSlice({
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
            localStorage.clear();
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
} = userSlice.actions;

export default userSlice.reducer;
