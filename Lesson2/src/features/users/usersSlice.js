import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 0, name: 'Hippo Bach' },
  { id: 1, name: 'Ronaldo' },
  { id: 2, name: 'Drogba' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
