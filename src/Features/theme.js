import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name : 'User',
    initialState : {
        value :{
            name : '',
            age : 0,
            email : ''
        }
    },
    reducers : {
        login : (state, action) => {
            state.value = action.payload
        },
        logout : (state, action) => {
            state.value =  {
                name : '',
                age : 0,
                email : ''
            }
        }
    }
})

export const {login, logout} = userSlice.actions;
export default themeSlice.reducer