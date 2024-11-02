import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { 
        email: "",
        username: "",
        isLoggedIn: false,    
    },
    reducers: {
        login: (state, action) => {
            state.email = action.payload.email;
            state.username = action.payload.username;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.email = "";
            state.username = "";
            state.isLoggedIn = false;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;