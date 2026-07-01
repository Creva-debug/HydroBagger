import "server-only";

import { getPool, isDatabaseConfigured } from "@/lib/db";

export type LeadType = "contact" | "job_application";

export type LeadInput = {
  type: LeadType;
  name?: string;
  email?: string;
  phone?: string;
  position?: string;
  message?: string;
  attachmentNames?: string[];
  emailSent: boolean;
};

/**
 * Zapisuje zgłoszenie z formularza w panelu admina (Postgres na VPS).
 * Nigdy nie rzuca wyjątku — e-mail przez Postmark pozostaje głównym
 * kanałem powiadomień, baza jest dodatkowym, najlepszym-wysiłkiem zapisem
 * widocznym w panelu `mngmt.hydrobagger.pl/zgloszenia`.
 */
export async function recordLead(input: LeadInput): Promise<void> {
  if (!isDatabaseConfigured()) return;

  try {
    await getPool().query(
      `INSERT INTO leads
         (type, name, email, phone, position, message, attachment_names, email_sent)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        input.type,
        (input.name ?? "").slice(0, 200),
        (input.email ?? "").slice(0, 200),
        (input.phone ?? "").slice(0, 50),
        (input.position ?? "").slice(0, 200),
        (input.message ?? "").slice(0, 8000),
        input.attachmentNames ?? [],
        input.emailSent,
      ],
    );
  } catch (err) {
    console.error("[leads] Błąd zapisu zgłoszenia w bazie:", err);
  }
}
