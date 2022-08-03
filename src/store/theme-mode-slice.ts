import { createSlice } from '@reduxjs/toolkit';

const mode = localStorage.getItem('woaThemeMode') === 'light' ? 'light' : 'dark';

interface ThemeMode {
    mode: 'dark' | 'light'
}

const initialState: ThemeMode = {
    mode
}

const themeModeSlice = createSlice({
    name: 'themeMode',
    initialState,
    reducers: {
        toggleThemeMode(state: ThemeMode) {
            state.mode = state.mode === 'dark' ? 'light' : 'dark';
        }
    }
});

export const themeModeActions = themeModeSlice.actions;

export default themeModeSlice.reducer;