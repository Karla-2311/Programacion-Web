const inputCelsius = document.getElementById('celsius');
const inputFahrenheit = document.getElementById('fahrenheit');
const errorMsg = document.getElementById('error');
const btnConvertir = document.getElementById('btnConvertir');

function convertir() {
  const valor = inputCelsius.value.trim();

  // Validación: campo vacío
  if (valor === '') {
    errorMsg.textContent = 'Por favor ingresa un valor.';
    inputFahrenheit.value = '';
    return;
  }

  // Validación: valor numérico
  const celsius = Number(valor);
  if (isNaN(celsius)) {
    errorMsg.textContent = 'El valor ingresado debe ser numérico.';
    inputFahrenheit.value = '';
    return;
  }

  // Cálculo 
  errorMsg.textContent = '';
  const fahrenheit = (celsius * 9 / 5) + 32;
  inputFahrenheit.value = fahrenheit.toFixed(1) ;
}

btnConvertir.addEventListener('click', convertir);
