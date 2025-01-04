import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiGet } from "../../API/APIService";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchData: {}, // Lưu danh sách người dùng
    status: "idle", // Trạng thái: idle, loading, succeeded, failed
    error: null, // Lỗi nếu có
  },
  reducers: {
    setSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export const { setSearchData } = searchSlice.actions;
export default searchSlice.reducer;
