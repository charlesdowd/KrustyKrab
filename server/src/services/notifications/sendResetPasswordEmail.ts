import { sendEmail } from './sendEmail';

export async function sendResetPasswordEmail(
  email: string,
  resetToken: string,
): Promise<void> {
  const mailOptions = {
    to: email,
    from: `"Krusty Krab" <krustykrabtesting@gmail.com>`,
    subject: 'Password Reset',
    html: `<h2>Click the link below to reset your password</h2>
          <h4>If you did not request to reset your password, please ignore this</h4>
          <button>
            <a href=http://localhost:3000/reset-password?resetToken=${resetToken}>
              Reset Password
            </a>
          </button>`,
  };

  await sendEmail(mailOptions);
}
