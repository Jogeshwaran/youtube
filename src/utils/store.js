import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./AppSlice";
import sideBarSlice from "./SideBarSlice";

const store = configureStore({
    reducer : {
        app : appSlice,
        sidebar : sideBarSlice
    }

});

export default store;