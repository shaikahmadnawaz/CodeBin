import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const getAllSubmissions = createAsyncThunk(
  "submission/getAllSubmissions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/v1/submissions");
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (!error.response) {
        return error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const createSubmission = createAsyncThunk(
  "submission/createSubmission",
  async (submission, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/submissions",
        submission
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (!error.response) {
        return error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

const submissionSlice = createSlice({
  name: "submission",
  initialState: {
    submissions: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllSubmissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllSubmissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.submissions = action.payload.submissions;
      })
      .addCase(getAllSubmissions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });

    builder
      .addCase(createSubmission.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSubmission.fulfilled, (state, action) => {
        state.isLoading = false;
        state.submissions = action.payload.submissions;
        toast.success(action.payload.message);
      })
      .addCase(createSubmission.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
        toast.error(action.payload.message);
      });
  },
});

export default submissionSlice.reducer;
