import { templateApi as api } from './templateApi.base';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUserByUserId: build.query<GetUserByUserIdApiResponse, GetUserByUserIdApiArg>({
      query: (queryArg) => ({ url: `/user/${queryArg.userId}` }),
    }),
    postUser: build.mutation<PostUserApiResponse, PostUserApiArg>({
      query: (queryArg) => ({ url: `/user`, method: 'POST', body: queryArg.body }),
    }),
    getUser: build.query<GetUserApiResponse, GetUserApiArg>({
      query: () => ({ url: `/user` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as templateApi };
export type GetUserByUserIdApiResponse = /** status 200 User Found */ User;
export type GetUserByUserIdApiArg = {
  /** Id of an existing user. */
  userId: number;
};
export type PostUserApiResponse = /** status 200 User Created */ User;
export type PostUserApiArg = {
  /** Post the necessary fields for the API to create a new user. */
  body: {
    firstName: string;
    email: string;
    password: string;
    username: string;
  };
};
export type GetUserApiResponse = unknown;
export type GetUserApiArg = void;
export type User = {
  username: string;
  email: string;
  firstName: string;
  password: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  lastName?: string;
};
