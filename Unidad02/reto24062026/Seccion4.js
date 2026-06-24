function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

//4.3

function factorialCola(n, acumulador = 1) {
    // Caso Base: cuando n es 0, retornamos el acumulador con el resultado
    if (n === 0) {
        return acumulador;
    }
    // Caso Recursivo (de cola): multiplicamos acumulador por n
    // y llamamos con n-1, sin operaciones pendientes después de la llamada
    return factorialCola(n - 1, acumulador * n);
}