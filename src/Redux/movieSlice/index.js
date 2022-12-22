import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BACKEND_URL } from "../../data";

export const setMoviesThunk = createAsyncThunk(
  "movies/setMoviesThunk",
  async function (query, { rejectWithValue }) {
    try {
      const res = await fetch(
        `${BACKEND_URL}/discover/movie${query ? `?${query}` : ""}`
      );
      if (!res.ok) {
        throw new Error("something is wrong");
      }
      const data = await res.json();
      return data.results;
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
  // reducers: {
  //   setMovies(state, action) {
  //     const newMovies = action.payload.data;
  //     const movies = [...state.movies, ...newMovies];
  //     return {
  //       ...state,
  //       movies,
  //     };
  //   },
  // },
  extraReducers: {
    [setMoviesThunk.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [setMoviesThunk.fulfilled]: (state, action) => {
      const newGames = action.payload;
      state.status = "resolved";
      state.movies = [...state.movies, ...newGames];
    },
    [setMoviesThunk.rejected]: setError,
  },
});

export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;
