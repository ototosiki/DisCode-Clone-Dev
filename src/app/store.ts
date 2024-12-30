import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice"
import channelReducer from "../features/channelSlice"

// import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        user : userReducer,
        channel : channelReducer,
    } 
})
  
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

// export const useAppDispatch: () => AppDispatch = useDispatch;