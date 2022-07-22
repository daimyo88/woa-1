import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchQuery: "",
    page: 1,
    sort: "&sort=desc&order_by=score",
    selectedGenres: [],
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
        }
    },
});

export const searchOptionsSliceActions = searchOptionsSlice.actions;

export default searchOptionsSlice.reducer;
