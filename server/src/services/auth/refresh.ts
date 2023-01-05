import jwt from 'jsonwebtoken';
import { User } from '../../models';

const { REFRESH_TOKEN_SECRET = '' } = process.env;

export async function refresh(refreshToken: string) {
  try {
    // Cast decoded object to any - not the best practice
    const decoded: any = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
    const foundUser = User.findOne({ username: decoded.username });
    if (!foundUser) throw new Error();
  } catch (error) {
    console.log('Error decoding refresh token');
    throw new Error();
  }
}
