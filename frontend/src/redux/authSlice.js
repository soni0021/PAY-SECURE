import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState:{
        loading: false,
        user: localStorage.getItem("username") || '',
        balance: 0
    },
    reducers:{
        // actions
        setLoading:(state,action)=>{
            state.loading = action.payload
        },
        setUser:(state,action)=>{
            state.user = action.payload
            localStorage.setItem("username",state.user);
        },
        setBalance:(state,action)=>{
            state.balance = action.payload
        }
    }
})
export const {setLoading,setUser,setBalance} = authSlice.actions;
export default authSlice.reducer;