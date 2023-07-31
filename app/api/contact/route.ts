import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request: NextRequest) {
  const data = await request.json();
  const firstName = data.firstName;
  const lastName = data.lastName;
  const email = data.email;
  const phone = data.phone;
  const message = data.message;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.example.com",
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: true,
    logger: true,
    debug: true,
    auth: {
      user: process.env.SMTP_USER || "user",
      pass: process.env.SMTP_PASS || "password",
    },
  });

  const messageFromWebForm =
    "Request for Consultation from: \n\n" +
    "Name: " +
    firstName +
    " " +
    lastName +
    "\n" +
    "Email: " +
    email +
    "\n" +
    "Phone: " +
    phone +
    "\n\n" +
    "Message: \n" +
    message +
    "\n";
  const autoResponseToUser =
    "Hello " +
    firstName +
    ",\n\n" +
    "Your request for consultation has been received by Kootenay Mediation." +
    "\n I will be responding to you shortly. \n\n" +
    "Judah Harrison \nKootenay Mediation \nBarrister & Solicitor";

  //Message to Kootany Mediation
  try {
    let info = await transporter.sendMail({
      from: `Kootenay Mediation WebForm Contact <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_RECIPIENT,
      subject: "Request for Mediation Consultation",
      text: messageFromWebForm,
    });
    if (info.messageId) {
      let info = await transporter.sendMail({
        from: `Kootenay Mediation <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Kootenay Mediation Consultation",
        text: autoResponseToUser,
      });
    }
    return NextResponse.json(
      { message: "Request Sent" + process.version + Date.now() },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error("MAIL ERROR", err);
    return NextResponse.json({ message: "Message Send Error" + process.version + Date.now() });
  }
}
export const dynamic = "force-static";
