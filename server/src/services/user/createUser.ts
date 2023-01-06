import { User, IUser } from '../../models';

export async function createUser(payload: IUser) {
  return User.create(payload);
}
