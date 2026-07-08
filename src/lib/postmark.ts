import { ServerClient } from "postmark";
import { recordEmailOutbox, type AttachmentMeta } from "@/lib/email-outbox";

export const postmarkClient = new ServerClient(
  process.env.POSTMARK_API_TOKEN!
);

export const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL ?? "kontakt@hydrobagger.pl";

export type TrackedEmailAttachment = {
  Name: string;
  Content: string;
  ContentType: string;
  ContentID: string;
};

export type SendTrackedEmailInput = {
  /** Rodzaj maila widoczny w panelu, np. "contact", "job_application". */
  kind: string;
  /** Krótki znacznik Postmark (tag), do filtrowania w panelu i w Postmarku. */
  tag: string;
  to: string;
  replyTo?: string;
  subject: string;
  htmlBody: string;
  textBody: string;
  attachments?: TrackedEmailAttachment[];
  fromLabel?: string;
};

export type SendTrackedEmailResult = {
  sent: boolean;
  messageId: string | null;
  errorMessage: string | null;
};

/**
 * Wysyła mail przez Postmark i niezależnie od wyniku loguje próbę w
 * `email_outbox` (widoczne w panelu: mngmt.hydrobagger.pl/wysylka-maili).
 * Log nigdy nie blokuje ani nie psuje wysyłki — patrz `recordEmailOutbox`.
 */
export async function sendTrackedEmail(
  input: SendTrackedEmailInput
): Promise<SendTrackedEmailResult> {
  const from = `${input.fromLabel ?? "HydroBagger"} <${CONTACT_EMAIL}>`;
  const attachmentsMeta: AttachmentMeta[] = (input.attachments ?? []).map((a) => ({
    name: a.Name,
    contentType: a.ContentType,
    sizeBytes: Math.ceil((a.Content.length * 3) / 4),
  }));

  try {
    const result = await postmarkClient.sendEmail({
      From: from,
      To: input.to,
      ReplyTo: input.replyTo,
      Subject: input.subject,
      HtmlBody: input.htmlBody,
      TextBody: input.textBody,
      Attachments: input.attachments,
      MessageStream: "outbound",
      Tag: input.tag,
    });

    await recordEmailOutbox({
      kind: input.kind,
      tag: input.tag,
      subject: input.subject,
      recipient: input.to,
      status: "sent",
      fromEmail: from,
      replyToEmail: input.replyTo ?? "",
      textBody: input.textBody,
      htmlBody: input.htmlBody,
      attachmentsMeta,
      messageId: result.MessageID ?? null,
    });

    return { sent: true, messageId: result.MessageID ?? null, errorMessage: null };
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);

    await recordEmailOutbox({
      kind: input.kind,
      tag: input.tag,
      subject: input.subject,
      recipient: input.to,
      status: "failed",
      fromEmail: from,
      replyToEmail: input.replyTo ?? "",
      textBody: input.textBody,
      htmlBody: input.htmlBody,
      attachmentsMeta,
      errorMessage,
    });

    return { sent: false, messageId: null, errorMessage };
  }
}

const EMAIL_LOGO_URL = "https://creva.b-cdn.net/Hydrobagger/logo_hydrobagger.png";

/**
 * Layout powiadomień mailowych HydroBagger (Postmark). Markup tabelkowy
 * z inline CSS - bezpieczny dla klientów poczty (Outlook, Gmail, Apple Mail).
 * Zmiany w wyglądzie odbij też w podglądzie panelu admina:
 * hydrobagger-admin/src/lib/email/system-email-templates.ts.
 */
export function buildNotificationHtml({
  title,
  rows,
  bodyLabel,
  bodyText,
  attachmentNames,
}: {
  title: string;
  rows: { label: string; value: string }[];
  bodyLabel: string;
  bodyText: string;
  attachmentNames?: string[];
}) {
  const rowsHtml = rows
    .map(
      ({ label, value }, idx) => `
    <tr>
      <td style="padding:11px 16px;border-top:${idx === 0 ? "none" : "1px solid #e8eef5"};color:#7c8b9d;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.04em;vertical-align:top;white-space:nowrap;width:150px;">${label}</td>
      <td style="padding:11px 16px 11px 0;border-top:${idx === 0 ? "none" : "1px solid #e8eef5"};color:#071e32;font-size:14px;font-weight:600;line-height:1.5;">${escapeHtml(value)}</td>
    </tr>`
    )
    .join("");

  const attachmentsHtml =
    attachmentNames && attachmentNames.length > 0
      ? `
        <tr>
          <td style="padding:6px 36px 0;">
            <p style="margin:0 0 8px;color:#7c8b9d;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;">Załączniki (${attachmentNames.length})</p>
            <p style="margin:0;line-height:2;">${attachmentNames
              .map(
                (n) =>
                  `<span style="display:inline-block;margin:0 6px 6px 0;padding:4px 12px;background:#f0f7fc;border:1px solid #d7e9f5;border-radius:999px;color:#075e8f;font-size:12px;font-weight:600;">${escapeHtml(n)}</span>`
              )
              .join("")}</p>
          </td>
        </tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body style="margin:0;padding:0;background-color:#edf2f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#edf2f7;">
    <tr>
      <td align="center" style="padding:36px 16px 44px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;">

          <tr>
            <td align="center" style="padding:0 0 22px;">
              <a href="https://hydrobagger.pl" style="text-decoration:none;">
                <img src="${EMAIL_LOGO_URL}" width="180" alt="HydroBagger" style="display:block;border:0;max-width:180px;height:auto;" />
              </a>
            </td>
          </tr>

          <tr>
            <td style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(7,30,50,.06);">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">

                <tr>
                  <td style="height:5px;background:#0284c7;background:linear-gradient(90deg,#071e32 0%,#0284c7 55%,#38bdf8 100%);font-size:0;line-height:0;">&nbsp;</td>
                </tr>

                <tr>
                  <td style="padding:30px 36px 4px;">
                    <p style="margin:0;color:#0284c7;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;">HydroBagger.pl &bull; Powiadomienie</p>
                    <h1 style="margin:8px 0 0;color:#071e32;font-size:23px;line-height:1.3;font-weight:700;">${escapeHtml(title)}</h1>
                  </td>
                </tr>

                <tr>
                  <td style="padding:22px 36px 0;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f7fafc;border:1px solid #e8eef5;border-radius:12px;border-collapse:separate;">
                      ${rowsHtml}
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding:26px 36px 8px;">
                    <p style="margin:0 0 10px;color:#7c8b9d;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;">${escapeHtml(bodyLabel)}</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="width:3px;background:#0284c7;border-radius:3px;font-size:0;line-height:0;">&nbsp;</td>
                        <td style="padding:2px 0 2px 16px;color:#1e293b;font-size:15px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(bodyText)}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ${attachmentsHtml}

                <tr>
                  <td style="padding:26px 36px 28px;">
                    <p style="margin:0;padding-top:20px;border-top:1px solid #eef2f7;color:#94a3b8;font-size:12px;line-height:1.6;">
                      Odpowiedz bezpośrednio na tę wiadomość, aby skontaktować się z nadawcą formularza.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:22px 12px 0;">
              <p style="margin:0;color:#94a3b8;font-size:12px;line-height:1.7;">
                Automatyczne powiadomienie z witryny
                <a href="https://hydrobagger.pl" style="color:#0284c7;font-weight:600;text-decoration:none;">hydrobagger.pl</a><br />
                Historia wysyłek: <a href="https://mngmt.hydrobagger.pl/wysylka-maili" style="color:#94a3b8;text-decoration:underline;">panel administracyjny</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
