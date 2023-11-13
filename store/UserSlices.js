import React from "react"
import {createSlice} from "@reduxjs/toolkit"



const User_slices=createSlice({

    name:"Dune",

   initialState:{
     name:""
   },
    
  reducers:{
       login(state,action){
          state.name=action.payload,
          console.log(state?.name)
       }
  }

})

export default User_slices.reducer
export const {login} =User_slices.actions