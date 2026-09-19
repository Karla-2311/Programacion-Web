const inputKilometros = document.getElementById('kilometros');
const inputMillas = document.getElementById('millas');
const errorMsg = document.getElementById('error');
const btnConvertir = document.getElementById('btnConvertir');

function convertir() {
  const valor = inputKilometros.value.trim();

  // Validación: campo vacío
  if (valor === '') {
    errorMsg.textContent = 'Por favor ingresa un valor.';
    inputMillas.value = '';
    return;
  }

  // Validación: valor numérico
  const kilometros = Number(valor);
  if (isNaN(kilometros)) {
    errorMsg.textContent = 'El valor ingresado debe ser numérico.';
    inputMillas.value = '';
    return;
  }

  // Cálculo 
  errorMsg.textContent = '';
  const millas = (kilometros * 0.621371);
  inputMillas.value = millas.toFixed(5) ;
}

btnConvertir.addEventListener('click', convertir);
