import { createSlice } from '@reduxjs/toolkit';

interface IUser {
  user: {
    email: null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

const initialState: IUser = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

// export const { toggleState, setPriceRange } = userSlice.actions;

export default userSlice.reducer;
