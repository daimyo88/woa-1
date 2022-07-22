import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getAnime: builder.query({
      query: (id) => `/anime/${id}/full`,
    }),
    getAnimePictures: builder.query({
      query: (id) => `/anime/${id}/pictures`,
    }),
  }),
})

export const { useGetAnimeQuery } = animeApi;
export const { useGetAnimePicturesQuery } = animeApi;