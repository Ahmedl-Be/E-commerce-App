import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    products: [],
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state,actions) => {
        const item = state.products.find(item=>item.id === actions.payload.id);
        if(item){
            item.quantity+=actions.payload.quantity
        }else{
            state.products.push(actions.payload)
        }
        },
        removeItem:(state,actions) => {
            state.products = state.products.filter(item=>item.id !== actions.payload)
        },
        resetCart: (state) => {
            state.products = []
        },
    },
})
export const { addToCart ,removeItem,resetCart} = cartSlice.actions;
export default cartSlice.reducer;