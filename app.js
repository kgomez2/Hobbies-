const datos = []; //arreglo vacio donde almacenare datos

function mostrarDatos() { //nombre de mi funcion y mostrara la funcion
    const outputDiv = document.getElementById('output'); //su ID un cont donde se mostraran los datos
    outputDiv.innerHTML = ''; //borra cualquier contenido que pueda estar presente en el id

    for (let i = 0; i < datos.length; i++) { //recorrerá cada elemento en el arreglo
        const dataItem = document.createElement('div'); //se crea un nuevo elemento
        dataItem.textContent = datos[i];
        dataItem.dataset.index = i; 

        dataItem.addEventListener('click', () => manejarDato(i)); // Cuando se hace clic en el elemento, se ejecutará la función

        outputDiv.appendChild(dataItem); //lo que aparezca en la pag
    }
}

function editarDato(index) { // permite editar un dato en el arreglo
    const nuevoDato = prompt('Editar dato:', datos[index]);
    if (nuevoDato !== null && nuevoDato.trim() !== '') {
        datos[index] = nuevoDato;
        mostrarDatos();
    }
}

function eliminarDato(index) { // elimina un dato del arreglo
    datos.shift(index, 1); 
    mostrarDatos();
}

function manejarDato(index) { //e pregunta al usuario si quiere editar o eliminar un dato 
    const accion = prompt('Seleccione una acción:\n1. Editar\n2. Eliminar');
    if (accion === '1') {
        editarDato(index);
    } else if (accion === '2') {
        eliminarDato(index);
    } else {
        alert('Opción inválida');
    }
}

function ingresarDato() {
    const dato = prompt('Ingrese un dato:');
    if (dato !== null && dato.trim() !== '') {
        datos.push(dato);
        mostrarDatos();
    }
}

while (true) {
    const opcion = prompt('Seleccione una opción:\n1. Ingresar dato\n2. Mostrar datos\n3. Salir');
    
    if (opcion === '1') {
        ingresarDato();
    } else if (opcion === '2') {
        mostrarDatos();
    } else if (opcion === '3') {
        break;
    } else {
        alert('Opción inválida');
    }
}





















