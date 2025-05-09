import { Resend } from "resend";
import { NextRequest } from "next/server";
import EmailTemplate from "@/lib/emails/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextRequest): Promise<Response> {
  try {
    const body: ContactFormData = await req.json();
    const ourEmail = "info@busymindconcept";
    const { name, email, message } = body;

    const formData = await resend.emails.send({
      from: "Busy Mind Concept <info@busymindconcept>",
      to: [ourEmail],
      subject: "Message from Contact Us Form",
      react: <EmailTemplate name={name} email={email} message={message} />,
    });

    return new Response(JSON.stringify(formData), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
    });
  }
}
