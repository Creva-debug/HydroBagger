import "server-only";

import { getPool, isDatabaseConfigured } from "@/lib/db";

export type AttachmentMeta = {
  name: string;
  contentType: string;
  sizeBytes: number;
};

export type EmailOutboxInput = {
  kind: string;
  tag?: string;
  subject: string;
  recipient: string;
  status: "sent" | "failed" | "config_missing";
  fromEmail?: string;
  replyToEmail?: string;
  messageStream?: string;
  textBody?: string;
  htmlBody?: string;
  attachmentsMeta?: AttachmentMeta[];
  messageId?: string | null;
  errorMessage?: string | null;
  metadata?: Record<string, unknown>;
};

const MAX_BODY_CHARS = 200_000;

/**
 * Zapisuje log wysyłki maila w panelu (mngmt.hydrobagger.pl → Wysyłka maili).
 * Nigdy nie rzuca wyjątku — to dodatkowy, najlepszym-wysiłkiem zapis, wysyłka
 * przez Postmark jest głównym kanałem i nie może zależeć od bazy danych.
 */
export async function recordEmailOutbox(input: EmailOutboxInput): Promise<void> {
  if (!isDatabaseConfigured()) return;

  try {
    await getPool().query(
      `INSERT INTO email_outbox
         (kind, tag, subject, recipient, status, from_email, reply_to_email,
          message_stream, text_body, html_body, attachments_meta, message_id,
          error_message, metadata)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
      [
        input.kind,
        input.tag ?? "",
        input.subject,
        input.recipient,
        input.status,
        input.fromEmail ?? "",
        input.replyToEmail ?? "",
        input.messageStream ?? "outbound",
        (input.textBody ?? "").slice(0, MAX_BODY_CHARS),
        (input.htmlBody ?? "").slice(0, MAX_BODY_CHARS),
        JSON.stringify(input.attachmentsMeta ?? []),
        input.messageId ?? null,
        input.errorMessage ?? null,
        JSON.stringify(input.metadata ?? {}),
      ],
    );
  } catch (err) {
    console.error("[email-outbox] Błąd zapisu w bazie:", err);
  }
}
