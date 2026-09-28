"use server";

import { redirect } from "next/navigation";
import { sendContactEmail } from "@/lib/mailer";

export type ContactFormState = { error: string } | undefined;

function errorMessage(err: unknown): string {
  return (err instanceof Error && err.message) || "Something went wrong. Please try again.";
}

export async function submitHomeContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const firstName = formData.get("firstName")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const company = formData.get("company")?.toString().trim() ?? "";
  const website = formData.get("website")?.toString().trim() ?? "";
  const region = formData.get("region")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!firstName || !email || !message) {
    return { error: "Please fill in your name, email, and message." };
  }

  try {
    await sendContactEmail({
      subject: `New Enquiry from Home Page — ${firstName}`,
      replyTo: email,
      fields: {
        "First Name": firstName,
        Email: email,
        Company: company,
        Website: website,
        Region: region,
        Message: message,
      },
    });
  } catch (err) {
    return { error: errorMessage(err) };
  }

  redirect("/thank-you");
}

export async function submitContactPageForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const fullName = formData.get("fullName")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const service = formData.get("service")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!fullName || !email || !message) {
    return { error: "Please fill in your name, email, and message." };
  }

  try {
    await sendContactEmail({
      subject: `New Enquiry from Contact Page — ${fullName}`,
      replyTo: email,
      fields: {
        "Full Name": fullName,
        Email: email,
        Phone: phone,
        Service: service,
        Message: message,
      },
    });
  } catch (err) {
    return { error: errorMessage(err) };
  }

  redirect("/thank-you");
}
