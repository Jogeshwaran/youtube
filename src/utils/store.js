import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./AppSlice";
import CacheSlice from "./CacheSlice";
import sideBarSlice from "./SideBarSlice";
import tagSlice from "./TagSlice";

const store = configureStore({
    reducer : {
        app : appSlice,
        sidebar : sideBarSlice,
        cache : CacheSlice,
        tag : tagSlice,
    }

});

export default store;