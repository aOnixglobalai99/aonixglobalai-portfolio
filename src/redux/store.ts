import { configureStore } from "@reduxjs/toolkit";
import contanctReducer from "@/redux/contactSlice";
import jobReducer from "@/redux/jobSlice"
import applicationReducer from "@/redux/applicationSlice"

export const store = configureStore({
    reducer: {
      contact:contanctReducer,
      job:jobReducer,
      application:applicationReducer
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;