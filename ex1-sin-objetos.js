/**
 * Dado el siguiente array de números, aplica adecuadamente cada uno de los métodos de array obteenr la información requerida
 *
 * Resultado esperado: https://oscarm.tinytake.com/msc/ODg4NjgxMF8yMjM0MDYyNg
 */

const numbers = [-5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

/**
 * Utiliza la método forEach para mostrar cada número por consola
 */
numbers.forEach(number => console.log(number));

/**
 * Utiliza el método find para encontrar el primer número mayor de 10
 */

const firstNumberGreater10 = numbers.find(number => number>10);
console.log(firstNumberGreater10);

/**
 * Utliza el método some para saber si existe un número mayor de 20
 */
const hasNumberGreater20  = numbers.some(number => number>20)
console.log(hasNumberGreater20 );

/**
 * Utiliza el método every para comprobar si todos los números de este array son impares
 */
const isOdd  = numbers.every(number => number%2!==0);
console.log(isOdd );

/**
 * Utiliza el método filter para obtener un nuevo array con todos los números que son mayores de 3 pero menores de 9
 */
const numbersBetween3And9 = numbers.filter(num => (num>3 && num<9));
console.log(numbersBetween3And9 );

/**
 * Utiliza el método map para obtener otro array donde, para cada posición, ontengamos un -1 si el número que ocupaba aquella posición es negativo, y un +1 si el numero es positivo
 * [-1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
 */

const signsArray  = numbers.map(nums => Math.sign(nums));
console.log(signsArray );

