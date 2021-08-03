import {configureStore} from '@reduxjs/toolkit'
import menuReducer from './menuSlice'
import modalReducer from './modalSlice'
export default configureStore({
    reducer:{
        menu:menuReducer,
        modal:modalReducer
    }
})  