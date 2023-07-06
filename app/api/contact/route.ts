import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request: NextRequest) {
  const data = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.dreamhost.com",
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: true,
    logger: true,
    debug: true,
    auth: {
      user: process.env.SMTP_USER || "user",
      pass: process.env.SMTP_PASS || "password",
    },
  });
  const messageFromWebForm = "Request for Consultation from: \n\n" + "Name: " + data.name + "\n" + "Email: " + data.email + "\n\n" + "Message: \n" + data.message + "\n";

  try {
    await transporter.sendMail({
      from: `Kootenay Mediation WebForm Contact <${"hello@thegalacticdesignbureau.com"}>`,
      to: "dallas@thegalacticdesignbureau.com",
      subject: "Request for Mediation Consultation",
      text: messageFromWebForm,
    });
    console.log("MAIL SUCCESS");
    return NextResponse.json({ message: "Request Sent" + process.version + Date.now() });
  } catch (err) {
    console.error("MAIL ERROR", err);
    return NextResponse.json({ message: "Message Send Error" + process.version + Date.now() });
  }
}
export const dynamic = "force-static";
