import { createSlice } from "@reduxjs/toolkit";
export const modalSlice = createSlice({
    name:'modal',
    initialState:{
        searchOpen:false
    },
    reducers:{
        OCSearch:(state,action)=> {
            state.searchOpen = action.payload.open
        },
    }
})

export const {OCSearch} = modalSlice.actions
export default modalSlice.reducer