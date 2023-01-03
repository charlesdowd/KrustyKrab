import { User, IUser } from '../../models';

export async function getUsers(): Promise<IUser[]> {
  try {
    return await User.find({});
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}
