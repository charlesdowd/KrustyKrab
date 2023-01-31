import crypto from 'crypto';
import { HttpError } from '../../interfaces/Errors';
import { User } from '../../models';
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

  // Create a new user - nothing but an email and emailToken
  const newUser = await User.create({
    email,
    emailToken: crypto.randomBytes(64).toString('hex'),
  });

  // Send out verification email
  const mailOptions = {
    to: email,
    from: ` "Verify your email" <krustykrabtesting@gmail.com`,
    subject: 'KrustyKrab - verify your email',
    html: `<h2>${email}! Thanks for registering on our site </h2>
        <h4> Please verify your email to continue... </h4>
        <a href=http://localhost:3000/verify-email?token=${newUser.emailToken}>Verify Email</a>`,
  };

  await NotificationsServices.sendEmail(mailOptions);
}
