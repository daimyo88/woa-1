import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchOptions {
    searchQuery: string;
    page: number;
    sort: string;
    genres: string[];
    type: string;
    rating: string;
    status: string;
    startDate: Date | null;
    endDate: Date | null;
    sfw: boolean;
}

const initialState: SearchOptions = {
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
        updateSearchQuery(state: SearchOptions, action: PayloadAction<string>) {
            state.searchQuery = action.payload;
            state.page = 1;
        },
        updateSort(state: SearchOptions, action: PayloadAction<string>) {
            state.sort = action.payload;
            state.page = 1;
        },
        updateFilter(
            state: SearchOptions,
            action: PayloadAction<{
                filter: "type" | "rating" | "status";
                value: string
            }>
        ) {
            const { filter, value } = action.payload;
            state[filter] = value;
            state.page = 1;
        },
        updateDateFilter(
            state: SearchOptions,
            action: PayloadAction<{
                filter: "startDate" | "endDate";
                value: Date | null;
            }>
        ) {
            const { filter, value } = action.payload;
            state[filter] = value;
            state.page = 1;
        },
        updateSfwFilter(
            state: SearchOptions,
            action: PayloadAction<boolean>
        ) {
            state.sfw = action.payload;
        },
        resetFilters(state: SearchOptions) {
            state.page = initialState.page;
            state.genres = initialState.genres;
            state.type = initialState.type;
            state.rating = initialState.rating;
            state.status = initialState.status;
            state.startDate = initialState.startDate;
            state.endDate = initialState.endDate;
            state.sfw = initialState.sfw;
        },
        updateCurrentPage(state: SearchOptions, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        updateSelectedGenres(state: SearchOptions, action: PayloadAction<string>) {
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
        },
    },
});

export const searchOptionsSliceActions = searchOptionsSlice.actions;

export default searchOptionsSlice.reducer;
