import { createSlice } from "@reduxjs/toolkit";
export const menuSlice = createSlice({
    name:'menu',
    initialState:{
        open:false
    },
    reducers:{
        OCModal:(state,action)=> {
            state.open = action.payload.open
        }
    }
})

export const {OCModal} = menuSlice.actions
export default menuSlice.reducer