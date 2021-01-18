/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y 
almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar 
el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/

let ciudades = [];
let mostrarCiudades;
// Mientras el usuario pulse aceptar, irá agregando elementos al arreglo
while (confirm("Pulse Aceptar para ingresar el nombre de una CIUDAD o Cancelar")) {
    let usuario = prompt("Ingresa el nombre de una ciudad");
    ciudades.push(usuario);
    console.log("estoy en if");
}

// Al ser false, mostrar el arreglo:
for (let i = 0; i < ciudades.length; i++) {
    mostrarCiudades = ciudades[i];
    document.write(mostrarCiudades + " - ");
}

// Mostrar longitud del arreglo
document.write("<br>La longitud del arreglo es de: " + ciudades.length);

// Mostrar en el documento web los ítems de las posiciones primera, tercera y última
document.write("<br>El elemento en la primera posición del arreglo es: " + ciudades[0]);
document.write("<br>El elemento en la tercera posición del arreglo es: " + ciudades[2]);
document.write("<br>El elemento en la última posición del arreglo es: " + ciudades[ciudades.length - 1]);

// Añade en última posición la ciudad de París
let nuevaLongitud = ciudades.push("París");
document.write("<br>" + ciudades);

// Escribe el elemento que ocupa la segunda posición
document.write("<br>El elemento en la segunda posición del arreglo es: " + ciudades[1]);

// Sustituir 2do elemento por Barcelona
ciudades[1] = "Barcelona";
document.write("<br>" + ciudades);