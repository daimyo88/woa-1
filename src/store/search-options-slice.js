import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchQuery: "",
    page: 1,
    sort: "&sort=desc&order_by=score",
    genres: [],
    type: "",
    rating: "",
    status: "",
    startDate: null,
    endDate: null,
    sfw: false,
};

const searchOptionsSlice = createSlice({
    name: "searchOptions",
    initialState,
    reducers: {
        updateSearchQuery(state, action) {
            state.searchQuery = action.payload;
            state.page = 1;
        },
        updateSort(state, action) {
            state.sort = action.payload;
            state.page = 1;
        },
        updateFilter(state, action) {
            const { filter, value } = action.payload;
            state[filter] = value;
            state.page = 1;
        },
        resetFilters(state) {
            state.page = initialState.page;
            state.genres = initialState.genres;
            state.type = initialState.type;
            state.rating = initialState.rating;
            state.status = initialState.status;
            state.startDate = initialState.startDate;
            state.endDate = initialState.endDate;
            state.sfw = initialState.sfw;
        },
        updateCurrentPage(state, action) {
            state.page = action.payload;
        },
        updateSelectedGenres(state, action) {
            const currentGenres = [...state.genres];
            const genreId = action.payload;
            const existingGenreIndex = currentGenres.indexOf(genreId);
            if (existingGenreIndex !== -1) {
                currentGenres.splice(existingGenreIndex, 1);
            } else {
                currentGenres.push(genreId);
            }
            state.genres = currentGenres;
            state.page = 1;
        }
    },
});

export const searchOptionsSliceActions = searchOptionsSlice.actions;

export default searchOptionsSlice.reducer;
