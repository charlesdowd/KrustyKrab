import { User, IUser } from '../../models';

export async function createUser(payload: IUser) {
  try {
    await User.create(payload);
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}
