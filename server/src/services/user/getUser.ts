import { User, IUser } from '../../models';
import { BaseError } from '../../util/Errors';

export async function getUser(userId: string): Promise<IUser> {
  try {
    const user = await User.findById(userId);
    // User is not found, throw error which will be caught by catch block below
    if (!user) throw new Error('User does not exist');

    // Return found user
    return user;
  } catch (error) {
    // Log error for server
    console.log(error);
    throw new BaseError('Failed getting user info', {
      friendlyMessage: 'Error getting user',
    });
  }
}
