import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://swapi.py4e.com/api/';

export const starwarsApi = createApi({
  reducerPath: 'starwarsFetchedData',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    fetchFilms: builder.query({
      query: () => '/films',
    }),
    fetchPlanets: builder.query({
      query: () => '/planets',
    }),
    fetchPeople: builder.query({
      query: () => '/people',
    }),
    fetchPeopleByName: builder.query({
      query: (name: string) => `/people/?search=${name}`,
    }),
  }),
});

export const {
  useFetchFilmsQuery,
  useFetchPlanetsQuery,
  useFetchPeopleQuery,
  useFetchPeopleByNameQuery,
} = starwarsApi;
