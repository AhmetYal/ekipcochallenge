import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategoryAsync = createAsyncThunk(
  "category/getCategory",
  async () => {
    const response = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/categories`
    );
    return response.data;
  }
);
export const CategorySlice = createSlice({
  name: "categories",
  initialState: {
    category: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    //GET Category
    [getCategoryAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [getCategoryAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.category = action.payload;
    },
    [getCategoryAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default CategorySlice.reducer;
