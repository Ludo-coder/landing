import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    await resend.emails.send({
      from: process.env.NEXT_EMAIL_FROM!,
      to: process.env.NEXT_EMAIL_TO!,
      subject: `Nouveau message de ${name}`,
      html: `<p>Adresse mail : ${email},</p>
    <p>Message :<br>${message}</p>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log(error);
    return new Response("Erreur lors de l'envoi", { status: 500 });
  }
}
