# Módulo 2 Lenguajes

## Challenges

### 1. Aplanemos un array

Dado un array multidimensional, construye una función inmutable que devuelva el mismo array aplanado, esto es, con un único nivel de profundidad. Por ejemplo, el siguiente array:

```js
const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
```

quedaría aplanado como:

```js
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 2. Tipa la función anterior (Typescript)

¿Has resuelto el ejercicio anterior? Suponiendo que los arrays multidimensionales del ejercicio anterior no serán de naturaleza mixta, es decir, sus elementos siempre serán del mismo tipo ¿Serías capaz de proporcionar un tipado adecuado a dicha función de aplanamiento?

### 3. Tipa un árbol (Typescript)

¿Cómo generarías con TypeScript un tipado para estructuras en forma de árbol? Un árbol es una estructura que parte de un nodo raiz, a partir del cual salen más nodos. Cada nodo en un árbol puede tener hijos (más nodos) o no tenerlos (convirtiendose en un nodo final o una "hoja").

### 4. Trazas por consola

Ejecuta el siguiente código:

```js
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
};

const triggers = [async () => await showMessage([200, "third"]), async () => await showMessage([100, "second"])];

const run = triggers => {
  console.log("first");
  triggers.forEach(t => t());
};

run(triggers);
```

Las trazas resultante en consola son:

```js
first;
second;
third;
```

El ejercicio consiste en reordenar las trazas para que se muestren invertidas, es decir, con el siguiente orden:

```js
third;
second;
first;
```

Pero para ello **tan solo podrás modificar la función `run`**.

Queda prohibido modificar cualquier otro código asi como el contenido de `triggers`.
