import { createSlice } from '@reduxjs/toolkit';

interface UiState {
    advancedSearch: boolean
}

const initialState: UiState = {
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