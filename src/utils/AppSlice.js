import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : "app",
    initialState : {
        isSideBarCardOpen : false
    },
    reducers : {
        toggleSideBar : (state) => {
            state.isSideBarCardOpen = ! state.isSideBarCardOpen
        }
    }

}
)
export const {toggleSideBar} = appSlice.actions;
export default appSlice.reducer;