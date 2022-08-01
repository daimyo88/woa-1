import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const animeApi = createApi({
    reducerPath: "animeApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    endpoints: (builder) => ({
        getAnime: builder.query({
            query: (id) => `/anime/${id}/full`,
        }),
        getAnimePictures: builder.query({
            query: (id) => `/anime/${id}/pictures`,
        }),
        getAnimeList: builder.query({
            query: ({
                searchQuery,
                page,
                genres,
                type,
                rating,
                status,
                sfwFilter,
                startDateFilter,
                endDateFilter,
                sort,
            }) => {
              return `/anime?limit=24&q=${searchQuery}&page=${page}&genres=${genres}&type=${type}&rating=${rating}&status=${status}${sfwFilter}${startDateFilter}${endDateFilter}${sort}`
            }
                
        }),
    }),
});

export const { useGetAnimeQuery } = animeApi;
export const { useGetAnimePicturesQuery } = animeApi;
export const { useGetAnimeListQuery } = animeApi;
