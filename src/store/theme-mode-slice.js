import { createSlice } from '@reduxjs/toolkit';

const mode = localStorage.getItem('woaThemeMode') || 'dark';

const initialState = {
    mode
}

const themeModeSlice = createSlice({
    name: 'themeMode',
    initialState,
    reducers: {
        toggleThemeMode(state) {
            state.mode = state.mode === 'dark' ? 'light' : 'dark';
        }
    }
});

export const themeModeActions = themeModeSlice.actions;

export default themeModeSlice.reducer;