import { ContactUsPayload } from "@/app/contact-us/page";
import nodemailer from "nodemailer";

export const runtime = 'edge';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export async function POST(request: Request) {
  try {
    const data: ContactUsPayload = await request.json()
    const subject = data.subject
    const email = data.emailAddress
    const name = data.name
    const message = data.message

    const info = await transporter.sendMail({
      from: `${name} ${email}`,
      to: "bar@example.com, baz@example.com",
      subject: subject,
      text: `${message}`,
      html: `<p>${message}</>`,
    });

    return new Response(
      JSON.stringify({ success: true, messageId: info.messageId }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
