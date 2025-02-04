import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '@/utils/axios';
import { ITodo } from '@/types/todo';

export const getHome = createAsyncThunk('home/getHome', async () => {
  return axios.get(`/backend-api/todos`).then((response) => {
    return response.data;
  });
});

interface IHomeSlice {
  todos: ITodo[];
}

const initialState: IHomeSlice = {
  todos: []
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getHome.fulfilled, (state, action: PayloadAction<ITodo[]>) => {
      const filtered = action.payload.filter((x, y) => {
        return y < 3;
      });
      state.todos = filtered;
    });
  }
});

export default homeSlice.reducer;
