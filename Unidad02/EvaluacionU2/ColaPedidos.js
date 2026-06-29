// Cola circular para gestionar pedidos
class ColaPedidos {

  constructor(capacidad = 10) {
    this.buffer = new Array(capacidad);
    this.capacidad = capacidad;
    this.frente = 0;
    this.final = 0;
    this.contadorId = 0;
  }

  // Verifica si la cola está llena
  estaLlena() {
    return (this.final + 1) % this.capacidad === this.frente;
  }

  // Agrega un pedido al final de la cola
  encolarPedido(cliente, items) {
    if (this.estaLlena()) return null;
    if (!items || items.length === 0) return null;
    this.contadorId++;
    const pedido = {
      id: this.contadorId,
      cliente,
      items,
      hora: new Date().toLocaleTimeString(),
      cancelado: false
    };
    this.buffer[this.final] = pedido;
    this.final = (this.final + 1) % this.capacidad;
    return pedido;
  }

  // Atiende y extrae el primer pedido no cancelado
  atenderPedido() {
    if (this.frente === this.final) return null;
    while (this.frente !== this.final && this.buffer[this.frente].cancelado) {
      this.frente = (this.frente + 1) % this.capacidad;
    }
    if (this.frente === this.final) return null;
    const pedido = this.buffer[this.frente];
    this.frente = (this.frente + 1) % this.capacidad;
    return pedido;
  }

  // Retorna true si no hay pedidos activos
  estaVacia() {
    if (this.frente === this.final) return true;
    for (let i = this.frente; i !== this.final; i = (i + 1) % this.capacidad) {
      if (!this.buffer[i].cancelado) return false;
    }
    return true;
  }

  // Cuenta pedidos activos (no cancelados)
  totalPendientes() {
    let count = 0;
    for (let i = this.frente; i !== this.final; i = (i + 1) % this.capacidad) {
      if (!this.buffer[i].cancelado) count++;
    }
    return count;
  }

  // Devuelve array con pedidos activos
  verTodos() {
    const activos = [];
    for (let i = this.frente; i !== this.final; i = (i + 1) % this.capacidad) {
      if (!this.buffer[i].cancelado) activos.push(this.buffer[i]);
    }
    return activos;
  }

  // Busca por ID (número) o cliente (string)
  estaEnCola(identificador) {
    for (let i = this.frente; i !== this.final; i = (i + 1) % this.capacidad) {
      if (this.buffer[i].cancelado) continue;
      if (typeof identificador === 'number' && this.buffer[i].id === identificador) return true;
      if (typeof identificador === 'string' && this.buffer[i].cliente === identificador) return true;
    }
    return false;
  }

  // Marca un pedido como cancelado por su ID
  cancelarPedido(id) {
    for (let i = this.frente; i !== this.final; i = (i + 1) % this.capacidad) {
      if (this.buffer[i].id === id) {
        if (this.buffer[i].cancelado) return false;
        this.buffer[i].cancelado = true;
        return true;
      }
    }
    return false;
  }

  // Modifica cliente y/o items de un pedido activo
  modificarPedido(id, nuevosDatos) {
    for (let i = this.frente; i !== this.final; i = (i + 1) % this.capacidad) {
      if (this.buffer[i].id === id) {
        if (this.buffer[i].cancelado) return null;
        if (nuevosDatos.cliente !== undefined) this.buffer[i].cliente = nuevosDatos.cliente;
        if (nuevosDatos.items !== undefined) this.buffer[i].items = nuevosDatos.items;
        return this.buffer[i];
      }
    }
    return null;
  }

  // Suma precios de todos los pedidos activos
  calcularTotalVentas() {
    return this._calcularTotalRecursivo(this.frente);
  }

  _calcularTotalRecursivo(posicion) {
    if (posicion === this.final) return 0;
    let total = 0;
    if (!this.buffer[posicion].cancelado) {
      for (const item of this.buffer[posicion].items) {
        total += item.precio || 0;
      }
    }
    return total + this._calcularTotalRecursivo((posicion + 1) % this.capacidad);
  }

  // Genera estadísticas: total, cliente frecuente, platillo popular
  generarResumen() {
    const activos = this.verTodos();
    const totalPedidos = activos.length;
    const totalVentas = this.calcularTotalVentas();
    const clienteMap = {};
    const platilloMap = {};
    for (const p of activos) {
      clienteMap[p.cliente] = (clienteMap[p.cliente] || 0) + 1;
      for (const item of p.items) {
        platilloMap[item.platillo] = (platilloMap[item.platillo] || 0) + 1;
      }
    }
    let clienteFrecuente = '—';
    let maxCliente = 0;
    for (const [cliente, count] of Object.entries(clienteMap)) {
      if (count > maxCliente) { maxCliente = count; clienteFrecuente = cliente; }
    }
    let platilloPopular = '—';
    let maxPlatillo = 0;
    for (const [platillo, count] of Object.entries(platilloMap)) {
      if (count > maxPlatillo) { maxPlatillo = count; platilloPopular = platillo; }
    }
    return { totalPedidos, totalVentas, clienteFrecuente, platilloPopular };
  }

  // Busca pedido por ID de forma recursiva
  buscarPedidoRecursivo(id, posicion) {
    if (posicion === undefined) posicion = this.frente;
    if (posicion === this.final) return null;
    if (this.buffer[posicion].id === id && !this.buffer[posicion].cancelado) {
      return this.buffer[posicion];
    }
    return this.buscarPedidoRecursivo(id, (posicion + 1) % this.capacidad);
  }

  // Genera tickets de todos los pedidos activos (recursivo)
  generarTicketsRecursivo(posicion = this.frente, acumulador = '') {
    if (posicion === this.final) return acumulador;
    const p = this.buffer[posicion];
    if (p.cancelado) {
      return this.generarTicketsRecursivo((posicion + 1) % this.capacidad, acumulador);
    }
    let encabezado = `--- Pedido #${p.id} — ${p.cliente} ---\n`;
    let items = '';
    let subtotal = 0;
    for (const item of p.items) {
      items += `  ${item.platillo.padEnd(20)} S/ ${(item.precio || 0).toFixed(2)}\n`;
      subtotal += item.precio || 0;
    }
    let totalLinea = `  ${'-'.repeat(20)} ---------\n  ${'Total'.padEnd(20)} S/ ${subtotal.toFixed(2)}\n\n`;
    return this.generarTicketsRecursivo(
      (posicion + 1) % this.capacidad,
      acumulador + encabezado + items + totalLinea
    );
  }
}

export default ColaPedidos;