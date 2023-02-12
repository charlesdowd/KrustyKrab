import { User } from '../../models';

export async function approveAccount(userId: string): Promise<void> {
  await User.findOneAndUpdate({ _id: userId }, { $set: { approved: true } });
}
