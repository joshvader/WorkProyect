//1>>
//CLASE::::
class Contacto{
    constructor(nombre,correo,mensaje){
        this.nombre = nombre;
        this.correo = correo;
        this.mensaje = mensaje;
    };

};

//2>>
//ARRAY::::
let arrayContactos = [];

//3>>
//FUNCIONES::::
const botonCargarContacto = (e) =>{
    let nombre = document.querySelector('#nombre').value;
    let correo = document.querySelector('#correo').value;
    let mensaje = document.querySelector('#message').value;
    //console.log(`producto: ${producto} , cantidad: ${cantidad} , precio: ${precio}`);

    let contactos = new Contacto(nombre,correo,mensaje);
    //console.log(productos);

    arrayContactos.push(contactos);
    //console.log(arrayProductos);


    localStorage.setItem('contactos',JSON.stringify(arrayProductos));


    document.querySelector('#form').reset();
    e.preventDefault();
};


const listarContactos = () =>{
    //console.log("EEEEEEEEEEEEEEEEE");

    let contactoLocal = JSON.parse(localStorage.getItem('nombres'));
    //console.log(productosEnLocal);

    let contenedorContactos = document.querySelector('#contenedorContactos');

    let elemento = document.createElement('div');
    
    contactoLocal.map( (x) =>{
        elemento.innerHTML += `
            <div class="card text-center mt-5">
                <div class="card-body d-flex justify-content-around">
                    <strong>Tarea: ${x.producto}</strong>
                    <strong>Prioridad: ${x.cantidad}</strong>
                    <strong>Fecha: ${x.precio}</strong>
                </div>
            </div>
        `;
        contenedorContactos.appendChild(elemento);
    });

};