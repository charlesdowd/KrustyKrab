import jwt from 'jsonwebtoken';
import { IUser, User } from '../../models';
import { HttpError } from '../../util/Errors';

const { REFRESH_TOKEN_SECRET = '', ACCESS_TOKEN_SECRET = '' } = process.env;

export async function refresh(refreshToken: string) {
  try {
    // Cast decoded object to any - not the best practice
    const decoded: any = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);

    // Look for user from decoded refresh token
    const foundUser: IUser | null = await User.findOne({
      email: decoded?.user?.email,
    });

    // User not authorized
    if (!foundUser)
      throw new HttpError('Unauthorized', {
        status: 401,
        friendlyMessage: 'Unauthorized',
      });

    // Create and return new access token
    const accessToken = jwt.sign(
      {
        user: foundUser,
      },
      ACCESS_TOKEN_SECRET,
      { expiresIn: '1000s' },
    );

    return { accessToken };
  } catch (error) {
    console.log(error);
    // Server error if something breaks in try/catch
    throw new Error('Internal Server Error');
  }
}
