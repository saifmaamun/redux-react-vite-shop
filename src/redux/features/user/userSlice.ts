import { auth } from '@/lib/firebase';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';

interface IUser {
  user: {
    email: null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

interface ICredentials {
  email: string;
  password: string;
}

const initialState: IUser = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};
export const createUser = createAsyncThunk(
  'user/createUser',
  async ({ email, password }: ICredentials) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(createUser.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(createUser.fulfilled, (state, actions) => {
      state.isError = false;
      state.isLoading = false;
      actions.payload;
    });
  },
});

// export const { toggleState, setPriceRange } = userSlice.actions;

export default userSlice.reducer;
