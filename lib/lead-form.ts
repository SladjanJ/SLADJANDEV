export type LeadFormFields = {
  name: string;
  email: string;
  message: string;
};

export type LeadFormErrors = Partial<Record<keyof LeadFormFields, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLeadForm(fields: LeadFormFields): LeadFormErrors {
  const errors: LeadFormErrors = {};
  const name = fields.name.trim();
  const email = fields.email.trim();
  const message = fields.message.trim();

  if (!name) {
    errors.name = "Name is required.";
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (name.length > 100) {
    errors.name = "Name must be at most 100 characters.";
  }

  if (!email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!message) {
    errors.message = "Please tell us what you need.";
  } else if (message.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  } else if (message.length > 1000) {
    errors.message = "Message must be at most 1000 characters.";
  }

  return errors;
}

export function formatLeadEmailBody(fields: LeadFormFields, timestamp: string) {
  const name = fields.name.trim();
  const email = fields.email.trim();
  const message = fields.message.trim();

  const text = `NEW PORTFOLIO LEAD

Name:
${name}

Email:
${email}

Project Details:
${message}

Submitted:
${timestamp}`;

  const html = `<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
  <h2 style="margin: 0 0 16px; font-size: 18px; letter-spacing: 0.04em;">NEW PORTFOLIO LEAD</h2>
  <p style="margin: 0 0 8px;"><strong>Name:</strong><br />${escapeHtml(name)}</p>
  <p style="margin: 0 0 8px;"><strong>Email:</strong><br />${escapeHtml(email)}</p>
  <p style="margin: 0 0 8px;"><strong>Project Details:</strong><br />${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  <p style="margin: 0;"><strong>Submitted:</strong><br />${escapeHtml(timestamp)}</p>
</body>
</html>`;

  return { text, html };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
