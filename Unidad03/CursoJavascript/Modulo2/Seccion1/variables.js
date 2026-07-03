//2.0.3 Declaración de variables
var height;
console.log(height);  //  ->  undefined
// console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined -- esto pasa porque la  variable  no  existe

//2.0.4 Inicialización de variables
let height2 = 180;
let anotherHeight = height2;
let weight0;
console.log(height2);  //  ->  180
console.log(anotherHeight);  //  ->  180
weight0 = 70;
console.log(weight0);  //  ->  70

//2.0.5 Declaraciones y modo estricto
height3_ = 180;
console.log(height3_);  //  ->  180

"use  strict";
// height3 = 180;  //  ->  Uncaught  ReferenceError:  height2  is  not  defined -- esto pasa porque la  variable  no  está  declarada
// console.log(height3);

//2.0.6 Cambio de valores de variables
let steps = 100;
console.log(steps);  //  ->  100
steps = 120;  //  ->  120
console.log(steps);
steps = steps + 200;
console.log(steps);  //  ->  320

let greeting = "Hello!";
let counter = 100;

console.log(greeting);  //  ->  Hello!
greeting = 1;
console.log(greeting);  //  ->  1

greeting = "Hello!";
greeting = greeting + counter;
console.log(greeting);  //  ->  Hello!100

//2.0.7 Constantes
const greetingC = "Hello!";

// const greetingC;  //  ->  Uncaught  SyntaxError:  Missing  initializer  in  const  declaration -- esto pasa porque la  variable  no  está  inicializada

// greetingC = "Hello!";

// greetingC = "Hi!";  //  ->  Uncaught  TypeError:  Assignment  to  constant  variable. -- esto pasa porque la  variable  es  una  constante por lo tanto  no  se  puede  cambiar  su  valor

//2.0.8 Alcance
let counter2;
console.log(counter2);  //  ->  undefined
{
    counter2 = 1;
    {
        console.log(counter2);  //  ->  1
    }
}
counter2 = counter2 + 1;
console.log(counter2);  //  ->  2

// let height4 = 200;
// {
//     let weight2 = 100;
//     {
//         let info = "tall";
//         console.log(height4);  //  ->  200
//         console.log(weight2);  //  ->  100
//         console.log(info);  //  ->  tall
//     }
//     console.log(height4);  //  ->  200
//     console.log(weight2);  //  ->  100
//     console.log(info);  //  ->  Uncaught  ReferenceError:  info  is  not  defined -- esto pasa porque la  variable  info  no  existe  en  este  bloque
// }

var height5 = 180;
{
    var weight3 = 70;
    console.log(height5);  //  ->  180
    console.log(weight3);  //  ->  70
}
console.log(height5);  //  ->  180
console.log(weight3);  //  ->  70

//2.0.9 Funciones

function testFunction() {
    console.log("Hello");
    console.log("World");
}

console.log("let's  begin:");  //  ->  let's  begin:
console.log(testFunction());  //  ->  Hello World
console.log("and  again:");  //  ->  and  again:
console.log(testFunction());  //  ->  Hello World
console.log("and  once  more:");  //  ->  and  once  more:
console.log(testFunction());  //  ->  Hello World


//2.0.10

var globalGreeting = "Good  ";

function testFunction() {
    var localGreeting = "Morning  ";
    console.log("function:");
    console.log(globalGreeting);
    console.log(localGreeting);
}

testFunction();

console.log("main  program:");
console.log(globalGreeting);
// console.log(localGreeting);  //  ->  Uncaught  ReferenceError:  localGreeting  is  not  defined -- esto pasa porque la  variable  localGreeting  no  existe  en  este  bloque

//2.0.11
let counter3 = 100;
console.log(counter3);  //  ->  100
{
    counter3 = 200;
    console.log(counter3);  //  ->  200
}
console.log(counter3);  //  ->  200


let counter4 = 100;
console.log(counter4);  //  ->  100
{
    let counter4 = 200;
    console.log(counter4);  //  ->  200
}
console.log(counter4);  //  ->  100


var counter5 = 100;

function testFunction() {
    var counter5 = 200;
    console.log(counter5);  //  ->  200
}

console.log(counter5);  //  ->  100
testFunction();  //  ->  200
console.log(counter5);  //  ->  100

//2.0.12 Hoisting
var  height  =  180;
console.log(height);    //  ->  180
// console.log(weight);    //  ->  Uncaught  ReferenceError:  weight  is  not  defined, esto pasa porque la  variable  no  existe

//2.0.14 CUESTIONARIO DE SECCIÓN
// Pregunta 1: Juguemos al florista. Declarar seis variables, recordando nombrarlas según su finalidad:

// el precio de una sola rosa (8) y el número de rosas que tienes (70)
// el precio de un solo lirio (10) y el número de lirios que tienes (50)
// el precio de un solo tulipán (2) y la cantidad de tulipanes que tienes (120)

let precioRosa = 8;
let precioLirio = 10;
let precioTulipan = 2;

let numeroDeRosas = 70;
let numeroDeLirios = 50;
let numeroDeTulipanes = 120;

let TotalRosas = precioRosa * numeroDeRosas;
let TotalLirios = precioLirio * numeroDeLirios;
let TotalTulipanes = precioTulipan * numeroDeTulipanes;

let total = TotalRosas + TotalLirios + TotalTulipanes;
console.log("Rosa – precio unitario:", precioRosa, ", cantidad:", numeroDeRosas, ", valor total:", TotalRosas);
console.log("Lirio – precio unitario:", precioLirio, ", cantidad:", numeroDeLirios, ", valor total:", TotalLirios);
console.log("Tulipán – precio unitario:", precioTulipan, ", cantidad:", numeroDeTulipanes, ", valor total:", TotalTulipanes);
console.log("Total: ", total);

//2.0.15 Variables LAB
// Nuestra tarea será crear una lista de contactos. Inicialmente, la lista será bastante simple: solo le escribiremos tres personas utilizando los datos que se muestran en la siguiente tabla. En el resto del curso, volverás a este script y lo ampliarás sistemáticamente con nuevas funciones, utilizando los elementos recién aprendidos de JavaScript.

let nombre = "Maxwell Wright";
let telefono = "(0191) 7196495";
let email = "Curabitur.egestas.nunc@nonummyac.co.uk";

let nombre2 = "Raja Villarreal";
let telefono2 = "0866 398 2895";
let email2 = "posuere.vulputate@sed.com";

let nombre3 = "Helen Richards";
let telefono3 = "0800 1111";
let email3 = "libero@convallis.edu";

console.log("Contacto 1: Nombre:", nombre, ", Teléfono:", telefono, ", Email:", email);
console.log("Contacto 2: Nombre:", nombre2, ", Teléfono:", telefono2, ", Email:", email2);
console.log("Contacto 3: Nombre:", nombre3, ", Teléfono:", telefono3, ", Email:", email3);