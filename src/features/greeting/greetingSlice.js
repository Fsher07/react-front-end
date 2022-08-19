import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  message: '',
};

export const fetchGreetings = createAsyncThunk(
  'greeting/fetchGreetings',
  async () => {
    const response = await axios.get('http://localhost:3000/api/greetings');
    return response.data;
  },
);

export const counterSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => (
        { ...state, status: 'loading' }
      ))
      .addCase(fetchGreetings.fulfilled, (state, action) => ({
        ...state, message: action.payload,
      }));
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
