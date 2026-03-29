import { ServerClient } from "postmark";

export const postmarkClient = new ServerClient(
  process.env.POSTMARK_API_TOKEN!
);

export const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL ?? "kontakt@hydrobagger.pl";

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
      ({ label, value }) => `
    <tr>
      <td style="padding:8px 12px 8px 0;color:#64748b;font-size:14px;vertical-align:top;white-space:nowrap;width:150px;">${label}</td>
      <td style="padding:8px 0;color:#1e293b;font-size:14px;font-weight:600;">${escapeHtml(value)}</td>
    </tr>`
    )
    .join("");

  const attachmentsHtml =
    attachmentNames && attachmentNames.length > 0
      ? `<hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;" />
         <p style="margin:0 0 6px;color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Załączniki (${attachmentNames.length})</p>
         <p style="margin:0;color:#1e293b;font-size:14px;">${attachmentNames.map(escapeHtml).join(", ")}</p>`
      : "";

  return `<!DOCTYPE html>
<html lang="pl">
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:600px;margin:32px auto;padding:0 16px 40px;">
    <div style="background:#0284c7;border-radius:12px 12px 0 0;padding:24px 32px;">
      <p style="margin:0;color:rgba(255,255,255,.7);font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;">HydroBagger.pl</p>
      <h1 style="margin:6px 0 0;color:#fff;font-size:22px;font-weight:700;">${escapeHtml(title)}</h1>
    </div>
    <div style="background:#fff;border-radius:0 0 12px 12px;padding:32px;border:1px solid #e2e8f0;border-top:none;">
      <table style="width:100%;border-collapse:collapse;">${rowsHtml}</table>
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;" />
      <p style="margin:0 0 10px;color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">${escapeHtml(bodyLabel)}</p>
      <p style="margin:0;color:#1e293b;font-size:15px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(bodyText)}</p>
      ${attachmentsHtml}
    </div>
    <p style="margin:20px 0 0;text-align:center;color:#94a3b8;font-size:12px;">
      Wiadomość wysłana przez formularz na hydrobagger.pl
    </p>
  </div>
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
