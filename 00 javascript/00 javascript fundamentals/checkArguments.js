// --- EJERCICIO ------------------------------------------------------------------------

// La siguiente situación es muy habitual en JS: al recibir argumentos de una función
// queremos asegurarnos que no sean "undefined" o nulos. Supon que input es siempre de
// tipo string, incluyendo null o undefined. Es decir, no vas a recibir números, objetos, etc.
// Sin necesidad de usar if/else, intenta convertir el cuerpo de la función a una sola línea.

function f(input) {
  var result;
  if (input === undefined) {
    result = "Unknown";
  } else if (input === null) {
    result = "";
  } else {
    result = input;
  }
  return result;
};
