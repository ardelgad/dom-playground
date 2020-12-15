/**
 * Los siguientes métodos son de lo más importantes en la manipulación del DOM. Nos permiten recuperar elementos del DOM para obtener información sobre ellos y/o manipularlos
 */

/**
 * Para ello, usamos diversas funciones que nos provee el objeto global 'document'
 */

/**
 * Seleccion UNO Y SOLO UN elemento del árbol DOM. Aquél cuyo atributo 'id' es 'main--title'
 */
let titulo = document.getElementById('main--title')

/**
 * Podemos mostrar cualquier propiedad de este objeto por consola. Una propiedad muy usada en estos casos es textContent
 */

console.log(titulo.textContent)

/**
 * Inspecciona titulo con el debugger del Chrome para ver todas sus propiedades
 */

 /**
  * Otro método muy utilizado, es el método getElementByClassName.
  * El método recupera del árbol DOM TODOS los elementos del DOM que tienen cierta clase. TODOS. Eso significa que la función va a devolver VARIOS valores. Por ello, lo que devuelve esta función es una "especie" de array de elementos HTML
  */

/**
 * ¿Cúantos elementos va a recuperar esta llamada?
 */

let elementosListaOrdenada = document.getElementsByClassName('elemento-lista')

console.log(elementosListaOrdenada.length)

/**
 * Puesto que es un array de elementos HTML, podemos acceder a cada uno de los elementos como si se tratara de cualquier otro tipo de Array
 */

console.log(elementosListaOrdenada[0])
console.log(elementosListaOrdenada[1])

/**
 * Puesto que estos objetos tienen una propiedad que se llama 'textContent'; también podemos acceder a dicha propiedad
 */


console.log(elementosListaOrdenada[0].textContent)
console.log(elementosListaOrdenada[1].textContent)

