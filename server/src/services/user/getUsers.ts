import { User, IUser } from '../../models';
import { BaseError } from '../../util/Errors';

export async function getUsers(): Promise<IUser[]> {
  try {
    return await User.find();
  } catch (error) {
    // Log error for server
    console.log(error);
    throw new BaseError('Error getting users');
  }
}
