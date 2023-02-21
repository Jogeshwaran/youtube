import { createSlice } from "@reduxjs/toolkit";

const tagSlice = createSlice({
    name : 'tags',
    initialState : {
        tags : []

    },
    reducers : {
    addTags : (state,action) => {
        state.tags.push(action.payload)
    }
}
})

export const {addTags} = tagSlice.actions;
export default tagSlice.reducer;