import { createSlice } from "@reduxjs/toolkit";

const taskInitialState = {pendingTask: [], completedTask: []}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: taskInitialState,
    reducers: {
        setInitialTask(state,action){
            state.pendingTask = action.payload.PendingTasks ? action.payload.PendingTasks : [];
            state.completedTask = action.payload.CompletedTasks ? action.payload.CompletedTasks : [];
        },
        addTask(state,action){
            state.pendingTask.push(action.payload)
        },
        taskDone(state,action){
            state.completedTask.push(state.pendingTask[action.payload])
            state.pendingTask.splice(action.payload,1);
        },
        deleteTask(state,action){
            state.completedTask.splice(action.payload,1);
        },
        clearAll(state){
            state.completedTask = [];
        },
        updateTask(state,action){
            state.pendingTask[action.payload.id] = action.payload.data
        }
    }
})