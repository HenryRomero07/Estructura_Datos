///Question 1: Write a code that will create variables and initialize them with values of Boolean, Number, BigInt, String, and undefined types using (when possible) literals and constructor functions.
let b1 = true;
let b2 = Boolean(true);

let n1 = 100;
let n2 = Number(200);

let bi1 = 100n;
let bi2 = BigInt(200);

let s1 = "hola";
let s2 = String("hola");

let u1 = undefined;

//Question 2: Print all values and all types of those values using console.log. Try to use string interpolation to display the value and type at the same time with a single console.log call, e.g. in the following form: 1000 [number].
console.log(`${b1} [${typeof b1}]`);
console.log(`${b2} [${typeof b2}]`);
console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);
console.log(`${bi1} [${typeof bi1}]`);
console.log(`${bi2} [${typeof bi2}]`);
console.log(`${s1} [${typeof s1}]`);
console.log(`${s2} [${typeof s2}]`);
console.log(`${u1} [${typeof u1}]`);

//Question 3: Carry out a chain of conversions: create a Boolean from a BigInt created from a Number that was created from a String. Start with the value "1234". Is it possible?
console.log("\nconversion :")
let b = Boolean( BigInt(Number("1234")));
console.log(`${b} [${typeof b}]`);

//Question 4: Try adding two values of the same type and check the result type. Try it for all primitive types.
let bsuma = true + false;
let n = 100 + 200;
let bi = 100n + 200n;
let s = "He" + "llo";
let u = undefined + undefined;
console.log("\nSuma de valores del mismo tipo:")
console.log(`${bsuma} [${typeof bsuma}]`); // da number porque true se convierte a 1 y false a 0, entonces 1 + 0 = 1
console.log(`${n} [${typeof n}]`);
console.log(`${bi} [${typeof bi}]`);
console.log(`${s} [${typeof s}]`);
console.log(`${u} [${typeof u}]`); // da number porque undefined se convierte a NaN, entonces NaN + NaN = NaN

//Question 5: Try adding two values of different types and check the results.
console.log("\nSuma de valores de diferente tipo:")
let b1_5 = true + 100; 
// let b2 = true + 100n; // -> error porque no se puede sumar un booleano con un BigInt
let b3_5 = true + "100"; 
// let n1 = 100 + 200n; // -> error porque no se puede sumar un Number con un BigInt
let n2_5 = 100 + true;
let n3_5 = 100 + "200";
// let bi1 = 100n + 200;  // -> error porque no se puede sumar un BigInt con un Number
// let bi2 = 100n + true  // -> error porque no se puede sumar un BigInt con un booleano
let bi3_5 = 100n + "200";
let s1_5 = "100" + 200;
let s2_5 = "100" + 200n;
let s3_5 = "100" + true;
let s4_5 = "abc" + 200;
let s5_5 = "abc" + 200n;
let s6_5 = "abc" + true;
console.log(`${b1_5} [${typeof b1_5}]`);    // -> Devolvera 101 [number]
// console.log(`${b2} [${typeof b2}]`);
console.log(`${b3_5} [${typeof b3_5}]`);    //-> Devolvera true100 [string]
// console.log(`${n1} [${typeof n1}]`);
console.log(`${n2_5} [${typeof n2_5}]`);    // -> Devolvera 101 [number]
console.log(`${n3_5} [${typeof n3_5}]`);    // -> Devolvera 100200 [string]
// console.log(`${bi1} [${typeof bi1}]`);
// console.log(`${bi2} [${typeof bi2}]`);
console.log(`${bi3_5} [${typeof bi3_5}]`);  // -> Devolvera 100200 [string]
console.log(`${s1_5} [${typeof s1_5}]`);    // -> Devolvera 100200 [string]
console.log(`${s2_5} [${typeof s2_5}]`);    // -> Devolvera 100200 [string]
console.log(`${s3_5} [${typeof s3_5}]`);    // -> Devolvera 100true [string]
console.log(`${s4_5} [${typeof s4_5}]`);    // -> Devolvera abc200 [string]
console.log(`${s5_5} [${typeof s5_5}]`);    // -> Devolvera abc200 [string]
console.log(`${s6_5} [${typeof s6_5}]`);    // -> Devolvera abctrue [string]

const str1 = 42 + "1";
console.log(str1); // 421
const str1t = 42 + +"1";
console.log(str1t); // da 43 porque el operador + delante de "1" convierte la cadena en un número, entonces 42 + 1 = 43