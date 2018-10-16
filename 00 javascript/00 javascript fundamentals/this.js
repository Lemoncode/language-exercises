// --- EJERCICIO ------------------------------------------------------------------------

// ¿Qué sale en cada log en consola en el siguiente código?

var surname = "Pérez";
var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function() {
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname());
var surnameFunction = person.wife.getSurname;
console.log(surnameFunction());
console.log(surnameFunction.call(person));
