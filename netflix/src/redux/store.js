import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import searchSlice from "./searchSlice";
import wishlistSlice from "./wishListSlice"; 
const store = configureStore({
    reducer: {
        app: userReducer,
        movie: movieReducer,
        searchMovie: searchSlice,
        wishList: wishlistSlice,
    }
});

export default store;
