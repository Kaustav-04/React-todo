import { createSlice } from "@reduxjs/toolkit";

export const pendingSlice = createSlice({
    name: 'pending',
    initialState: {pendingStatus: false},
    reducers: {
        changePendingState(state,action){
            state.pendingStatus = action.payload
        }
    }
})

