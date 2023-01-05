import jwt from 'jsonwebtoken';
import { IUser } from '../../models';

// Set default value so there are no type errors
const { ACCESS_TOKEN_SECRET = '', REFRESH_TOKEN_SECRET = '' } = process.env;

// This just creates the users access + refresh tokens, nothing more
export async function login(user: IUser) {
  try {
    // Create access token
    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: user.username,
        },
      },
      ACCESS_TOKEN_SECRET,
      { expiresIn: 10 },
    );

    // Create refresh token
    const refreshToken = jwt.sign(
      {
        username: user.username,
      },
      REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' },
    );

    return { refreshToken, accessToken };
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}
