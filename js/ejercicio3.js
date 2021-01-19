/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función
 Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
 Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
 repitiendo 50 veces esta operación.*/

let dado1, dado2, suma;
let contador = 0;
let resultados = [];

while (contador < 50) {
    // sumar dados
    dado1 = Math.ceil(Math.random() * 6);
    dado2 = Math.ceil(Math.random() * 6);
    suma = dado1 + dado2;
    // ver dado 1 + dado 2 + resultado
    document.write("<br>Dado 1: " + dado1);
    document.write("<br>Dado 2: " + dado2);
    document.write("<br>Resultado suma: " + suma);
    resultados.push(suma);
    document.write("<br><small>Contador: " + contador + "</small>");
    document.write("<br>");
    // incrementar contador
    contador++;
    // agregar elementos a un array
}

// ver resultados
document.write("<br>Array con los resultados: " + resultados);

console.log(resultados);

//sumar los valores de un arreglo
let total = 0
for (let i of resultados) total += i;
console.log("suma de todos los resultados: " + total);