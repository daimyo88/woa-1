import { configureStore } from "@reduxjs/toolkit";
import themeModeSlice from "./theme-mode-slice";
import searchOptionsSlice from "./search-options-slice";

import { genresApi } from "../services/genres";
import { animeApi } from "../services/anime";

const store = configureStore({
    reducer: {
        themeMode: themeModeSlice,
        searchOptions: searchOptionsSlice,
        [genresApi.reducerPath]: genresApi.reducer,
        [animeApi.reducerPath]: animeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            genresApi.middleware,
            animeApi.middleware
        ),
});

export default store;
