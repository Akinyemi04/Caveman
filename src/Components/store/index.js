import {configureStore, createSlice} from '@reduxjs/toolkit'

const detailSlice= createSlice({
    name:'data',
    initialState:{
        email:null,
        password:null
    },
    reducers:{
        emailfill(state,action){
            return{
                ...state,
                email:action.payload
            }
        },
        passwordfill(state,action){
            return{
                ...state,
                password:action.payload
            }
        }
    }
})

export const security=  detailSlice.actions

const store= configureStore({
    reducer:{
       data: detailSlice.reducer
    }
})
export default store