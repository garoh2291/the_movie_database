import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BACKEND_URL } from "../../data";

export const setMoviesThunk = createAsyncThunk(
  "movies/setMoviesThunk",
  async function ({ query, page }, { dispatch, rejectWithValue }) {
    try {
      const res = await fetch(
        `${BACKEND_URL}/discover/movie${query ? `?${query}` : ""}`
      );
      if (!res.ok) {
        throw new Error("something is wrong");
      }
      const { results: data } = await res.json();

      return { data, page };
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: null,
    error: null,
  },
  reducers: {
    setMovies(state, action) {
      const movies = action.payload;
      return {
        ...state,
        movies,
      };
    },
  },
  extraReducers: {
    [setMoviesThunk.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [setMoviesThunk.fulfilled]: (state, action) => {
      const { data, page } = action.payload;

      state.status = "resolved";
      if (page === 1) {
        state.movies = data;
      } else {
        state.movies = [...state.movies, ...data];
      }
    },
    [setMoviesThunk.rejected]: setError,
  },
});

export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;
