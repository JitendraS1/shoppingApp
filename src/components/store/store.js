import { configureStore } from "@reduxjs/toolkit";
import cartRducer from './cartSlice'
import productReducer from './prosuctSlice'


const store = configureStore({
    reducer: {
        cart: cartRducer,
        product: productReducer,

    },
})

export default store