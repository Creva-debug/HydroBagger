import { NextRequest, NextResponse } from "next/server";
import { buildNotificationHtml, CONTACT_EMAIL, postmarkClient } from "@/lib/postmark";

const MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024; // 10 MB łącznie

export async function POST(req: NextRequest) {
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe dane formularza." }, { status: 400 });
  }

  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  if (!email || !phone || !message) {
    return NextResponse.json(
      { error: "Wypełnij wszystkie wymagane pola (e-mail, telefon, opis projektu)." },
      { status: 400 }
    );
  }

  const rawFiles = formData.getAll("attachments") as File[];
  const files = rawFiles.filter((f) => f.size > 0);

  const totalSize = files.reduce((sum, f) => sum + f.size, 0);
  if (totalSize > MAX_ATTACHMENT_BYTES) {
    return NextResponse.json(
      { error: "Załączniki przekraczają limit 10 MB. Zmniejsz rozmiar plików." },
      { status: 400 }
    );
  }

  const attachments = await Promise.all(
    files.map(async (file) => {
      const buffer = Buffer.from(await file.arrayBuffer());
      return {
        Name: file.name,
        Content: buffer.toString("base64"),
        ContentType: file.type || "application/octet-stream",
        ContentID: "",
      };
    })
  );

  const htmlBody = buildNotificationHtml({
    title: "Nowe zapytanie z formularza kontaktowego",
    rows: [
      { label: "E-mail", value: email },
      { label: "Telefon", value: phone },
    ],
    bodyLabel: "Opis projektu",
    bodyText: message,
    attachmentNames: attachments.map((a) => a.Name),
  });

  const textBody = [
    "NOWE ZAPYTANIE Z FORMULARZA KONTAKTOWEGO",
    "=========================================",
    `E-mail:  ${email}`,
    `Telefon: ${phone}`,
    "",
    "Opis projektu:",
    message,
    attachments.length > 0
      ? `\nZałączniki: ${attachments.map((a) => a.Name).join(", ")}`
      : "",
  ]
    .filter((l) => l !== undefined)
    .join("\n");

  try {
    await postmarkClient.sendEmail({
      From: `HydroBagger Formularz <${CONTACT_EMAIL}>`,
      To: CONTACT_EMAIL,
      ReplyTo: email,
      Subject: `Nowe zapytanie z formularza – ${email}`,
      HtmlBody: htmlBody,
      TextBody: textBody,
      Attachments: attachments,
      MessageStream: "outbound",
    });
  } catch (err) {
    console.error("[Postmark] Błąd wysyłki maila kontaktowego:", err);
    return NextResponse.json(
      { error: "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub napisz bezpośrednio na kontakt@hydrobagger.pl." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
