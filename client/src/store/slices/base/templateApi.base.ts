import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const templateApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  tagTypes: ['Todo', 'User'],

  // The endpoints are added later, in platformApi.ts, which is generated from
  // the OpenAPI specification by running `npm generate-api`.
  endpoints: () => ({}),
});
