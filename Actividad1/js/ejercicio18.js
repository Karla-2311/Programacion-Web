// Seleccionar los elementos importantes del DOM
const entradaElemento = document.getElementById('nuevoElemento');
const btnAgregar = document.getElementById('btnAgregar');
const lista = document.getElementById('lista');

// Función para agregar un nuevo elemento a la lista
function agregarElemento() {
    const texto = entradaElemento.value.trim(); // Obtiene el valor del input y elimina espacios innecesarios

    if (texto !== '') {
        // Crear un nuevo elemento 'li' y un botón de eliminar
        const elementoLista = document.createElement('li');
        elementoLista.classList.add('elemento'); // Añadimos una clase al li

        const textoNodo = document.createTextNode(texto);
        elementoLista.appendChild(textoNodo); // Agrega el texto al li

        // Crear el botón de eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.addEventListener('click', function () {
            elementoLista.remove(); // Eliminar el li al hacer clic en el botón de eliminar
        });

        // Añadir el botón al li
        elementoLista.appendChild(btnEliminar);

        // Agregar el li a la lista
        lista.appendChild(elementoLista);

        // Limpiar el campo de texto
        entradaElemento.value = '';
    } else {
        // Mensaje de error con SweetAlert2 en lugar de alert()
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacio',
            text: 'Escribe algo para agregar a la lista.',
            confirmButtonColor: '#3B7EA1'
        });
    }
}

// Asignar la función al botón de agregar
btnAgregar.addEventListener('click', agregarElemento);