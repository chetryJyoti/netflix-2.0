import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name:'wishList',
    initialState:{
        wishListItems:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.wishListItems.push(action.payload);
        },
        removeItem: (state, action) => {
            state.wishListItems.splice(action.payload, 1);
        },
        clearCart:(state,action)=>{
            state.wishListItems.length = 0;
        }
    }
})

export const {addItem,removeItem,clearCart} = wishListSlice.actions;
export default wishListSlice.reducer;