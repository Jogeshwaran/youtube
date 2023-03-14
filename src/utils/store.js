import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./AppSlice";
import CacheSlice from "./CacheSlice";
import ChatSlice from "./ChatSlice";
import sideBarSlice from "./SideBarSlice";
import tagSlice from "./TagSlice";

const store = configureStore({
    reducer : {
        app : appSlice,
        sidebar : sideBarSlice,
        cache : CacheSlice,
        tag : tagSlice,
        chat : ChatSlice,
    }

});

export default store;