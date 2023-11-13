import {combineReducers,configureStore} from "@reduxjs/toolkit" 
import user_Slice from "./UserSlices.js"




export const store=configureStore({

    reducer:{
        duneUser: user_Slice
    }
})


 