import { configureStore } from "@reduxjs/toolkit";
import contanctReducer from "@/redux/contactSlice"

export const store = configureStore({
    reducer: {
      contact:contanctReducer
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;