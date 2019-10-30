// --- EJERCICIO ------------------------------------------------------------------------

// Dada la siguiente función:
function f( a, {b} = {}, c = 100 ) {
  console.log( arguments.length );
  console.log(a, a === arguments[0] );
  console.log(b, b === arguments[1] );
  console.log(c, c === arguments[2] );
};

// A. ¿Qué muestra por consola esta llamada?
f("JS rocks!", {"b": "b"});

// B. ¿Y con estos argumentos?
f({"b": "b"});

// C. ¿Y ahora?
f("JS sucks!", null, 13);
