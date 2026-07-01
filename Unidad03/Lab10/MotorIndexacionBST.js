// Estructura del Nodo del Índice
class NodoBusqueda {
    constructor(keyword, urlCache) {
        this.keyword = keyword
        this.urlCache = urlCache
        this.visitas = 1
        this.izquierdo = null
        this.derecho = null
    }
}

// Implementación del TDA Árbol Binario de Búsqueda
class MotorIndexacionBST {
    constructor() {
        this.raiz = null
    }

    // Indexar nueva consulta en el historial
    indexar(keyword, urlCache) {
        const nuevoNodo = new NodoBusqueda(keyword, urlCache)

        if (this.raiz === null) {
            this.raiz = nuevoNodo
            return
        }
        this._insertarNodo(this.raiz, nuevoNodo)

    }

    
    _insertarNodo(nodoActual, nuevoNodo) {
        while (true) {
            if (nuevoNodo.keyword === nodoActual.keyword) {
                nodoActual.visitas++
                return
            } else if (nuevoNodo.keyword < nodoActual.keyword) {
                if (nodoActual.izquierdo === null) {
                    nodoActual.izquierdo = nuevoNodo
                    return
                }
                nodoActual = nodoActual.izquierdo
            } else {
                if (nodoActual.derecho === null) {
                    nodoActual.derecho = nuevoNodo
                    return
                }
                nodoActual = nodoActual.derecho
            }
        }

    }

    // Buscar una palabra clave en el historial (O(log n) esperado)
    buscar(keyword) {
        let actual = this.raiz
        while (actual !== null) {
            if (keyword === actual.keyword) {
                return actual
            } else if (keyword < actual.keyword) {
                actual = actual.izquierdo
            } else {
                actual = actual.derecho
            }
        }
        return null
    }

    // Recorrido Inorden: exporta el historial ordenado alfabéticamente (A-Z)
    exportarHistorial(nodo = this.raiz, resultado = []) {
        if (nodo !== null) {
            this.exportarHistorial(nodo.izquierdo, resultado);
            resultado.push({ keyword: nodo.keyword, urlCache: nodo.urlCache, visitas: nodo.visitas });
            this.exportarHistorial(nodo.derecho, resultado);
        }
        return resultado;
    }
}
