import { HttpStatusError } from 'common-errors';
import { User, IUser } from '../../models';

export async function getUser(userId: string): Promise<IUser> {
  const user = await User.findById(userId);

  // No user, throw correct error
  if (!user) throw new HttpStatusError(401, 'User does not exist');

  return user;
}
