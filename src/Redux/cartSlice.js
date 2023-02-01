import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    quantity: 0,
    total: 0,
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        increase: (state, action) => {
            let { index } = action.payload;
            state.products[index].quantity += 1;
            state.total = state.products.reduce((acc, item) => {
                return acc + item.price * item.quantity;
            }, 0);
        },
        decrease: (state, action) => {
            let { index } = action.payload;
            state.products[index].quantity -= 1;
            state.total = state.products.reduce((acc, item) => {
                return acc + item.price * item.quantity;
            }, 0);
        },
        removeCart: (state, action) => {
            state.quantity -= 1;
            state.products.splice(action.payload, 1);
            state.total = state.products.reduce((acc, item) => {
                return acc + item.price * item.quantity;
            }, 0);
        },
        deleteAllCart: (state, action) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addProduct, decrease, deleteAllCart, removeCart, increase } =
    cartSlice.actions;

export default cartSlice.reducer;
