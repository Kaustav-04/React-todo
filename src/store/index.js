import { configureStore } from "@reduxjs/toolkit";
import { pendingSlice } from "./pendingState";
import { taskSlice } from "./Tasks";
const store = configureStore({
    reducer: 
        {
            pendingStatus : pendingSlice.reducer,
            task: taskSlice.reducer,
        }
    })

export default store;
export const pendingActions = pendingSlice.actions
export const taskActions = taskSlice.actions