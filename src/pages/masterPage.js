import wixLocation from 'wix-location';

$w.onReady(function () {
  // Menú de navegación
  const menuItems = [
    { label: "Nuestro Concepto",    link: "/nuestro-concepto" },
    { label: "Nuestros Inmuebles",  link: "/nuestros-inmuebles" },
    { label: "Oportunidades",       link: "/oportunidades-abiertas" },
    { label: "Resultados",          link: "/testimonios" },
    { label: "Contacto",            link: "/contacto" },
  ];

  if ($w('#horizontalMenu1')) {
    $w('#horizontalMenu1').menuItems = menuItems;
  }

  // Footer copyright
  if ($w('#text31')) {
    $w('#text31').text = "© 2026 MIR Investments. Todos los derechos reservados.";
  }

  // Logo del header
  if ($w('#image7')) {
    $w('#image7').src =
      "https://static.wixstatic.com/media/be9379_b8d95d2742e24da59f06520fe51dc343~mv2.png";
  }
});
