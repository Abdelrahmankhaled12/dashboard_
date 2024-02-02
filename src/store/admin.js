import { createSlice } from '@reduxjs/toolkit'

export const admin = createSlice({
    name: 'admin',
    initialState: {
        loggedAdmin: false,
    },
    reducers: {
        setLoggedAdmin: (state, action) => {
            state.loggedAdmin = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setLoggedAdmin  } = admin.actions

export default admin.reducer