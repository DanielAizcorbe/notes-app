import { configureStore } from '@reduxjs/toolkit';
import notasReducer from "./slices/notasSlice";
import tagsReducer from "./slices/tagsSlice";

const store = configureStore({
    reducer: {
        notas: notasReducer,
        tags: tagsReducer,
    },
});

export default store;