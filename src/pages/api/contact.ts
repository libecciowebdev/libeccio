export const config = {
  runtime: "edge",
};

import type { APIRoute } from "astro";

const RECIPIENT = "libeccio.web.dev@gmail.com";

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });

const clean = (value: unknown, max = 2000) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#039;",
      '"': "&quot;",
    };
    return entities[char] ?? char;
  });

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return json({ error: "Requête invalide." }, 415);
    }

    const body = (await request.json()) as Record<string, unknown>;
    const name = clean(body.name, 120);
    const resto = clean(body.resto, 160);
    const email = clean(body.email, 254);
    const tel = clean(body.tel, 80);
    const message = clean(body.message, 5000);
    const website = clean(body.website, 200);

    // Honeypot anti-spam: les vrais visiteurs ne voient jamais ce champ.
    if (website) {
      return json({ ok: true });
    }

    if (!name || !resto || !email || !tel || !message) {
      return json({ error: "Merci de remplir tous les champs." }, 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ error: "Adresse e-mail invalide." }, 400);
    }

    const runtimeEnv = (locals as any)?.runtime?.env;
    const apiKey = runtimeEnv?.RESEND_API_KEY as string | undefined;

    if (!apiKey) {
      console.error("RESEND_API_KEY manquante dans Webflow Cloud.");
      return json({ error: "Le service d'envoi n'est pas configuré." }, 500);
    }

    const safeName = escapeHtml(name);
    const safeResto = escapeHtml(resto);
    const safeEmail = escapeHtml(email);
    const safeTel = escapeHtml(tel);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Libeccio <onboarding@resend.dev>",
        to: [RECIPIENT],
        reply_to: email,
        subject: `Nouveau contact Libeccio — ${resto}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#171717;line-height:1.6">
            <h1 style="font-size:24px;margin-bottom:24px">Nouveau message depuis Libeccio</h1>
            <p><strong>Nom :</strong> ${safeName}</p>
            <p><strong>Restaurant :</strong> ${safeResto}</p>
            <p><strong>E-mail :</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p><strong>Téléphone :</strong> ${safeTel}</p>
            <div style="margin-top:24px;padding-top:20px;border-top:1px solid #e5e5e5">
              <strong>Projet / message :</strong>
              <p>${safeMessage}</p>
            </div>
          </div>
        `,
        text: `Nouveau message depuis Libeccio\n\nNom : ${name}\nRestaurant : ${resto}\nE-mail : ${email}\nTéléphone : ${tel}\n\nProjet / message :\n${message}`,
      }),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      console.error("Erreur Resend:", resendResponse.status, resendError);
      return json({ error: "L'e-mail n'a pas pu être envoyé. Réessayez." }, 502);
    }

    return json({ ok: true });
  } catch (error) {
    console.error("Erreur API contact:", error);
    return json({ error: "Une erreur est survenue pendant l'envoi." }, 500);
  }
};
