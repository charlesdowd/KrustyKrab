import { templateApi as api } from './templateApi.base';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query<GetAllUsersApiResponse, GetAllUsersApiArg>({
      query: () => ({ url: `/user/all` }),
    }),
    createUser: build.mutation<CreateUserApiResponse, CreateUserApiArg>({
      query: (queryArg) => ({
        url: `/user`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getUser: build.query<GetUserApiResponse, GetUserApiArg>({
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
export type GetAllUsersApiResponse = /** status 200  */ {
  users?: User[];
};
export type GetAllUsersApiArg = void;
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
export type GetUserApiResponse = /** status 200 OK */ {
  user?: User;
};
export type GetUserApiArg = void;
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
