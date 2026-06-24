function sumaDigitos(n) {
    // TODO: Implementar el Caso Base
    // Si n es un solo digito (0-9), retornamos n directamente
    if (n < 10) {
        return n;
    }
    // TODO: Implementar el Caso Recursivo
    //Obtenemos el ultimo digito (n % 10) y lo sumamos a la llamada recursiva con el resto del numero (n / 10 sin decimales)
    return (n % 10) + sumaDigitos(Math.floor(n/10))
}

// Casos de prueba para validación
console.assert(sumaDigitos(1243) === 10, "Error en sumaDigitos(1243)");
console.assert(sumaDigitos(0) === 0, "Error en sumaDigitos(0)");
console.assert(sumaDigitos(9) === 9, "Error en sumaDigitos(9)");
console.log("Ejercicio 1.1 superado.");


// 1.2
function potencia(base, exponente) {
    // Caso Base: Todo numero elevado a 0 es 1
    if (exponente === 0) {
        return 1;
    }

    // TODO: Implementar algoritmo recursivo optimizado
    // Si el exponente es par: base^(n) = (base^(n/2))^2
    if (exponente % 2 === 0) {
        return potencia(base, exponente / 2) * potencia(base, exponente / 2);
    }
    // Si el exponente es impar = base^n = base * base^(n-1)
        return base * (potencia(base, (exponente - 1)/2) * potencia(base, (exponente - 1)/2));
}

// Casos de prueba para validación
console.assert(potencia(2, 10) === 1024, "Error en potencia(2, 10)");
console.assert(potencia(5, 3) === 125, "Error en potencia(5, 3)");
console.assert(potencia(7, 0) === 1, "Error en potencia(7, 0)");
console.log("Ejercicio 1.2 superado.");
