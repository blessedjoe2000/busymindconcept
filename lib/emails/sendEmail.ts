import nodemailer from "nodemailer";

interface EmailProps {
  name: string;
  email: string;
  message: string;
}

const sendEmail = async ({
  name,
  email,
  message,
}: EmailProps): Promise<void> => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Busy Mind Concept" <${process.env.ADMIN_EMAIL}>`,
    to: process.env.ADMIN_NOTIFY_EMAIL,
    subject: "Message from Contact Us Form",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });
};

export default sendEmail;
