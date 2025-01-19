import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

// 🛡️ Async Thunk để refresh accessToken
export const refreshAccessToken = createAsyncThunk(
  "user/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      // const refreshToken = Cookies.get("refreshToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (!refreshToken) {
        throw new Error("No refresh token available");
      }

      const response = await fetch(
        `${import.meta.env.VITE_URL_API}/refresh-token`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );

      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error(data.message || "Failed to refresh access token");
      }

      return {
        accessToken: data.accessToken,
        decodedToken: jwtDecode(data.accessToken),
      };
    } catch (error) {
      console.error("Failed to refresh access token:", error);
      return rejectWithValue("Failed to refresh access token");
    }
  }
);

export const fetchUserInfo = createAsyncThunk(
  "user/getInfo",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      // let token = Cookies.get("accessToken");
      let token = localStorage.getItem("accessToken");

      if (!token) {
        console.warn("No access token, attempting to refresh...");
        const refreshResponse = await dispatch(refreshAccessToken()).unwrap();

        token = refreshResponse.accessToken;
      }

      return jwtDecode(token);
    } catch (error) {
      console.error("Failed to fetch user info:", error);
      return rejectWithValue("Failed to fetch user info");
    }
  }
);

const initialState = {
  infor: null,
  isAuthenticated: !!localStorage.getItem("accessToken"),
  status: "idle",
  error: null,
};

//  Tạo Slice
const userSlice = createSlice({
  name: "inforUser",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      state.infor = null;
      state.isAuthenticated = false;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(refreshAccessToken.pending, (state) => {
        state.status = "loading";
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.infor = action.payload;
        state.isAuthenticated = true;
        state.status = "succeeded";
      })
      .addCase(refreshAccessToken.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.isAuthenticated = false;
        state.infor = null;
      })
      .addCase(fetchUserInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.infor = action.payload;
        state.isAuthenticated = true;
        state.status = "succeeded";
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.isAuthenticated = false;
        state.infor = null;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
