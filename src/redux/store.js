import { configureStore } from '@reduxjs/toolkit';
import notasReducer from "./slices/notasSlice";

const store = configureStore({
    reducer: {
        notas: notasReducer
    },
});

export default store;