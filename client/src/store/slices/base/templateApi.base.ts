import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const templateApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    credentials: 'include', // https://stackoverflow.com/questions/63351799/react-fetch-credentials-include-breaks-my-entire-request-and-i-get-an-error
  }),
  tagTypes: ['Todo', 'User'],

  // The endpoints are added later, in platformApi.ts, which is generated from
  // the OpenAPI specification by running `npm generate-api`.
  endpoints: () => ({}),
});
