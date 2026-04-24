import { properties } from 'backend/properties';

$w.onReady(function () {
  // Encabezado de sección
  if ($w('#text1')) $w('#text1').text = "Nuestras Propiedades";
  if ($w('#text2')) $w('#text2').text = "Portafolio actual de bienes raíces comerciales AAA en EE.UU.";

  // Galería de propiedades con imágenes reales
  if ($w('#gallery1')) {
    $w('#gallery1').items = properties.map(p => ({
      src: p.image,
      title: p.name,
      description: `${p.type} · Cap Rate ${p.capRate} · ${p.city}`,
      link: "/contacto",
    }));
  }

  // Cards de propiedades en columnas
  const props = properties;

  // Propiedad 1
  if ($w('#image1') && props[0]) $w('#image1').src = props[0].image;
  if ($w('#text3') && props[0])  $w('#text3').text = props[0].name;
  if ($w('#text4') && props[0])  $w('#text4').text = `Cap Rate: ${props[0].capRate}  ·  ${props[0].city}`;

  // Propiedad 2
  if ($w('#image2') && props[1]) $w('#image2').src = props[1].image;
  if ($w('#text5') && props[1])  $w('#text5').text = props[1].name;
  if ($w('#text6') && props[1])  $w('#text6').text = `Cap Rate: ${props[1].capRate}  ·  ${props[1].city}`;

  // Propiedad 3
  if ($w('#image3') && props[2]) $w('#image3').src = props[2].image;
  if ($w('#text7') && props[2])  $w('#text7').text = props[2].name;
  if ($w('#text8') && props[2])  $w('#text8').text = `Cap Rate: ${props[2].capRate}  ·  ${props[2].city}`;

  // Propiedad 4
  if ($w('#text9')  && props[3]) $w('#text9').text  = props[3].name;
  if ($w('#text10') && props[3]) $w('#text10').text = `NOI: ${props[3].noi}  ·  Valor: ${props[3].value}`;

  // Propiedad 5
  if ($w('#text11') && props[4]) $w('#text11').text = props[4].name;
  if ($w('#text12') && props[4]) $w('#text12').text = `IRR Proyectado: ${props[4].irr}  ·  ${props[4].type}`;
});
