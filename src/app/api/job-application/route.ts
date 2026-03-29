import { NextRequest, NextResponse } from "next/server";
import { buildNotificationHtml, CONTACT_EMAIL, postmarkClient } from "@/lib/postmark";

const MAX_CV_BYTES = 10 * 1024 * 1024; // 10 MB

export async function POST(req: NextRequest) {
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe dane formularza." }, { status: 400 });
  }

  const position = (formData.get("position") as string | null)?.trim() ?? "";
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Wypełnij wszystkie wymagane pola (imię i nazwisko, e-mail, doświadczenie)." },
      { status: 400 }
    );
  }

  const cvFile = formData.get("cv") as File | null;
  const attachments: { Name: string; Content: string; ContentType: string; ContentID: string }[] = [];

  if (cvFile && cvFile.size > 0) {
    if (cvFile.size > MAX_CV_BYTES) {
      return NextResponse.json(
        { error: "Plik CV przekracza limit 10 MB." },
        { status: 400 }
      );
    }
    const buffer = Buffer.from(await cvFile.arrayBuffer());
    attachments.push({
      Name: cvFile.name,
      Content: buffer.toString("base64"),
      ContentType: cvFile.type || "application/octet-stream",
      ContentID: "",
    });
  }

  const rows = [
    { label: "Stanowisko", value: position || "Nieokreślone" },
    { label: "Imię i nazwisko", value: name },
    { label: "E-mail", value: email },
    ...(phone ? [{ label: "Telefon", value: phone }] : []),
  ];

  const htmlBody = buildNotificationHtml({
    title: "Nowe zgłoszenie rekrutacyjne",
    rows,
    bodyLabel: "Doświadczenie i motywacja",
    bodyText: message,
    attachmentNames: attachments.map((a) => a.Name),
  });

  const textBody = [
    "NOWE ZGŁOSZENIE REKRUTACYJNE",
    "============================",
    `Stanowisko:      ${position || "Nieokreślone"}`,
    `Imię i nazwisko: ${name}`,
    `E-mail:          ${email}`,
    phone ? `Telefon:         ${phone}` : "",
    "",
    "Doświadczenie i motywacja:",
    message,
    attachments.length > 0 ? `\nCV/Referencje: ${attachments[0].Name}` : "",
  ]
    .filter((l) => l !== undefined)
    .join("\n");

  try {
    await postmarkClient.sendEmail({
      From: `HydroBagger Rekrutacja <${CONTACT_EMAIL}>`,
      To: CONTACT_EMAIL,
      ReplyTo: email,
      Subject: `Zgłoszenie rekrutacyjne – ${position ? `${position} – ` : ""}${name}`,
      HtmlBody: htmlBody,
      TextBody: textBody,
      Attachments: attachments,
      MessageStream: "outbound",
    });
  } catch (err) {
    console.error("[Postmark] Błąd wysyłki zgłoszenia rekrutacyjnego:", err);
    return NextResponse.json(
      { error: "Wystąpił błąd podczas wysyłania zgłoszenia. Spróbuj ponownie lub napisz bezpośrednio na kontakt@hydrobagger.pl." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
