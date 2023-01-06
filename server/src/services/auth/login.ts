import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { HttpStatusError, Error } from 'common-errors';
import { User, IUser } from '../../models';

// Set default value so there are no type errors
const { ACCESS_TOKEN_SECRET = '', REFRESH_TOKEN_SECRET = '' } = process.env;

// This just creates the users access + refresh tokens, nothing more
export async function login(username: string, password: string) {
  try {
    // Check if all fields are present
    if (!username || !password) {
      throw new HttpStatusError(400, 'All fields are required');
    }

    // Check if user exists
    const foundUser: IUser | null = await User.findOne({ username });
    if (!foundUser) {
      throw new HttpStatusError(401, 'User does not exist');
    }

    // Check to see if password matches
    const match = bcrypt.compare(password, foundUser.password);
    if (!match) {
      throw new HttpStatusError(401, 'Incorrect password');
    }

    // Create access token
    const accessToken = jwt.sign(
      { UserInfo: { username } },
      ACCESS_TOKEN_SECRET,
      { expiresIn: 10 },
    );

    // Create refresh token
    const refreshToken = jwt.sign({ username }, REFRESH_TOKEN_SECRET, {
      expiresIn: '1d',
    });

    return { refreshToken, accessToken };
  } catch (error) {
    // Throw basic server error for middleware to catch if something goes wrong
    throw new Error('Internal Error');
  }
}
