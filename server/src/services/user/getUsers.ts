import { User, IUser } from '../../models';

export async function getUsers(): Promise<IUser[]> {
  return User.find({});
}
