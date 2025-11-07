import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const data: ContactPayload = await req.json();
    const { name, email, company, phone, message } = data || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message." },
        { status: 400 }
      );
    }

    // Prefer real SMTP via env; otherwise use Ethereal for preview
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    let transporter: nodemailer.Transporter;
    let usesTestAccount = false;

    if (smtpHost && smtpPort && smtpUser && smtpPass) {
      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // true for 465, false for other ports
        auth: { user: smtpUser, pass: smtpPass },
      });
    } else {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: { user: testAccount.user, pass: testAccount.pass },
      });
      usesTestAccount = true;
    }

    const toAddress = "rrutledge@rutledge.associates";

    const info = await transporter.sendMail({
      from: `Rutledge & Associates <no-reply@rutledge.associates>`,
      replyTo: email,
      to: toAddress,
      subject: `New Contact Submission – ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || ""}\nPhone: ${phone || ""}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;font-size:14px;color:#111">
          <h2 style="margin:0 0 12px">New Contact Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <hr/>
          <p style="white-space:pre-line"><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
    });

    const previewUrl = usesTestAccount ? nodemailer.getTestMessageUrl(info) : undefined;

    return NextResponse.json({ ok: true, previewUrl });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}

export const dynamic = "force-dynamic"; // ensure route runs on server