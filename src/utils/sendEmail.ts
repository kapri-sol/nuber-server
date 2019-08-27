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

export const sendVerificationtEmail = (adress, secret) => {
  const email = {
    from: "kapri@nuber.com",
    to: adress,
    subject: "🔒Login Secret for Prismagram🔒",
    html: `Hello! Your login secret it ${secret}.<br/>Copy paste on the app/website to log in`
  };
  return sendMail(email);
};

export default sendVerificationtEmail;
