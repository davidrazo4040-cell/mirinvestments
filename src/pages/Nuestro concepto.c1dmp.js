$w.onReady(function () {
  // Hero
  if ($w('#text1')) $w('#text1').text = "Nuestro Concepto";
  if ($w('#text2')) $w('#text2').text = "Inversión institucional en bienes raíces comerciales AAA de EE.UU.";
  if ($w('#text3')) $w('#text3').text = "¿Qué es MIR Investments?";

  // Descripción de la empresa
  if ($w('#text4')) $w('#text4').text =
    "MIR Investments es una firma privada de inversión en bienes raíces comerciales con sede en EE.UU., especializada en propiedades con contratos NNN (Triple Net Lease) ocupadas por inquilinos corporativos de primer nivel.";
  if ($w('#text5')) $w('#text5').text =
    "Desde 2015, hemos entregado retornos consistentes a inversores latinoamericanos que buscan diversificación en dólares con flujos de caja predecibles y activos tangibles.";
  if ($w('#text6')) $w('#text6').text = "¿Qué es un contrato NNN?";
  if ($w('#text7')) $w('#text7').text =
    "Triple Net Lease (NNN) es el estándar de oro en bienes raíces comerciales de EE.UU. El inquilino paga renta + impuestos prediales + seguros + mantenimiento. El propietario recibe el flujo neto sin sorpresas.";
  if ($w('#text8')) $w('#text8').text = "Cero responsabilidades operativas para el inversionista.";
  if ($w('#text9')) $w('#text9').text = "Flujos en dólares, predecibles, con escalaciones contractuales anuales.";

  // Filosofía de inversión
  if ($w('#text10')) $w('#text10').text = "Nuestra Filosofía";
  if ($w('#text11')) $w('#text11').text =
    "Seleccionamos menos del 5% de las oportunidades que analizamos. Cada propiedad pasa por due diligence financiero, legal y de mercado antes de ser ofrecida a nuestros socios inversionistas.";
  if ($w('#text12')) $w('#text12').text = "Criterios de Selección";
  if ($w('#text13')) $w('#text13').text = "Inquilino con rating crediticio de grado de inversión (S&P / Moody's)";
  if ($w('#text14')) $w('#text14').text = "Ubicación en mercados con crecimiento poblacional sostenido";
  if ($w('#text15')) $w('#text15').text = "Cap Rate mínimo de 6% con contrato remanente de 7+ años";
  if ($w('#text16')) $w('#text16').text = "Diversificación por sector, geografía y perfil de riesgo";
  if ($w('#text17')) $w('#text17').text = "Nuestros Inquilinos";

  // Stats / números clave
  if ($w('#text18')) $w('#text18').text = "10+";
  if ($w('#text19')) $w('#text19').text = "Años de trayectoria";
  if ($w('#text20')) $w('#text20').text = "129.5%";
  if ($w('#text21')) $w('#text21').text = "Retorno acumulado 2015–2025";
  if ($w('#text22')) $w('#text22').text = "$200,000";
  if ($w('#text23')) $w('#text23').text = "Inversión mínima USD";
  if ($w('#text24')) $w('#text24').text = "~7%";
  if ($w('#text25')) $w('#text25').text = "Cap Rate promedio portafolio";

  // Proceso de inversión
  if ($w('#text26')) $w('#text26').text = "Proceso de Inversión";
  if ($w('#text27')) $w('#text27').text =
    "1. Análisis inicial · 2. Due Diligence · 3. Estructuración · 4. Cierre · 5. Distribución de flujos";
  if ($w('#text28')) $w('#text28').text = "¿Listo para invertir?";
  if ($w('#text29')) $w('#text29').text =
    "Agenda una llamada con nuestro equipo y recibe el memorando de inversión de la oportunidad actual.";
  if ($w('#text30')) $w('#text30').text = "Contactar a un Asesor →";

  // Imágenes
  if ($w('#image1'))
    $w('#image1').src =
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop";
  if ($w('#image2'))
    $w('#image2').src =
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop";
  if ($w('#image3'))
    $w('#image3').src =
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&auto=format&fit=crop";
  if ($w('#image4'))
    $w('#image4').src =
      "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&auto=format&fit=crop";

  // Slideshow: testimonios / propiedades destacadas
  if ($w('#slideshow1')) {
    try {
      $w('#slideshow1').play();
    } catch (_) {}
  }
});
