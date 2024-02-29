import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import user from "../features/user/userSlice"
import { api } from "./services/api"

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user,
  },
})

export type AppStore = typeof store

export type AppDispatch = AppStore["dispatch"]
export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
