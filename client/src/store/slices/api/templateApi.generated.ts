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
    sendLogout: build.mutation<SendLogoutApiResponse, SendLogoutApiArg>({
      query: () => ({ url: `/auth/logout`, method: 'POST' }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as templateApi };
export type GetUserApiResponse = /** status 200 User Found */ {
  user?: User;
};
export type GetUserApiArg = {
  /** Id of an existing user. */
  userId: number;
};
export type CreateUserApiResponse = /** status 200 User Created */ {
  user: User;
};
export type CreateUserApiArg = {
  /** Post the necessary fields for the API to create a new user. */
  body: {
    email: string;
    password: string;
  };
};
export type GetUsersApiResponse = /** status 200 OK */ {
  users?: User[];
};
export type GetUsersApiArg = void;
export type LoginApiResponse = /** status 200 OK */ {
  accessToken: string;
};
export type LoginApiArg = {
  body: {
    email: string;
    password: string;
  };
};
export type SendLogoutApiResponse = /** status 200 OK */
  | {
      message?: string;
    }
  | /** status 204 No Content */ undefined;
export type SendLogoutApiArg = void;
export type User = {
  email: string;
  password?: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  emailVerified: boolean;
};
