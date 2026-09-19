const inputPesos = document.getElementById('pesos');
const inputDolares = document.getElementById('dolares');
const errorMsg = document.getElementById('error');
const btnConvertir = document.getElementById('btnConvertir');

function convertir() {
  const valor = inputPesos.value.trim();

  // Validación: campo vacío
  if (valor === '') {
    errorMsg.textContent = 'Por favor ingresa un valor.';
    inputDolares.value = '';
    return;
  }

  // Validación: valor numérico
  const pesos = Number(valor);
  if (isNaN(pesos)) {
    errorMsg.textContent = 'El valor ingresado debe ser numérico.';
    inputDolares.value = '';
    return;
  }

  // Cálculo 
  errorMsg.textContent = '';
  const dolares = (pesos * 0.055);
  inputDolares.value = dolares.toFixed(2) ;
}

btnConvertir.addEventListener('click', convertir);
