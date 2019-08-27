import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

const sendMail = email => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

export const sendVerificationEmail = (adress, secret) => {
  const email = {
    from: "kapri@nuber.com",
    to: adress,
    subject: "🔒Login Secret for Nuber🔒",
    html: `Verify your email by clicking <a href="http://nuber.com/verification/${secret}>here</a>`
  };
  return sendMail(email);
};

export default sendVerificationEmail;
