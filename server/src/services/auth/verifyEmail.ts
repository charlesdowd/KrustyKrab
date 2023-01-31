import { IUserDocument, User } from '../../models';
import { HttpError } from '../../interfaces/Errors';

export async function verifyEmail(token: string): Promise<void> {
  const user: IUserDocument | null = await User.findOne({ emailToken: token });

  // If no user has this emailToken associated with them, throw error
  if (!user) {
    throw new HttpError('Email token does not belong to any user', {
      status: 409,
      friendlyMessage: 'Invalid emailToken',
    });
  }

  // Set emailVerified to true on user
  await User.findOneAndUpdate(user._id, { $set: { emailVerified: true } });
}
