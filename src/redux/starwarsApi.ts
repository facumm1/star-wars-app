import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {FilmTypes, PeopleTypes, PlanetTypes} from '../types/responseTypes';
import {translateApiAttributes} from '../util/translateApiAttributes';

const baseUrl = 'https://swapi.py4e.com/api/';

export const starwarsApi = createApi({
  reducerPath: 'starwarsFetchedData',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    fetchFilms: builder.query({
      query: () => '/films',
      transformResponse: (res: {results: Array<FilmTypes>}) =>
        translateApiAttributes(res.results, 'film'),
    }),
    fetchPlanets: builder.query({
      query: () => '/planets',
      transformResponse: (res: {results: Array<PlanetTypes>}) =>
        translateApiAttributes(res.results, 'planet'),
    }),
    fetchPeople: builder.query({
      query: () => '/people',
      transformResponse: (res: {results: Array<PeopleTypes>}) =>
        translateApiAttributes(res.results, 'people'),
    }),
    fetchPeopleByName: builder.query({
      query: (name: string) => `/people/?search=${name}`,
      transformResponse: (res: {results: Array<PeopleTypes>}) =>
        translateApiAttributes(res.results, 'people'),
    }),
  }),
});

export const {
  useFetchFilmsQuery,
  useFetchPlanetsQuery,
  useFetchPeopleQuery,
  useFetchPeopleByNameQuery,
} = starwarsApi;
