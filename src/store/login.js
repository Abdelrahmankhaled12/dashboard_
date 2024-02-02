import { createSlice } from '@reduxjs/toolkit'

export const login = createSlice({
    name: 'login',
    initialState: {
        logged: false,
        userData:{}
    },
    reducers: {
        setLogged: (state, action) => {
            state.logged = action.payload;
        },
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setLogged , setUserData  } = login.actions

export default login.reducer