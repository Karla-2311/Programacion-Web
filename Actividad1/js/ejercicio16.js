// Funciones flecha para cada operacion
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: Division por cero';

const campoNumero1 = document.getElementById("numero1");
const campoNumero2 = document.getElementById("numero2");
const campoResultado = document.getElementById("resultado");

// Muestra un mensaje de error usando SweetAlert2
const mostrarError = mensaje => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: mensaje,
        confirmButtonColor: '#3B7EA1'
    });
};

// Funcion principal: coordina el flujo segun la operacion elegida
function calcularOperacion(operacion) {
    campoResultado.value = "";

    const textoNumero1 = campoNumero1.value.trim();
    const textoNumero2 = campoNumero2.value.trim();

    // Validacion: los campos no deben estar vacios
    if (textoNumero1 === "" || textoNumero2 === "") {
        mostrarError("Completa ambos numeros antes de calcular.");
        return;
    }

    const valorNumero1 = Number(textoNumero1);
    const valorNumero2 = Number(textoNumero2);

    // Validacion: los valores ingresados deben ser numeros validos
    if (isNaN(valorNumero1) || isNaN(valorNumero2)) {
        mostrarError("Ingresa valores numericos validos.");
        return;
    }

    let resultado;

    // Llama a la funcion flecha correspondiente segun la operacion
    switch (operacion) {
        case 'suma':
            resultado = sumar(valorNumero1, valorNumero2);
            break;
        case 'resta':
            resultado = restar(valorNumero1, valorNumero2);
            break;
        case 'multiplicacion':
            resultado = multiplicar(valorNumero1, valorNumero2);
            break;
        case 'division':
            resultado = dividir(valorNumero1, valorNumero2);
            break;
        default:
            mostrarError("Operacion no reconocida.");
            return;
    }

    // Si la division devolvio el mensaje de error, se muestra con SweetAlert2
    if (resultado === 'Error: Division por cero') {
        mostrarError("No se puede dividir entre cero.");
        return;
    }

    campoResultado.value = resultado;
}