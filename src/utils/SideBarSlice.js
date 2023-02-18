import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice  = createSlice({
    name : "sidebar",
initialState : {
    isSideBarOpen : true
},
reducers : {
    closeSideBar : (state) => {
        state.isSideBarOpen = false
    }
}

})

export const {closeSideBar} = sidebarSlice.actions;
export default sidebarSlice.reducer;