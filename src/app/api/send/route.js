import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log(email);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email, // Set this to your own email address
    to: process.env.GMAIL_USERNAME,
    subject: subject,
    text: `From: ${email}\n\n${message}`, // Include the sender's email in the message body
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
    return NextResponse.json(
      { status: "success", message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { status: "false", message: "Email not sent " },
      { status: 500 }
    );
  }
}
