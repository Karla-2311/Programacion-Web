const inputEdad = document.getElementById('edad');
const inputVotar = document.getElementById('votar');
const errorMsg = document.getElementById('error');
const btnConvertir = document.getElementById('btnConvertir');

function convertir() {
  const valor = inputEdad.value.trim();

  // Validación: campo vacío
  if (valor === '') {
    errorMsg.textContent = 'Por favor ingresa un valor.';
    inputVotar.value = '';
    return;
  }

  // Validación: valor numérico
  const edad = Number(valor);
  if (isNaN(edad)) {
    errorMsg.textContent = 'El valor ingresado debe ser numérico.';
    inputVotar.value = '';
    return;
  }

  // Cálculo 
  errorMsg.textContent = '';
  if (edad >= 18){
    inputVotar.value='Puedes votar';
  }else {inputVotar.value='No puedes votar';
  }
  return edad;
}

btnConvertir.addEventListener('click', convertir);