/**
 * Los eventos son la 'creme' de la interacción en JavaScript. Básicamente se producen cuando el usuario ejecuta alguna acción sobre un elemento del árbol DOM
 */

let miBoton = document.querySelector('main button')
miBoton.onclick = muestraUnaAlerta  // Sin parentesis!!!

// "Oye, en mi propiedad onclick necesito que me pases el nombre de una función. Cuando el usuario haga clic en ella, ya me encargo yo de invocarla."

function muestraUnaAlerta() {
    alert("Me has clicado!")
}
