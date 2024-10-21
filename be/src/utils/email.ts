import nodemailer from 'nodemailer';

const sendEmail = async (email: string, subject: string, text: string) => {
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  return new Promise<void>((resolve, reject) => {
    transport.sendMail(
      {
        from: process.env.EMAIL_USERNAME,
        to: email,
        subject,
        text,
      },
      (err, info) => {
        if (err) reject(err);
        resolve();
      },
    );
  });
};

export default sendEmail;
