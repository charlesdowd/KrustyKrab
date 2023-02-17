import { sendEmail } from './sendEmail';

export async function sendRegisterEmail(email: string, emailToken: string) {
  // Send out verification email
  const mailOptions = {
    to: email,
    from: `"Verify your email" <krustykrabtesting@gmail.com>`,
    subject: 'KrustyKrab - verify your email',
    html: `<h2>Thanks for registering on our site </h2>
          <h4>Please verify your email to continue...</h4>
          <button>
            <a href=http://localhost:3000/verify-email?emailToken=${emailToken}>
              Verify Email
            </a>
          </button>`,
  };

  await sendEmail(mailOptions);
}