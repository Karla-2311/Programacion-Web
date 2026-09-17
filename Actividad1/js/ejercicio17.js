// Referencias a los elementos del DOM
const entradaTarea = document.getElementById("entradaTarea");
const btnAgregar   = document.getElementById("btnAgregar");
const listaTareas  = document.getElementById("listaTareas");

// Clave usada para guardar en Local Storage
const claveAlmacenamiento = "tareasPendientes";

// obtenerTareas(): recupera el arreglo guardado en Local Storage
function obtenerTareas() {
    const datosGuardados = localStorage.getItem(claveAlmacenamiento);
    return datosGuardados ? JSON.parse(datosGuardados) : [];
}

// manejarTareas: closure que encapsula el arreglo "tareas"
const manejarTareas = (function () {
    let tareas = obtenerTareas();

    function guardar() {
        localStorage.setItem(claveAlmacenamiento, JSON.stringify(tareas));
    }

    function agregar(textoTarea) {
        tareas.push({ texto: textoTarea });
        guardar();
    }

    function eliminar(indice) {
        tareas.splice(indice, 1);
        guardar();
    }

    function listar() {
        return tareas;
    }

    return { agregar, eliminar, listar };
})();

// agregarTarea(): agrega la tarea escrita en el input
function agregarTarea() {
    const textoTarea = entradaTarea.value.trim();

    if (textoTarea === "") {
        return;
    }

    manejarTareas.agregar(textoTarea);
    entradaTarea.value = "";
    renderizarTareas();
}

// eliminarTarea(indice): confirma con SweetAlert2 y elimina si el usuario acepta
function eliminarTarea(indice) {
    Swal.fire({
        title: '¿Eliminar esta tarea?',
        showCancelButton: true
    }).then(function (resultado) {
        if (resultado.isConfirmed) {
            manejarTareas.eliminar(indice);
            renderizarTareas();
        }
    });
}

// renderizarTareas(): dibuja las tareas en pantalla
function renderizarTareas() {
    const tareas = manejarTareas.listar();
    listaTareas.innerHTML = "";

    tareas.forEach(function (tarea, indice) {
        const elemento = document.createElement("li");

        const textoSpan = document.createElement("span");
        textoSpan.textContent = tarea.texto;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", function () {
            eliminarTarea(indice);
        });

        elemento.appendChild(textoSpan);
        elemento.appendChild(btnEliminar);
        listaTareas.appendChild(elemento);
    });
}

// Eventos
btnAgregar.addEventListener("click", agregarTarea);

// Cargar las tareas guardadas al abrir la pagina
renderizarTareas();