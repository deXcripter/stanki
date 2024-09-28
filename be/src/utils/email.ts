import nodemailer from 'nodemailer';

// TODO 1: Implement the sendEmail function
const sendEmail = async (email: string, subject: string, text: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject,
    text,
  });
};

export default sendEmail;
