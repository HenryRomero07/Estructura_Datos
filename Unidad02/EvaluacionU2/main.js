import ColaPedidos from './ColaPedidos.js';

// Instancia de la cola con capacidad 10
const cocina = new ColaPedidos(10);

// Items temporales antes de registrar el pedido
let itemsTemp = [];

// Referencias a elementos del DOM
const form = document.getElementById('formPedido');
const inputCliente = document.getElementById('inputCliente');
const inputPlatillo = document.getElementById('inputPlatillo');
const inputPrecio = document.getElementById('inputPrecio');
const btnAgregarItem = document.getElementById('btnAgregarItem');
const previewLista = document.getElementById('previewLista');
const contadorItems = document.getElementById('contadorItems');
const btnRegistrar = document.getElementById('btnRegistrar');
const btnAtender = document.getElementById('btnAtender');
const tbody = document.getElementById('cuerpoTabla');
const contenedorTickets = document.getElementById('contenedorTickets');
const totalPendientesEl = document.getElementById('totalPendientes');
const totalVentasEl = document.getElementById('totalVentas');
const datalist = document.getElementById('listaClientes');

// Renderiza la vista previa de items del pedido actual
function renderizarPreview() {
  previewLista.innerHTML = '';
  itemsTemp.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'preview-item';
    div.innerHTML = `
      <span>${item.platillo} — S/ ${item.precio.toFixed(2)}</span>
      <button class="btn-quitar" data-idx="${idx}">✕</button>
    `;
    previewLista.appendChild(div);
  });
  contadorItems.textContent = itemsTemp.length;
  btnRegistrar.disabled = itemsTemp.length === 0;
}

// Renderiza la tabla de pedidos, totales y tickets
function renderizar() {
  const pedidos = cocina.verTodos();
  tbody.innerHTML = '';

  pedidos.forEach(p => {
    const fila = document.createElement('tr');
    const listaPlatillos = p.items.map(i => i.platillo).join(', ');
    const totalPedido = p.items.reduce((s, i) => s + (i.precio || 0), 0);
    fila.innerHTML = `
      <td>${p.id}</td>
      <td>${p.cliente}</td>
      <td title="${listaPlatillos}">${listaPlatillos}</td>
      <td>S/ ${totalPedido.toFixed(2)}</td>
      <td>${p.hora}</td>
      <td>
        <button class="btn-cancelar" data-id="${p.id}">Cancelar</button>
      </td>
    `;
    tbody.appendChild(fila);
  });

  totalPendientesEl.textContent = cocina.totalPendientes();
  totalVentasEl.textContent = `S/ ${cocina.calcularTotalVentas().toFixed(2)}`;
  contenedorTickets.textContent = cocina.generarTicketsRecursivo() || 'Sin pedidos.';

  const clientes = [...new Set(pedidos.map(p => p.cliente))];
  datalist.innerHTML = clientes.map(c => `<option value="${c}">`).join('');
}

// Agrega un item a la lista temporal
btnAgregarItem.addEventListener('click', () => {
  const platillo = inputPlatillo.value.trim();
  const precio = parseFloat(inputPrecio.value) || 0;
  if (!platillo || precio <= 0) return;
  itemsTemp.push({ platillo, precio });
  inputPlatillo.value = '';
  inputPrecio.value = '';
  inputPlatillo.focus();
  renderizarPreview();
});

// Quita un item de la lista temporal desde el preview
previewLista.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-quitar');
  if (!btn) return;
  const idx = parseInt(btn.dataset.idx, 10);
  itemsTemp.splice(idx, 1);
  renderizarPreview();
});

// Envía el formulario y encola el pedido
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const cliente = inputCliente.value.trim();
  if (!cliente || itemsTemp.length === 0) return;

  if (!cocina.encolarPedido(cliente, [...itemsTemp])) {
    alert('Cola llena. Atiende un pedido primero.');
    return;
  }
  itemsTemp = [];
  renderizarPreview();
  renderizar();
  inputPlatillo.focus();
});

// Actualiza el texto del botón según el cliente ingresado
inputCliente.addEventListener('input', () => {
  btnRegistrar.textContent = inputCliente.value.trim()
    ? `Registrar Pedido (${itemsTemp.length} item${itemsTemp.length !== 1 ? 's' : ''})`
    : 'Registrar Pedido';
});

// Atiende el siguiente pedido
btnAtender.addEventListener('click', () => {
  cocina.atenderPedido();
  renderizar();
});

// Cancela un pedido desde la tabla
tbody.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-cancelar');
  if (!btn) return;
  cocina.cancelarPedido(parseInt(btn.dataset.id));
  renderizar();
});

renderizar();