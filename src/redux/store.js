import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/auth";
import api from "./api/api";
import miscSlice from "./reducers/misc";
import chatSlice from "./reducers/chat";

const store = configureStore({
    reducer:  {
        [authSlice.name]: authSlice.reducer,
        [api.reducerPath]: api.reducer,
        [miscSlice.reducerPath] : miscSlice.reducer,
        [chatSlice.name]: chatSlice.reducer,
    },
    middleware: (middle) => [...middle(),api.middleware],
})

export default store;