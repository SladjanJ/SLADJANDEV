import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/lib/constants";
import { formatLeadEmailBody, validateLeadForm } from "@/lib/lead-form";

type LeadRequestBody = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadRequestBody;

    if (body.website?.trim()) {
      return NextResponse.json({ ok: true });
    }

    const fields = {
      name: body.name ?? "",
      email: body.email ?? "",
      message: body.message ?? "",
    };

    const errors = validateLeadForm(fields);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ error: "Validation failed.", errors }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const timestamp = new Date().toISOString();
    const trimmedName = fields.name.trim();
    const trimmedEmail = fields.email.trim();
    const { text, html } = formatLeadEmailBody(fields, timestamp);

    const fromEmail =
      process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: CONTACT_EMAIL,
      replyTo: trimmedEmail,
      subject: `Website Inquiry — ${trimmedName}`,
      text,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead form error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
