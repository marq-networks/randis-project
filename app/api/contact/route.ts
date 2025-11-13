import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";
import sgMail from "@sendgrid/mail";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
};

// ------------------------------
// Reusable email templates (HTML + Text)
// ------------------------------
const BRAND_NAME = "Rutledge & Associates";
const COLORS = {
  bg: "#f8fafc",
  card: "#ffffff",
  border: "#e2e8f0",
  text: "#0f172a",
  muted: "#475569",
  primary: "#0b5fff",
};

function wrapEmail(content: string): string {
  return `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>${BRAND_NAME} Message</title>
    </head>
    <body style="margin:0;padding:24px;background:${COLORS.bg};font-family:Arial,Helvetica,sans-serif;color:${COLORS.text}">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td align="center">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;background:${COLORS.card};border:1px solid ${COLORS.border};border-radius:12px;overflow:hidden">
              <tr>
                <td style="background:${COLORS.card};padding:20px;border-bottom:1px solid ${COLORS.border}">
                  <div style="font-size:18px;font-weight:700;color:${COLORS.text}">${BRAND_NAME}</div>
                </td>
              </tr>
              <tr>
                <td style="padding:24px">${content}</td>
              </tr>
              <tr>
                <td style="padding:16px 24px;border-top:1px solid ${COLORS.border};color:${COLORS.muted};font-size:12px">
                  This is an automated message from ${BRAND_NAME}. If you didn’t request this, you can ignore it.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
}

function fieldRow(label: string, value?: string): string {
  if (!value) return "";
  return `<div style="margin:6px 0"><span style="color:${COLORS.muted}">${label}:</span> <span style="color:${COLORS.text}">${value}</span></div>`;
}

function adminEmailHtml(p: ContactPayload): string {
  const content = `
    <h2 style="margin:0 0 12px;color:${COLORS.text}">New Contact Submission</h2>
    ${fieldRow("Name", p.name)}
    ${fieldRow("Email", p.email)}
    ${fieldRow("Company", p.company)}
    ${fieldRow("Phone", p.phone)}
    <div style="margin:16px 0;padding:12px;border:1px solid ${COLORS.border};border-radius:8px;background:${COLORS.bg}">
      <div style="margin-bottom:6px;color:${COLORS.muted}">Message:</div>
      <div style="white-space:pre-line;color:${COLORS.text}">${p.message || ""}</div>
    </div>
  `;
  return wrapEmail(content);
}

function adminEmailText(p: ContactPayload): string {
  return `New Contact Submission\n\nName: ${p.name}\nEmail: ${p.email}\nCompany: ${p.company || "-"}\nPhone: ${p.phone || "-"}\n\nMessage:\n${p.message || ""}`;
}

function confirmationEmailHtml(p: ContactPayload): string {
  const content = `
    <h2 style="margin:0 0 12px;color:${COLORS.text}">Thanks for contacting ${BRAND_NAME}</h2>
    <p style="margin:0 0 12px;color:${COLORS.text}">Hi ${p.name || "there"},</p>
    <p style="margin:0 0 12px;color:${COLORS.text}">Thanks for reaching out. We received your message and will get back to you shortly.</p>
    <div style="margin:16px 0;padding:12px;border:1px solid ${COLORS.border};border-radius:8px;background:${COLORS.bg}">
      <div style="margin-bottom:6px;color:${COLORS.muted}">Your message:</div>
      <div style="white-space:pre-line;color:${COLORS.text}">${p.message || ""}</div>
    </div>
    <p style="margin:12px 0 0;color:${COLORS.muted}">Best regards,<br/>${BRAND_NAME}</p>
  `;
  return wrapEmail(content);
}

function confirmationEmailText(p: ContactPayload): string {
  return `Hi ${p.name || "there"},\n\nThanks for reaching out to ${BRAND_NAME}. We received your message and will get back to you shortly.\n\nYour message:\n${p.message || ""}\n\nBest regards,\n${BRAND_NAME}`;
}

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
    const sendgridApiKey = process.env.SENDGRID_API_KEY;
    const sendgridFrom = process.env.SENDGRID_FROM || smtpUser || smtpFrom || `Rutledge & Associates <no-reply@rutledge.associates>`;

    const hasSMTP = Boolean(smtpHost && smtpPort && smtpUser && smtpPass);
    const hasResend = Boolean(resendApiKey);
    const hasSendgrid = Boolean(sendgridApiKey);
    const provider: "smtp" | "resend" | "sendgrid" | "ethereal" = hasSMTP ? "smtp" : (hasResend ? "resend" : (hasSendgrid ? "sendgrid" : "ethereal"));
    console.log("Email provider selected", { provider, hasSMTP, hasResend, hasSendgrid, smtpHost: Boolean(smtpHost) });

    let transporter: nodemailer.Transporter;
    let usesTestAccount = false;

    if (provider === "resend") {
      // Use Resend API when SMTP is incomplete but Resend is configured (reliable on Vercel)
      const resend = new Resend(resendApiKey!);
      const toAddress = process.env.CONTACT_TO || "rrutledge@rutledge.associates";
      const bccAddress = process.env.CONTACT_BCC || "saif@marqnetworks.com";
      const subject = `New Contact Submission – ${name}`;
      const textBody = adminEmailText({ name, email, company, phone, message });
      const htmlBody = adminEmailHtml({ name, email, company, phone, message });
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
          text: confirmationEmailText({ name, message }),
          html: confirmationEmailHtml({ name, message }),
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

    if (provider === "sendgrid") {
      // Use SendGrid API when configured
      sgMail.setApiKey(sendgridApiKey!);
      const toAddress = process.env.CONTACT_TO || "rrutledge@rutledge.associates";
      const bccAddress = process.env.CONTACT_BCC || "saif@marqnetworks.com";
      const subject = `New Contact Submission – ${name}`;
      const textBody = adminEmailText({ name, email, company, phone, message });
      const htmlBody = adminEmailHtml({ name, email, company, phone, message });
      const msg = {
        to: toAddress,
        bcc: bccAddress,
        from: sendgridFrom,
        replyTo: email,
        subject,
        text: textBody,
        html: htmlBody,
      };
      try {
        const [sendRes] = await sgMail.send(msg);
        console.log("Contact mail sent via SendGrid", { statusCode: sendRes?.statusCode });
      } catch (e) {
        console.error("SendGrid contact mail failed", e);
        return NextResponse.json({ error: "Failed to send message.", provider }, { status: 500 });
      }
      // confirmation via SendGrid (non-blocking)
      try {
        const [confRes] = await sgMail.send({
          to: email!,
          from: sendgridFrom,
          subject: `Thanks for contacting Rutledge & Associates`,
          text: confirmationEmailText({ name, message }),
          html: confirmationEmailHtml({ name, message }),
        });
        console.log("Confirmation mail sent via SendGrid", { statusCode: confRes?.statusCode });
      } catch (e) {
        console.warn("Confirmation email via SendGrid failed", e);
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
      text: adminEmailText({ name, email, company, phone, message }),
      html: adminEmailHtml({ name, email, company, phone, message }),
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
        text: confirmationEmailText({ name, message }),
        html: confirmationEmailHtml({ name, message }),
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