import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";

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

    // Read provider env and decide provider
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM;
    const resendApiKey = process.env.RESEND_API_KEY;
    const resendFrom = process.env.RESEND_FROM || smtpUser || smtpFrom || `Rutledge & Associates <no-reply@rutledge.associates>`;

    const hasSMTP = Boolean(smtpHost && smtpPort && smtpUser && smtpPass);
    const hasResend = Boolean(resendApiKey);
    const provider: "smtp" | "resend" | "ethereal" = hasSMTP ? "smtp" : (hasResend ? "resend" : "ethereal");
    console.log("Email provider selected", { provider, hasSMTP, hasResend, smtpHost: Boolean(smtpHost) });

    let transporter: nodemailer.Transporter;
    let usesTestAccount = false;

    if (provider === "resend") {
      // Use Resend API when SMTP is incomplete but Resend is configured (reliable on Vercel)
      const resend = new Resend(resendApiKey!);
      const toAddress = process.env.CONTACT_TO || "rrutledge@rutledge.associates";
      const bccAddress = process.env.CONTACT_BCC || "saif@marqnetworks.com";
      const subject = `New Contact Submission – ${name}`;
      const textBody = `Name: ${name}\nEmail: ${email}\nCompany: ${company || ""}\nPhone: ${phone || ""}\n\nMessage:\n${message}`;
      const htmlBody = `
        <div style="font-family:Arial,sans-serif;font-size:14px;color:#111">
          <h2 style="margin:0 0 12px">New Contact Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <hr/>
          <p style="white-space:pre-line"><strong>Message:</strong><br/>${message}</p>
        </div>
      `;
      const sendResult = await resend.emails.send({
        from: resendFrom,
        to: toAddress,
        bcc: bccAddress,
        subject,
        text: textBody,
        html: htmlBody,
        replyTo: email,
      });
      if (sendResult.error) {
        console.error("Resend contact mail failed", sendResult.error);
        return NextResponse.json({ error: "Failed to send message.", provider }, { status: 500 });
      }
      console.log("Contact mail sent via Resend", { id: sendResult.data?.id });
      // confirmation via Resend (non-blocking)
      try {
        const confirmation = await resend.emails.send({
          from: resendFrom,
          to: email!,
          subject: `Thanks for contacting Rutledge & Associates`,
          text: `Hi ${name},\n\nThanks for reaching out to Rutledge & Associates. We received your message and will get back to you shortly.\n\nYour message:\n${message}\n\nBest regards,\nRutledge & Associates`,
          html: `
            <div style=\"font-family:Arial,sans-serif;font-size:14px;color:#111\">
              <h2 style=\"margin:0 0 12px\">Thanks for contacting Rutledge & Associates</h2>
              <p>Hi ${name},</p>
              <p>Thanks for reaching out. We received your message and will get back to you shortly.</p>
              <hr/>
              <p style=\"white-space:pre-line\"><strong>Your message:</strong><br/>${message}</p>
              <p style=\"margin-top:12px\">Best regards,<br/>Rutledge & Associates</p>
            </div>
          `,
        });
        if (confirmation.error) {
          console.warn("Resend confirmation mail failed", confirmation.error);
        } else {
          console.log("Confirmation mail sent via Resend", { id: confirmation.data?.id });
        }
      } catch (e) {
        console.warn("Confirmation email via Resend failed", e);
      }
      return NextResponse.json({ ok: true, provider });
    }

    // Otherwise use SMTP when fully configured; else Ethereal preview
    if (provider === "smtp") {
      transporter = nodemailer.createTransport({
        host: smtpHost!,
        port: smtpPort!,
        secure: smtpPort === 465,
        requireTLS: smtpPort === 587,
        auth: { user: smtpUser!, pass: smtpPass! },
        tls: { minVersion: 'TLSv1.2' },
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

    const toAddress = process.env.CONTACT_TO || "rrutledge@rutledge.associates";
    const bccAddress = process.env.CONTACT_BCC || "saif@marqnetworks.com"; // temporary BCC for delivery testing
    const fromAddress = smtpFrom ?? (smtpUser ? smtpUser : `Rutledge & Associates <no-reply@rutledge.associates>`);

    // Resend handled above; continue with SMTP/Ethereal transporter

    const info = await transporter.sendMail({
      from: smtpUser || fromAddress,
      replyTo: email,
      to: toAddress,
      bcc: bccAddress,
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

    const previewRaw = usesTestAccount ? nodemailer.getTestMessageUrl(info) : undefined;
    const previewUrl = typeof previewRaw === "string" ? previewRaw : undefined;
    console.log("Contact mail sent", { messageId: info.messageId, previewUrl, provider });
    // Send confirmation email to the sender (do not block main flow on failure)
    let confirmationPreviewUrl: string | undefined;
    try {
      const confirmationInfo = await transporter.sendMail({
        from: smtpUser || fromAddress,
        to: email,
        subject: `Thanks for contacting Rutledge & Associates`,
        text: `Hi ${name},\n\nThanks for reaching out to Rutledge & Associates. We received your message and will get back to you shortly.\n\nYour message:\n${message}\n\nBest regards,\nRutledge & Associates`,
        html: `
          <div style="font-family:Arial,sans-serif;font-size:14px;color:#111">
            <h2 style="margin:0 0 12px">Thanks for contacting Rutledge & Associates</h2>
            <p>Hi ${name},</p>
            <p>Thanks for reaching out. We received your message and will get back to you shortly.</p>
            <hr/>
            <p style="white-space:pre-line"><strong>Your message:</strong><br/>${message}</p>
            <p style="margin-top:12px">Best regards,<br/>Rutledge & Associates</p>
          </div>
        `,
      });
      const confirmationRaw = usesTestAccount ? nodemailer.getTestMessageUrl(confirmationInfo) : undefined;
      confirmationPreviewUrl = typeof confirmationRaw === "string" ? confirmationRaw : undefined;
      console.log("Confirmation mail sent", { messageId: confirmationInfo.messageId, confirmationPreviewUrl, accepted: confirmationInfo.accepted, rejected: confirmationInfo.rejected, envelope: confirmationInfo.envelope, provider });
    } catch (e) {
      console.warn("Confirmation email failed", e);
    }

    return NextResponse.json({ ok: true, previewUrl, confirmationPreviewUrl, provider });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}

export const dynamic = "force-dynamic"; // ensure route runs on server
export const runtime = "nodejs";