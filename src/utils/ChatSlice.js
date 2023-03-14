import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./Constants";

const chartSlice = createSlice({
    name : 'chat',
    initialState : {
        messages : []
    },
    reducers : {
        addMessage : (state,action) => {
            //state.messages.splice(LIVE_CHAT_COUNT,1);
            //unshift -> to push to the array from front
            state.messages.push(action.payload);
        }
    }
})

export const {addMessage} = chartSlice.actions;
export default chartSlice.reducer;