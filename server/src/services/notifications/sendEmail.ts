import nodemailer from 'nodemailer';
import { BaseError } from '../../interfaces/Errors';

// TODO: audit this entire mail set up to make sure it is safe and works in production
export async function sendEmail(mailOptions: {
  to: string;
  from: string;
  subject: string;
  html: string;
}) {
  try {
    // Set up transporter which sends the email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'krustykrabtesting@gmail.com',
        pass: 'Krustykrabpizza1!',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new BaseError('Error in sending email with nodemailer');
  }
}
