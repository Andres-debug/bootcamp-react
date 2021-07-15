import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: {
      users: [],
      loading: false,
      error: null,
    },
  },
  reducers: {
    setUsers: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
