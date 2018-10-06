// EJERCICIO

/**
 * Implementa un comparador de objetos en profundidad, "deep compare" o
 * "deep equal". Debe ser una función que admita dos objetos de entrada y
 * compare todas sus propiedades para determinar si son objetos iguales
 * (devuelve true) o no (devuelve false).
 * Por sencillez, supón que los argumentos de entrada van a ser siempre objetos,
 * no hace falta por tanto que hagas comprobación.
 *
 * TIP: Podría venirte muy bien el comparador de arrays implementado en el
 * ejercicio anterior.
 */

const compareArrays = (a, b) => {  // TODO
  if (a && b && a.length === b.length) {
    const aSorted = a.sort();
    const bSorted = b.sort();
    let equal = true;
    for (let i = 0; i < aSorted.length && equal; i++) {
      equal = equal && aSorted[i] === bSorted[i];
    };
    return equal;
  }
}

const deepCompareObjects = (a, b) => {
  if( a === b) return true;
  else if (!compareArrays(Object.keys(a), Object.keys(b))) return false;
  else {
    let sameProps = true;
    for (let key in a && sameProps) {
      sameProps = sameProps && (b[key] === a[key]);
    }
    return sameProps;
  }
}

export default deepCompareObjects;
