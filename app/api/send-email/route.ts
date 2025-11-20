import { ContactUsPayload } from "@/app/contact-us/page";

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const data: ContactUsPayload = await request.json()
    const subject = data.subject
    const email = data.emailAddress
    const name = data.name
    const message = data.message

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${process.env.API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: "message@contact.indigenoustruthtelling.net",
        to: 'johwuy@gmail.com',
        subject: subject,
        html: `<p>From: ${name} (${email}):<br/> ${message}</>`
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error:', response.status, errorText);
      return;
    }

    return new Response(
      JSON.stringify({ success: true }),
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
