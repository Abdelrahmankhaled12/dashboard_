import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        products: [],
    },
    reducers: {
        setProductCart: (state, action) => {
            state.products = [...state.products, action.payload];
        },
        setProductCartFilter: (state, action) => {
            state.products = action.payload;
        },
        setCounter: (state, action) => {
            console.log(action)
            state.products = state.products.map(product => {
                if (product.product_id === action.payload[1])
                    product.counter = product.counter - action.payload[0]
                return product;
            })
        }
    },
})

// Action creators are generated for each case reducer function
export const { setProductCart, setProductCartFilter , setCounter } = cartSlice.actions

export default cartSlice.reducer