import sendEmail from "@/lib/emails/sendEmail";
import { NextRequest } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextRequest): Promise<Response> {
  try {
    const body: ContactFormData = await req.json();
    const { name, email, message } = body;

    await sendEmail({ name, email, message });

    return new Response(JSON.stringify("success"), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
    });
  }
}
