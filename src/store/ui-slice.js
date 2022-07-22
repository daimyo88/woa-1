import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    advancedSearch: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleAdvancedSearch(state) {
            state.advancedSearch = !state.advancedSearch;
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;