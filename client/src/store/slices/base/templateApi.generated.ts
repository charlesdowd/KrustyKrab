import { templateApi as api } from './templateApi.base';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<GetUserApiResponse, GetUserApiArg>({
      query: (queryArg) => ({ url: `/user/${queryArg.userId}` }),
    }),
    createUser: build.mutation<CreateUserApiResponse, CreateUserApiArg>({
      query: (queryArg) => ({
        url: `/user`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getUsers: build.query<GetUsersApiResponse, GetUsersApiArg>({
      query: () => ({ url: `/user` }),
    }),
    login: build.mutation<LoginApiResponse, LoginApiArg>({
      query: (queryArg) => ({
        url: `/auth`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as templateApi };
export type GetUserApiResponse = /** status 200 User Found */ User;
export type GetUserApiArg = {
  /** Id of an existing user. */
  userId: number;
};
export type CreateUserApiResponse = /** status 200 User Created */ User;
export type CreateUserApiArg = {
  /** Post the necessary fields for the API to create a new user. */
  body: {
    firstName: string;
    email: string;
    password: string;
    username: string;
  };
};
export type GetUsersApiResponse = /** status 200 OK */ User[];
export type GetUsersApiArg = void;
export type LoginApiResponse = /** status 200 OK */ {
  accessToken?: string;
};
export type LoginApiArg = {
  body: {};
};
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
