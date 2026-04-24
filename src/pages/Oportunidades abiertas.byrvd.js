import { properties } from 'backend/properties';

$w.onReady(function () {
  if ($w('#text1')) $w('#text1').text = "Oportunidades Abiertas";
  if ($w('#text2')) $w('#text2').text = "Inversión mínima desde USD $200,000";
  if ($w('#text3')) $w('#text3').text = "Seleccionamos menos del 5% de las oportunidades que evaluamos. Propiedades NNN con inquilinos corporativos de primer nivel.";

  const props = properties;

  // Walgreens Denver
  if ($w('#image1') && props[0]) $w('#image1').src = props[0].image;
  if ($w('#text4')  && props[0]) $w('#text4').text  = props[0].name;
  if ($w('#text5')  && props[0]) $w('#text5').text  = `NOI: ${props[0].noi}  |  Cap Rate: ${props[0].capRate}  |  Lease: ${props[0].leaseEnd}`;
  if ($w('#text6')  && props[0]) $w('#text6').text  = `Inversión mínima: ${props[0].minInvestment}  |  Límite: ${props[0].allocationLimit}`;

  // Walgreens El Paso
  if ($w('#image2') && props[1]) $w('#image2').src = props[1].image;
  if ($w('#text7')  && props[1]) $w('#text7').text  = props[1].name;
  if ($w('#text8')  && props[1]) $w('#text8').text  = `NOI: ${props[1].noi}  |  Cap Rate: ${props[1].capRate}  |  Lease: ${props[1].leaseEnd}`;
  if ($w('#text9')  && props[1]) $w('#text9').text  = `Inversión mínima: ${props[1].minInvestment}  |  Límite: ${props[1].allocationLimit}`;

  // Teleperformance
  if ($w('#image3') && props[2]) $w('#image3').src = props[2].image;
  if ($w('#text10') && props[2]) $w('#text10').text = props[2].name;

  // Stats generales
  if ($w('#text11')) $w('#text11').text = "129.5%";
  if ($w('#text12')) $w('#text12').text = "Retorno acumulado 2015–2025";
  if ($w('#text13')) $w('#text13').text = "~7%";
  if ($w('#text14')) $w('#text14').text = "Cap Rate promedio portafolio NNN";
});
