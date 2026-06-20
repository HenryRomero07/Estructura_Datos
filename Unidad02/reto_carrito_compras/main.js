const { Producto } = require('./Producto.js');
const { ItemCarrito } = require('./ItemCarrito.js');
const { Carrito } = require('./Carrito.js');

console.log('=== CREAR PRODUCTOS ===');
const p1 = new Producto(1, 'Manzana', 0.99, 10);
const p2 = new Producto(2, 'Pan', 2.50, 5);
const p3 = new Producto(3, 'Leche', 1.20, 8);
console.log(p1.toString(), '|', p2.toString(), '|', p3.toString());

console.log('\n=== AGREGAR AL CARRITO (CON DESCUENTO DE STOCK) ===');
const c = new Carrito();
c.agregarProducto(p1, 3).agregarProducto(p2, 2).agregarProducto(p3, 1);
console.log('Items:', c.items.length, '| Unidades:', c.cantidadTotalUnidades, '| Total: $' + c.total.toFixed(2));

console.log('\n=== QUITAR PRODUCTO (RESTAURA STOCK) ===');
console.log('Stock Pan antes de quitar:', p2.stock);
c.quitarProducto(2);
console.log('Stock Pan después:', p2.stock, '| Items:', c.items.length, '| Total: $' + c.total.toFixed(2));

console.log('\n=== QUITAR ÚLTIMO (LIFO) ===');
const ultimo = c.quitarUltimoProducto();
console.log('Quitado:', ultimo.toString());

console.log('\n=== COMPRAR (FIFO) ===');
const r = c.comprarProductos();
console.log('Comprados:', r.itemsComprados.length, '| Total pagado: $' + r.total.toFixed(2));
console.log('Carrito vacío:', c.estaVacio);

console.log('\n=== STOCK INSUFICIENTE ===');
try { c.agregarProducto(p1, 999); } catch (e) { console.log('Error:', e.message); }
