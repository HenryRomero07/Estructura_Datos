
class NodoArbol {
    constructor(valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}



function recorridoInorden(raiz) {
    // Caso Base: Si el nodo es null, retornamos arreglo vacío
    if (raiz === null) {
        return [];
    }
    // Caso Recursivo: Izquierdo → Raíz → Derecho
    return [
        ...recorridoInorden(raiz.izquierdo),
        raiz.valor,
        ...recorridoInorden(raiz.derecho)
    ];
}

function recorridoPreorden(raiz) {
    // Caso Base: Si el nodo es null, retornamos arreglo vacío
    if (raiz === null) {
        return [];
    }
    // Caso Recursivo: Raíz → Izquierdo → Derecho
    return [
        raiz.valor,
        ...recorridoPreorden(raiz.izquierdo),
        ...recorridoPreorden(raiz.derecho)
    ];
}

function recorridoPostorden(raiz) {
    // Caso Base: Si el nodo es null, retornamos arreglo vacío
    if (raiz === null) {
        return [];
    }
    // Caso Recursivo: Izquierdo → Derecho → Raíz
    return [
        ...recorridoPostorden(raiz.izquierdo),
        ...recorridoPostorden(raiz.derecho),
        raiz.valor
    ];
}



