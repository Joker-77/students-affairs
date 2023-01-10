import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { reducer } from "./reducers/reducer";

export const store = configureStore({
  reducer: {
    baseReducer: reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
