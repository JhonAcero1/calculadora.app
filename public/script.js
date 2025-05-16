const formulario = document.getElementById('formulario-gasto');
const tabla = document.getElementById('tabla-gastos').getElementsByTagName('tbody')[0];
const totalSpan = document.getElementById('total');

let total = 0;

formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  const descripcion = document.getElementById('descripcion').value;
  const monto = parseFloat(document.getElementById('monto').value);
  const categoria = document.getElementById('categoria').value;

  if (!descripcion || isNaN(monto)) return;

  const fila = tabla.insertRow();

  fila.innerHTML = `
    <td>${descripcion}</td>
    <td>S/. ${monto.toFixed(2)}</td>
    <td>${categoria}</td>
    <td><button class="eliminar">Eliminar</button></td>
  `;

  total += monto;
  totalSpan.textContent = total.toFixed(2);

  fila.querySelector('.eliminar').addEventListener('click', function () {
    total -= monto;
    totalSpan.textContent = total.toFixed(2);
    fila.remove();
  });

  formulario.reset();
});
