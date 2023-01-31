import crypto from 'crypto';
import { HttpError } from '../../interfaces/Errors';
import { IUser, User } from '../../models';
import NotificationsServices from '../notifications';

export async function register(email: string): Promise<void> {
  const user = await User.findOne({ email });

  // If email already exists throw error
  if (user) {
    throw new HttpError('Email already in use.', {
      status: 409,
      friendlyMessage:
        'This email already exists. Please try again with a different email.',
    });
  }

  // Create a new user object, wait until email has been sent to save the user
  const newUser: IUser = {
    email,
    emailToken: crypto.randomBytes(64).toString('hex'),
  };

  // Send out verification email
  const mailOptions = {
    to: email,
    from: `"Verify your email" <krustykrabtesting@gmail.com>`,
    subject: 'KrustyKrab - verify your email',
    html: `<h2>Thanks for registering on our site </h2>
        <h4>Please verify your email to continue...</h4>
        <button>
          <a href=http://localhost:3000/verify-email?emailToken=${newUser.emailToken}>
            Verify Email
          </a>
        </button>`,
  };

  await NotificationsServices.sendEmail(mailOptions);

  // Email has been successfully sent, save the user to the db
  await User.create(newUser);
  console.log('NEW USER CREATED');
}
