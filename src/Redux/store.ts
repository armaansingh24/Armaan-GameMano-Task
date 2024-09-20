import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import authReducer from "./slices/authSlice";
import searchSlice from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    search: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
