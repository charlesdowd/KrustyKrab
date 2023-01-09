import { HttpStatusError } from 'common-errors';
import { User, IUser } from '../../models';

export async function getUser(userId: string): Promise<IUser> {
  try {
    const user = await User.findById(userId);
    // User is not found, throw error which will be caught by catch block below
    if (!user) throw new Error();

    // Return found user
    return user;
  } catch (error) {
    // Log error for server
    console.log(error);
    throw new HttpStatusError(401, 'User does not exist');
  }
}
