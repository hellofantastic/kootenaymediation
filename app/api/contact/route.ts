import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request: NextRequest) {
  const data = await request.json();

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

  const messageFromWebForm = "Request for Consultation from: \n\n" + "Name: " + data.firstName + " " + data.lastName + "\n" + "Email: " + data.email + "\n" + "Phone: " + data.phone + "\n\n" + "Message: \n" + data.message + "\n";
  const autoResponseToUser =
    "Hello " + data.firstName + ",\n\n" + "Your request for consultation has been received by Kootenay Mediation." + "\n I will be responding to you shortly. \n\n" + "Judah Harrsion \n Kootenay Mediation \nBarrister & Solicitor";

  //Message to Kootany Mediation
  try {
    let info = await transporter.sendMail({
      from: `Kootenay Mediation WebForm Contact <${"hello@thegalacticdesignbureau.com"}>`,
      to: "dallas@thegalacticdesignbureau.com",
      subject: "Request for Mediation Consultation",
      text: messageFromWebForm,
    });
    if (info.messageId) {
      let info = await transporter.sendMail({
        from: `Kootenay Mediation <${"hello@thegalacticdesignbureau.com"}>`,
        to: data.email,
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
