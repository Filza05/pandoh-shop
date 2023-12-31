import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {User } from '@/app/types/user';
interface UsersState {
  user: User;
}

const initialState: UsersState = {
  user: {},
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { addUser } = usersSlice.actions;
export const selectUser = (state: { user: UsersState }) => state.user.user;

const usersReducer = usersSlice.reducer;
export default usersReducer;
