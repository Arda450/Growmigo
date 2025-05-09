"use server";
import nodemailer from "nodemailer";
// SMTP Server Host
const SMTP_SERVER_HOST = "smtp.gmail.com";
// SMTP Server Username
const SMTP_SERVER_USERNAME = process.env.GOOGLE_EMAIL;
// SMTP Server Password
const SMTP_SERVER_PASSWORD = process.env.GOOGLE_PASSWORD;
// Site Mail Reciever
const SITE_MAIL_RECIEVER = process.env.SITE_EMAIL_RECEIVER;
// Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: SMTP_SERVER_HOST,
  port: 465,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function sendMail({
  email,
  sendTo,
  subject,
  text,
  html,
}: {
  email: string;
  sendTo?: string;
  subject: string;
  text: string;
  html?: string;
}) {
  try {
    const info = await transporter.sendMail({
      from: email,
      to: sendTo || SITE_MAIL_RECIEVER,
      subject: subject,
      text: text,
      html: html ? html : "",
    });

    console.log("Message Sent", info.messageId);
    console.log("Mail sent to", SITE_MAIL_RECIEVER);
    return info;
  } catch (error) {
    console.error("Email sending failed:", error);
    return { error: true, message: (error as Error).message };
  }
}
