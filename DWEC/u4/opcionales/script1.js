function sueldoFinal(sueldo, comision, retencion) {
  aumentoComision = (sueldo * comision) / 100;
  decrementoRetencion = (sueldo * retencion) / 100;
  return sueldo + aumentoComision - decrementoRetencion;
}
console.log(sueldoFinal(1000, 20, 20));

document.querySelector("p").innerHTML = ` ${sueldoFinal(1000, 20, 20)} `;
