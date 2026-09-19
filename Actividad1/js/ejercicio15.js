const entradaNombre      = document.getElementById("entradaNombre");
const entradaCalificacion = document.getElementById("entradaCalificacion");
const btnAgregar       = document.getElementById("btnAgregar");
const btnCalcular      = document.getElementById("btnCalcular");
const listaEstudiantes   = document.getElementById("listaEstudiantes");
const cajaPromedio       = document.getElementById("cajaPromedio");
const cajaAlta         = document.getElementById("cajaAlta");
const cajaBaja           = document.getElementById("cajaBaja");
const mensajeError       = document.getElementById("mensajeError");

let estudiantes = [];

function agregarEstudiante() {
    mensajeError.textContent = "";

    const nombre = entradaNombre.value.trim();
    const textoCalificacion = entradaCalificacion.value.trim();

    // Validacion: los campos no deben estar vacios
    if (nombre === "" || textoCalificacion === "") {
        mensajeError.textContent = "Completa el nombre y la calificacion.";
        return;
    }

    // Validacion: la calificacion debe ser un numero valido
    const calificacion = Number(textoCalificacion);

    if (isNaN(calificacion)) {
        mensajeError.textContent = "La calificacion debe ser un numero valido.";
        return;
    }

    // Creacion del objeto con sus dos propiedades
    const estudiante = {
        nombre: nombre,
        calificacion: calificacion
    };

    // Se almacena el objeto dentro del arreglo
    estudiantes.push(estudiante);

    mostrarLista();
    limpiarCampos();
}

// Recorre el arreglo con forEach() y muestra la lista en pantalla
function mostrarLista() {
    listaEstudiantes.innerHTML = "";

    if (estudiantes.length === 0) {
        listaEstudiantes.innerHTML = "<li class='vacio'>Sin estudiantes registrados</li>";
        return;
    }

    estudiantes.forEach(function (estudiante) {
        const elemento = document.createElement("li");
        elemento.innerHTML =
            "<span>" + estudiante.nombre + "</span>" +
            "<span class='calificacion'>" + estudiante.calificacion + "</span>";
        listaEstudiantes.appendChild(elemento);
    });
}

// Limpia los campos de entrada despues de agregar
function limpiarCampos() {
    entradaNombre.value = "";
    entradaCalificacion.value = "";
    entradaNombre.focus();
}

// Calcula promedio, alta y baja calificacion
function calcular() {
    mensajeError.textContent = "";
    cajaPromedio.value = "";
    cajaAlta.value = "";
    cajaBaja.value = "";

    // Validacion: debe existir al menos un estudiante
    if (estudiantes.length === 0) {
        mensajeError.textContent = "Agrega al menos un estudiante antes de calcular.";
        return;
    }

    // Promedio usando reduce() sobre la propiedad calificacion
    const sumaTotal = estudiantes.reduce(function (total, estudiante) {
        return total + estudiante.calificacion;
    }, 0);
    const promedio = sumaTotal / estudiantes.length;

    // Arreglo solo con las calificaciones (map)
    const calificaciones = estudiantes.map(function (estudiante) {
        return estudiante.calificacion;
    });

    // Calificacion mas alta y mas baja usando el operador spread
    const calificacionMaxima = Math.max(...calificaciones);
    const calificacionMinima = Math.min(...calificaciones);

    // Buscar los objetos que corresponden a esas calificaciones
    const mejorEstudiante = estudiantes.find(function (estudiante) {
        return estudiante.calificacion === calificacionMaxima;
    });

    const peorEstudiante = estudiantes.find(function (estudiante) {
        return estudiante.calificacion === calificacionMinima;
    });

    // Mostrar los resultados en las cajas readonly
    cajaPromedio.value = promedio.toFixed(2);
    cajaAlta.value = mejorEstudiante.nombre;
    cajaBaja.value = peorEstudiante.nombre;
}

btnAgregar.addEventListener("click", agregarEstudiante);
btnCalcular.addEventListener("click", calcular);


// Mostrar la lista vacia al cargar la pagina
mostrarLista();
