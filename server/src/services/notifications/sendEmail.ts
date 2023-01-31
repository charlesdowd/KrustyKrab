import nodemailerClient from './nodemailerClient';
import { BaseError } from '../../interfaces/Errors';

export async function sendEmail(mailOptions: {
  to: string;
  from: string;
  subject: string;
  html: string;
}) {
  try {
    await nodemailerClient.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
    throw new BaseError('Error in sending email with nodemailer');
  }
}
