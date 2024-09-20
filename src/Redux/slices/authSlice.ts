import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface User {
  username?: string;
  email: string;
  password: string;
  isLoggedIn: boolean;
}

interface AuthState {
  user: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  status: "idle",
  error: null,
};

// Sign In Thunk
export const signIn = createAsyncThunk(
  "auth/signIn",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user") || "null");
      if (
        storedUser &&
        storedUser.email === email &&
        storedUser.password === password
      ) {
        storedUser.isLoggedIn = true;
        localStorage.setItem("user", JSON.stringify(storedUser));
        return storedUser;
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

// Sign Up Thunk
export const signUp = createAsyncThunk(
  "auth/signUp",
  async (
    {
      username,
      email,
      password,
    }: { username: string; email: string; password: string },
    thunkAPI
  ) => {
    try {
      const newUser = { username, email, password, isLoggedIn: true };
      localStorage.setItem("user", JSON.stringify(newUser));
      return newUser;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to sign up");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      if (state.user) {
        const storedUser = { ...state.user, isLoggedIn: false };
        localStorage.setItem("user", JSON.stringify(storedUser));
        state.user = null;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
