import { ok, serverError } from 'wix-http-functions';
import { fetch } from 'wix-fetch';

// POST /api/lead — recibe leads del formulario de contacto
export async function post_lead(request) {
  try {
    const body = await request.body.json();
    const WEBHOOK = "https://mirinvestements123-production.up.railway.app/api/lead";

    await fetch(WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return ok({ success: true });
  } catch (e) {
    return serverError({ error: e.message });
  }
}
