// seleccionando y guardando en una constante la clase acordeon-item que contiene todo lo relacionado a nuestro acordeon

const itemsAcordeon = document.querySelectorAll('.acordeon_item');

// Realizando la funcion para mostrar y ocultar el contenido del acordeon al hacer click

itemsAcordeon.forEach(item => {
    const titulo = item.querySelector('.acordeon_titulo');
    const contenido = item.querySelector('.acordeon_contenido');
    const icono =item.querySelector('.acordeon-icono i');

    //creando el evento que al hacer click, cambien la clase de los elementos del contenido y el icono para mostrar y ocultar
    titulo.addEventListener('click', ()=> {
        contenido.classList.toggle('show_1');
        if (icono.classList.contains('bi-caret-down-square')) {
            icono.classList.remove('bi-caret-down-square');
            icono.classList.add('bi-caret-up-square');
          } else {
            icono.classList.remove('bi-caret-up-square');
            icono.classList.add('bi-caret-down-square');}
        // icono.name = contenido.classList.contains('show_1') ? 'bi bi-caret-down-square' : 'bi bi-caret-up-square';
    })
})
