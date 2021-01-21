/*3- Solicitar por pantalla al usuario ingresar el valor de los lados de un 
rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)*/


//inicialización de variables
let lado1 = lado2 = 0;
let perimetro = 0;
//pedimos la información al usuario
lado1 = preguntarDato();
lado2 = preguntarDato();

//lado1 y lado2 en realidad son variables absolutas. por scope no haría falta pasarlas 
//pero lo hacemos como ejemplo didáctico
//calculamos y escribimos el perímetro conocidos los lados 
escribePerimetro(lado1, lado2);

//declaración de funciones       
function preguntarDato() {
    return parseFloat(window.prompt("escribe la longitud de un número"));
}
//fijaros que la variable a toma el valor de lado1 y variable b toma el valor de lado2
function escribePerimetro(a, b) {
    let perimetro = 2 * (a + b);
    document.write("el perimetro de un rectángulo de lados " + a + " y " + b + " es " + perimetro);
}