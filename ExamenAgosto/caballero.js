// Ejercicio 1
let temperaturas = [25, 27, 30, 31, 35, 37, 29];

let sumaTemp = 0;

for (let i = 0; i < temperaturas.length; i++) {
    sumaTemp += temperaturas[i];
  }
  
  let promedioTemp = sumaTemp / temperaturas.length;
  console.log("El promedio es " + promedioTemp);
  

// Ejercicio 2

let numerosImpares = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

let i = 0;

while (i < numerosImpares.length) {
    console.log(numerosImpares[i]);
    i++;
  }
  

// Ejercicio 3

let frutas = ['banana', 'manzana', 'pera', 'durazno', 'naranja', 'uva'];

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] == 'durazno') {
      frutas[i] = 'X';
      console.log('La fruta se encuentra en el listado en la posición' + ' ' +  [i])
    }
  }

// Ejercicio 4

let precios = [100, 250, 80, 300, 150];

let multiplicados = []; 

for (let i = 0; i < precios.length; i++) {
  multiplicados.push(precios[i] * 1.21);  
}
console.log(multiplicados);
