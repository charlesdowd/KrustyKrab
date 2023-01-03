import { User, IUser } from '../../models';

export async function getUser(userId: string): Promise<IUser | null> {
  try {
    return await User.findById(userId);
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}
