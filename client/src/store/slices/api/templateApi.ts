import { templateApi as api } from './templateApi.generated';

const tags = {
  user: 'User',
  todo: 'Todo',
};

/*
  The generated API does not know how our endpoints relate to one another. By
  using `providesTags` and `invalidatesTags`, we describe those relationships
  so that cached data will be refetched when necessary. For example, a
  `createTodo` mutation should cause the app to refetch the `todos` query.
*/
const enhancedApi = api.enhanceEndpoints({
  addTagTypes: Object.values(tags),
  endpoints: {
    getUser: {
      providesTags: [tags.user],
    },
    createUser: {
      invalidatesTags: [tags.user],
    },
  },
});

/*
  RTK Query makes it possible to trim down your initial bundle size by allowing you to inject additional 
  endpoints after you've set up your initial service definition. This can be very beneficial for larger 
  applications that may have many endpoints.

  injectEndpoints accepts a collection of endpoints, as well as an optional overrideExisting parameter.

  Calling injectEndpoints will inject the endpoints into the original API, but also give you that same 
  API with correct types for these endpoints back. 
  (Unfortunately, it cannot modify the types for the original definition.)
*/
export const templateApi = enhancedApi.injectEndpoints({
  endpoints: (build) => ({
    example: build.query({
      query: () => 'test',
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUserQuery,
  useGetUsersQuery,

  useLoginMutation,
  useCreateUserMutation,
} = templateApi;