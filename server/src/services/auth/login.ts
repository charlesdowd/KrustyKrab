import jwt, { Secret } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { HttpStatusError } from 'common-errors';
import { User, IUser } from '../../models';

// This just creates the users access + refresh tokens, nothing more
export async function login(email: string, password: string) {
  // Check if all fields are present
  if (!email || !password) {
    throw new HttpStatusError(400, 'All fields are required');
  }

  // Check if user exists
  const foundUser: IUser | null = await User.findOne({ email });
  if (!foundUser) {
    throw new HttpStatusError(401, 'User does not exist');
  }

  // Check to see if password matches
  const match = await bcrypt.compare(password, foundUser.password || '');
  if (!match) {
    throw new HttpStatusError(401, 'Incorrect password');
  }

  // Create access token with user object
  const accessToken = jwt.sign(
    { user: foundUser },
    process.env.ACCESS_TOKEN_SECRET as Secret,
    { expiresIn: 30 }, // 30 seconds for now as I test
  );

  // Create refresh token
  const refreshToken = jwt.sign(
    { user: foundUser },
    process.env.REFRESH_TOKEN_SECRET as Secret,
    {
      expiresIn: '5d',
    },
  );

  return { refreshToken, accessToken };
}
