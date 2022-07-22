import { configureStore } from "@reduxjs/toolkit";
import themeModeSlice from "./theme-mode-slice";
import searchOptionsSlice from "./search-options-slice";
import uiSlice from './ui-slice';

import { genresApi } from "../services/genres";
import { animeApi } from "../services/anime";

const store = configureStore({
    reducer: {
        themeMode: themeModeSlice,
        searchOptions: searchOptionsSlice,
        ui: uiSlice,
        [genresApi.reducerPath]: genresApi.reducer,
        [animeApi.reducerPath]: animeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(genresApi.middleware, animeApi.middleware),
});

export default store;
