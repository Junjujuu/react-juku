import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    user: userReducer,
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
