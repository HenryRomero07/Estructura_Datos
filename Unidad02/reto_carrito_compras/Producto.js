class Producto {
    #id
    #nombre
    #precio
    #stock

    constructor(id, nombre, precio, stockInicial) {
        if (precio < 0){
            throw new Error("El valor del precio no puede ser negativo")
        }
        if(!Number.isInteger(stockInicial) || stockInicial < 0){
            throw new Error(`stock inicial invalido para "${nombre}": ${stockInicial}`)
        }
        this.#id = id
        this.#nombre = nombre
        this.#precio = precio
        this.#stock = stockInicial
    }

    get id() {
        return this.#id;
    }

    get nombre() {
        return this.#nombre;
    }

    get precio() {
        return this.#precio;
    }

    get stock() {
        return this.#stock;
    }

    get hayStockDisponible() {
        return this.#stock > 0;
    }

    set precio(nuevoPrecio) {
        if (typeof nuevoPrecio !== "number" || nuevoPrecio < 0) {
            throw new Error(`Precio inválido para "${this.#nombre}": ${nuevoPrecio}`);
        }
        this.#precio = nuevoPrecio;
    }

    reducirStock(cantidad){
        this.#validadCantidad(cantidad)
        if(cantidad > this.#stock){
            throw new Error(`stock de ${this.#nombre} insuficiente. Solo existen ${this.#stock} "`)
        }
        this.#stock -= cantidad
        return this.#stock
    }

    incrementarStock(cantidad){
        this.#validadCantidad(cantidad)
        this.#stock += cantidad
        return this.#stock
    }

    #validadCantidad(cantidad){
        if(!Number.isInteger(cantidad) || cantidad <= 0 ){
            throw new Error("La cantidad de stock a remover debe ser un entero mayor a cero")
        }
    }

    toString() {
        return `${this.#nombre} ($${this.#precio.toFixed(2)})`
    }
}

module.exports = { Producto };
