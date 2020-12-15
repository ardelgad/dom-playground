/**
 * Desde hace un tiempo, existe un selector mucho más generla y adecuado para seleccionar un elemento del DOM. querySelector es una función que nos permite recuperar un elemento del DOM mediante un selector CSS
 */

let titulo = document.querySelector('#main--title')
console.log(titulo)

/**
 * Y existe la función querySelectorAll para capturar VARIOS elementos del DOM que cumplan el selector CSS. Fíjate que en este caso vuelve a ser 
 */

let todosLosLI = document.querySelectorAll('li')
console.log(todosLosLI)

/**
 * Podemos consultar los elementos del DOM. Pero evidentementem, también podemos modificarlos. 
 */

document.querySelector('#main--title').textContent = "He cambiado el texto del H1!"
document.querySelector('#main--title').classList.add('bg-warning')
