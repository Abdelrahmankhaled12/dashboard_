import { createSlice } from '@reduxjs/toolkit'

export const login = createSlice({
    name: 'login',
    initialState: {
        logged: sessionStorage.getItem('isLoggedIn') || false,
    },
    reducers: {
        setLogged: (state, action) => {
            state.logged = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setLogged } = login.actions

export default login.reducer