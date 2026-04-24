import { fetch } from 'wix-fetch';

$w.onReady(function () {
  if ($w('#text1')) $w('#text1').text = "Solicita Información";
  if ($w('#text2')) $w('#text2').text = "Completa el formulario y un asesor te contactará en menos de 24 horas.";
  if ($w('#text3')) $w('#text3').text = "Inversión mínima desde USD $200,000";

  if ($w('#input1')) $w('#input1').placeholder = "Nombre Completo *";
  if ($w('#input2')) $w('#input2').placeholder = "Email *";
  if ($w('#input3')) $w('#input3').placeholder = "Teléfono *";
  if ($w('#input4')) $w('#input4').placeholder = "Empresa (opcional)";
  if ($w('#input5')) $w('#input5').placeholder = "Rango de inversión (ej: USD $200K–$500K)";
  if ($w('#textBox1')) $w('#textBox1').placeholder = "Cuéntanos sobre tus objetivos de inversión...";
  if ($w('#button1')) $w('#button1').label = "Solicitar Información →";

  $w('#button1').onClick(async () => {
    const name  = $w('#input1').value;
    const email = $w('#input2').value;
    const phone = $w('#input3').value;
    const range = $w('#input5').value;
    const msg   = $w('#textBox1').value;

    if (!name || !email || !phone) {
      $w('#text2').text = "⚠ Por favor completa nombre, email y teléfono.";
      return;
    }

    $w('#button1').disable();
    $w('#button1').label = "Enviando...";

    try {
      await fetch("https://mirinvestements123-production.up.railway.app/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type:"contact", name, email, phone, investmentRange:range, message:msg, source:"Wix MIR" }),
      });
      $w('#text1').text = "✓ Solicitud recibida";
      $w('#text2').text = "Gracias. Un asesor de MIR Investments te contactará pronto.";
      $w('#button1').label = "Enviado ✓";
    } catch (e) {
      $w('#button1').enable();
      $w('#button1').label = "Solicitar Información →";
    }
  });
});
