/*
Condicionales
Sirven para tomar decisiones en el código. Ejecutan un bloque de instrucciones 
solo si se cumple una condición
*/

// 1. Estructura if (Si condicional)
let edad = 19;

if (edad >= 18) {
    console.log("eres mayor de edad");
}

// 2. Estructura if / else (Si / Sino)
let notaParcial = 9

if (notaParcial > 7) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

// 3. Estructura if / else if / else (Múltiples condiciones)
let nota = 15;

if (nota >= 18) {
    console.log("Calificación: Excelente.");
} else if (nota >= 14) {
    console.log("Calificación: Regular.");
} else {
    console.log("Calificación: Insuficiente.");
}

//SWITCH 
switch (hola){
    case 1: 
        console.log("1")
    case 2: 
        console.log("2")
    default:
        console.log("no existe")
}