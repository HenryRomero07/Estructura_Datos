const { Producto } = require('./Producto.js');
const { ItemCarrito } = require('./ItemCarrito.js');

class Carrito {
  #colaItems;

  constructor() {
    this.#colaItems = []
  }

  #buscarItemPorId(idProducto) {
      return this.#colaItems.find((item) => item.producto.id === idProducto);
  }

  agregarProducto(producto, cantidad = 1) {
    producto.reducirStock(cantidad)
    const itemExistente = this.#buscarItemPorId(producto.id)

    if(itemExistente){
      itemExistente.cantidad = itemExistente.cantidad + cantidad
    } else {
      this.#colaItems.push(new ItemCarrito(producto, cantidad))
    }
    return this
  }

  quitarProducto(idProducto) {
    const indice = this.#colaItems.findIndex((item) => item.producto.id === idProducto)

    if (indice === -1) {
      console.warn(`"${idProducto}" no esta en el carrito`)
      return this
    }

    const [itemEliminado] = this.#colaItems.splice(indice, 1);

    itemEliminado.producto.incrementarStock(itemEliminado.cantidad);

    return this
  }

  quitarUltimoProducto() {
    if (this.estaVacio) {
      console.warn("El carrito está vacío, no hay nada que quitar");
      return null;
    }

    const ultimoItem = this.#colaItems.pop();

    ultimoItem.producto.incrementarStock(ultimoItem.cantidad);

    return ultimoItem;
  }

  comprarProductos() {
    if (this.estaVacio) {
      console.warn("El carrito está vacío. no hay nada que comprar");
      return { itemsComprados: [], total: 0 };
    }

    const itemsComprados = [];
    let totalPagado = 0;

    while (!this.estaVacio) {
      const item = this.#colaItems.shift();
      totalPagado += item.subtotal;
      itemsComprados.push(item);
      console.log(`Procesado (FIFO): ${item.toString()}`);
    }

    return {
      itemsComprados,
      total: totalPagado,
    };
  }

  obtenerSubtotal(idProducto) {
    const item = this.#buscarItemPorId(idProducto);
    return item ? item.subtotal : 0;
  }

  get items() {
    return [...this.#colaItems];
  }

  get cantidadTotalUnidades() {
    return this.items.reduce((acumulado, item) => acumulado + item.cantidad, 0);
  }

  get total() {
    return this.items.reduce((acumulado, item) => acumulado + item.subtotal, 0);
  }

  get estaVacio() {
    return this.#colaItems.length === 0;
  }
}

module.exports = { Carrito };
