const entradaNumeros = document.getElementById("entradaNumeros");
const botonCalcular = document.getElementById("botonCalcular");
const cajaMayor = document.getElementById("cajaMayor");
const cajaMenor = document.getElementById("cajaMenor");
const cajaPromedio = document.getElementById("cajaPromedio");
const errorMsg = document.getElementById("mensajeError");

function calcular() {
  errorMsg.textContent = "";
  cajaMayor.value = "";
  cajaMenor.value = "";
  cajaPromedio.value = "";

  const textoIngresado = entradaNumeros.value.trim();

  // Validación: el campo no debe estar vacío
  if (textoIngresado === "") {
    errorMsg.textContent = "Por favor ingresa al menos un número.";
    return;
  }

  // Separar la cadena en un arreglo de subcadenas usando la coma
  const cadenaSeparada = textoIngresado.split(",");

  // Convertir cada subcadena en número
  const arregloNumeros = cadenaSeparada.map(function (valorTexto) {
    return Number(valorTexto.trim());
  });

  // Validación: todos los valores deben ser números válidos
  const hayNumeroInvalido = arregloNumeros.some(function (numero) {
    return isNaN(numero);
  });

  if (hayNumeroInvalido || cadenaSeparada.some(v => v.trim() === "")) {
    errorMsg.textContent = "Ingresa solo números válidos separados por comas.";
    return;
  }

  // Cálculo del número mayor y menor usando el operador spread
  const numeroMayor = Math.max(...arregloNumeros);
  const numeroMenor = Math.min(...arregloNumeros);

  // Cálculo del promedio usando reduce()
  const sumaTotal = arregloNumeros.reduce(function (acumulador, valor) {
    return acumulador + valor;
  }, 0);
  const promedio = sumaTotal / arregloNumeros.length;
  cajaMayor.value = numeroMayor;
  cajaMenor.value = numeroMenor;
  cajaPromedio.value = promedio;
}

botonCalcular.addEventListener("click", calcular);

