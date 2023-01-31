import nodemailer from 'nodemailer';

// TODO: change this email and put in ENV variables. Explore sendgrid options

// Create nodemailer client to use in different services
const nodemailerClient = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'krustykrabtesting@gmail.com',
    pass: 'agunhexcejdsnngo',
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default nodemailerClient;
