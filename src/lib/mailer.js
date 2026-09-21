import "server-only";
import nodemailer from "nodemailer";

const RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || "neosoftix@gmail.com";

function getTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

export async function sendContactEmail({ subject, fields, replyTo }) {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error(
      "Email is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD in your environment."
    );
  }

  const rows = Object.entries(fields)
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;font-weight:bold;vertical-align:top;">${label}</td><td style="padding:6px 12px;">${String(
          value
        ).replace(/\n/g, "<br/>")}</td></tr>`
    )
    .join("");

  const transporter = getTransporter();

  await transporter.sendMail({
    from: `"NeoSoftix Website" <${process.env.GMAIL_USER}>`,
    to: RECEIVER_EMAIL,
    replyTo: replyTo || undefined,
    subject,
    html: `<table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">${rows}</table>`,
  });
}
