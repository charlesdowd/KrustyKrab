import { sendEmail } from './sendEmail';

export async function sendAccountApprovedEmail(email: string) {
  // Send out account approved email
  const mailOptions = {
    to: email,
    from: `"Krusty Krab" <krustykrabtesting@gmail.com>`,
    subject: 'Your Account has been approved!',
    html: `<h2>Your Account has been approved by Lagniappe </h2>
          <h4>You now can create and place orders with us. Visit our products page to get started.</h4>
          <button>
            <a href=http://localhost:3000/products>
              Products Page
            </a>
          </button>`,
  };

  await sendEmail(mailOptions);
}
