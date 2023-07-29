function agregarTarea() {
    const nuevaTareaInput = document.getElementById('nuevaTarea');
    const nuevaTareaTexto = nuevaTareaInput.value.trim();
  
    if (nuevaTareaTexto !== "") {
      const listaTareas = document.getElementById('listaTareas');
      const nuevaTareaElemento = document.createElement('li');
      nuevaTareaElemento.textContent = nuevaTareaTexto;
  
      const completarBoton = document.createElement('button');
      completarBoton.textContent = "Completar";
      completarBoton.onclick = function () {
        nuevaTareaElemento.classList.toggle("completada");
      };
  
      const eliminarBoton = document.createElement('button');
      eliminarBoton.textContent = "Eliminar";
      eliminarBoton.onclick = function () {
        listaTareas.removeChild(nuevaTareaElemento);
      };
  
      nuevaTareaElemento.appendChild(completarBoton);
      nuevaTareaElemento.appendChild(eliminarBoton);
  
      listaTareas.appendChild(nuevaTareaElemento);
      nuevaTareaInput.value = "";
    }
  }
  