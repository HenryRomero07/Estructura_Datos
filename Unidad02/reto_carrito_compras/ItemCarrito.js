const { Producto } = require('./Producto.js');

class ItemCarrito {
    #producto
    #cantidad

    constructor(producto, cantidad = 1) {
        if(!(producto instanceof Producto)){
            throw new Error("El producto no existe")
        }

        this.#validarCantidad(cantidad)

        this.#producto = producto
        this.cantidad = cantidad
    }

    #validarCantidad(cantidad){
        if(!Number.isInteger(cantidad) || cantidad <= 0 ){
            throw new Error("La cantidad debe ser un entero mayor a cero")
        }
    }

    get producto() {
        return this.#producto;
    }

    get cantidad() {
        return this.#cantidad;
    }

    set cantidad(nuevaCantidad) {
        this.#validarCantidad(nuevaCantidad)
        this.#cantidad = nuevaCantidad;
    }

    get subtotal() {
        return this.producto.precio * this.#cantidad;
    }

    toString() {
        return `${this.#cantidad} x ${this.#producto.nombre} = $${this.subtotal.toFixed(2)}`;
    }
}

module.exports = { ItemCarrito };
