import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../..';
import { logOut } from '../authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL,
  credentials: 'include', // https://stackoverflow.com/questions/63351799/react-fetch-credentials-include-breaks-my-entire-request-and-i-get-an-error
  prepareHeaders: (headers, { getState }) => {
    const accessToken = (getState() as RootState).auth.accessToken;

    // Set auth header of all requests if user has authToken saved in state
    if (accessToken) headers.set('authorization', `Bearer ${accessToken}`);

    return headers;
  },
});

async function baseQueryWithReauth(
  args: any,
  api: any,
  extraOptions: any,
): Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>> {
  const result = await baseQuery(args, api, extraOptions);
  console.log('RESULT FROM BASE QUERY: ', result);
  return result;
}

export const templateApi = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Todo', 'User'],

  // The endpoints are added later, in platformApi.ts, which is generated from
  // the OpenAPI specification by running `npm generate-api`.
  endpoints: () => ({}),
});
