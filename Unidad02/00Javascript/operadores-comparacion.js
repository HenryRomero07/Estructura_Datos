/*
Operadores de Comparación y logica
Sirven para comparar valores o combinar múltiples condiciones
El resultado de estas operaciones siempre es un booleano: true o false
*/

let numero = 10;
let texto = "10";
let otroNumero = 5;

// OPERADORES DE COMPARACION

// == Compara solo el valor
console.log("== : ", numero == texto); 

// === Compara el valor y también el tipo de dato
console.log("=== : ", numero === texto); 

// != Verifica si los valores son diferentes
console.log("!= : ", numero != otroNumero); 

// !== Verifica si son diferentes en valor o en tipo de dato
console.log("!== : ", numero !== texto); // true

// < (Menor que) y > (Mayor que)
console.log("< : ", otroNumero < numero); 
console.log("> : ", otroNumero > numero); 


// OPERADORES LÓGICOS

let esMayorDeEdad = true;
let tieneIdentificacion = false;

// AND (&&) Devuelve true solo si todas las condiciones son verdaderas
console.log("AND (&&): ", esMayorDeEdad && tieneIdentificacion); 

// OR (||) Devuelve true si al menos una de las condiciones es verdadera
console.log("OR (||): ", esMayorDeEdad || tieneIdentificacion); 

// NOT (!) Invierte el valor booleano, si es true lo hace false, y viceversa
console.log("NOT (!): ", !esMayorDeEdad); 



const a = 10 
const b = 20 
const c = "30"

console.log(a == b)
console.log(a === b)
console.log(a === c) 
console.log(a == c)
