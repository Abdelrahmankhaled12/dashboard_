import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import login from './login'
import admin from './admin'

export const store = configureStore({
    reducer: {
        cart : cartSlice,
        login : login,
        admin : admin
    },
})