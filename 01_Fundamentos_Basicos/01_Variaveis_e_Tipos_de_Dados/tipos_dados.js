//Tipos de Dados em JavaScritpt
/*No JavaScript, temos 7 tipos de dados primitivos, que são:
    - Number
    - String
    - Boolean
    - Null
    - Undefined
    - Symbol
    - BigInt
    - Object
    - Function
    - Array
*/
const numero = 10; // Number
const texto = "Olá, mundo!"; // String
const verdadeiro = true; // Boolean
const falso = false; // Boolean
const nulo = null; // Null
const indefinido = undefined; // Undefined
const simbolo = Symbol(); // Symbol
const bigInt = 100n; // BigInt
const objeto = {}; // Object
const funcao = function() {}; // Function
const array = []; // Array

//Para saber o tipo de dado de uma variável, podemos usar o operador typeof
console.log(typeof numero); // number
console.log(typeof texto); // string
console.log(typeof verdadeiro); // boolean
console.log(typeof falso); // boolean
console.log(typeof nulo); // object
console.log(typeof indefinido); // undefined
console.log(typeof simbolo); // symbol
console.log(typeof bigInt); // bigint
console.log(typeof objeto); // object
console.log(typeof funcao); // function
console.log(typeof array); // object