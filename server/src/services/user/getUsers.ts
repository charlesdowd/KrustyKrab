import { HttpStatusError } from 'common-errors';
import { User, IUser } from '../../models';

export async function getUsers(): Promise<IUser[]> {
  try {
    return await User.find();
  } catch (error) {
    // Log error for server
    console.log(error);
    throw new HttpStatusError(500, 'Error getting users');
  }
}
