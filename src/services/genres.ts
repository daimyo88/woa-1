import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const genresApi = createApi({
  reducerPath: 'genresApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getGenres: builder.query({
      query: () => `/genres/anime`,
    }),
  }),
})

export const { useGetGenresQuery } = genresApi;