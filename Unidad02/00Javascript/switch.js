let expr = "mangos"


switch (expr) {
    case "mangos":
        console.log("los mangos x5 cuestan $1")
        break;
    case "naranjas":
        console.log("las naranjas x10 cuestan $1")
        break;
    case "manzanas":
        console.log("las manzanas x5 cuestan $1")
        break;

    default: 
        console.log(`Lo siento no contamos con ${expr}`)
        break;
}

console.log("Gracias por su compra. Quieres comprar algo adicional? ")