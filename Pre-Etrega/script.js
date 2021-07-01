class Producto {
    constructor(nombre,precio,detalle,cantidad){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = parseInt(cantidad);
        this.disponible = true;
     }
     sumaIva() {
     return this.precio * 1.21;
     }
     Venta() {
         this.disponible = false;
     }
     precioSugerido() {
         return this.precio *1.21 *1.25;
     }
 }
 
 //Array
 var arrayProductos = [];
 do{
     var comprobacion = prompt("Ingrese el nombre del producto o escriba finalizar para terminar de agregar");
     if(comprobacion === "finalizar" || comprobacion === "FINALIZAR" || comprobacion === "Finalizar") {
         break;
     }else{
         nombreP = comprobacion;
     var precioP = prompt("Ingrese el precio del producto");
     var detalleP = prompt("Ingrese el detalle del producto");
     var cantidadP = prompt("Ingrese la cantidad del producto");
     arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP)); 
     }
 }
 while(comprobacion != "finalizar" || comprobacion != "FINALIZAR" || comprobacion != "Finalizar") {
     console.log(arrayProductos);
 
     // se escribe en el <h3> El objeto ingresado con sus propiedades son:  "+precioCostoM+</h3>
 for (var producto of arrayProductos) {
     document.write(
        "<ol>"+
            "<br>"+
            "<li>Nombre del producto : "+producto.nombre+"</li>"+
            "<br>"+
            "<li>El detalle del producto es : "+producto.detalle+"</li>"+
            "<br>"+
            "<li>La cantidad disponible del producto ingresado es :   "+producto.cantidad+"</li>"+
            "<br>"+
            "<li>El producto con IVa  es  :  "+producto.sumaIva()+"</li>"+
            "<br>"+
            "<p>*************************************************************</p>"+
        "</ol>");
     }
     
     console.log(producto.nombre);
     console.log(producto.detalle);
     console.log(producto.cantidad);
     console.log(producto.sumaIva()); 
 }
 
 // Stock Bajo - Menos de 3 Productos

 var pocoStock = arrayProductos.filter(producto => producto.cantidad <= 3);
 console.log('Productos con Poco stock, comprar nuevamente');
 console.log(pocoStock);
 document.write("<h3>Lista de Productos con poco Stock (menos de 3 unidades)</h3>");

 for(var producto of pocoStock) {
    document.write("<ul><li><h3>Nombre : "+ producto.nombre + "</h3></li>");
    document.write( "<li><h3>Nombre : "+ producto.nombre + "</h3></li>");
    document.write("<li><h3>Nombre : "+ producto.nombre + "</h3></li></ul><br>");
    
 }

 //Sin Stock

 var sinStock = arrayProductos.filter(producto => producto.cantidad == 0 || producto.disponible == false);
 console.log(sinStock);
 document.write("<h3> Lista de Productos sin Stock</h3>");

 for(var producto of sinStock) {
    document.write("<ul><li><h3>Nombre: "+ producto.nombre + "</h3></li>");
    document.write("<li><h3>Detalle: "+ producto.detalle + "</h3></li>");
    document.write("<li><h3>Cantidad: "+ producto.cantidad + "</h3></li></ul><br>");
 }

 //Busqueda de producto especifico por nombre ingresado

 var ingresado = prompt("Ingresar el prodcuto que estoy buscando");
 var prodIngresado = arrayProductos.filter(producto => producto.nombre.includes(ingresado));
 console.log(prodIngresado);
 document.write("<h3>Lista de Productos ingresados encontrados: </h3>");

 for(var producto of prodIngresado) {
    document.write("<ul><li><h3>Nombre: "+ producto.nombre + "</h3></li>");
    document.write("<li><h3>Detalle: "+ producto.detalle + "</h3></li>");
    document.write("<li><h3>Precio: "+ producto.precio + "</h3></li></ul><br>");
 }


 //Ordenado por Cantidad

 var ordenadosCantidad = [];  // guardado en una nueva posición de memoria
 ordenadosCantidad =arrayProductos.map(elemento => elemento);
 ordenadosCantidad.sort(function(a,b){
     return a.cantidad - b.cantidad;
 });
 console.log("Ordenados por Cantidad de Menor a Mayor");
 console.log(ordenadosCantidad);
 document.write("<h3>Lista de Productos ordenados por cantidad: </h3>");

 for(var producto of ordenadosCantidad) {
    document.write("<ul><li><h3>Nombre: "+ producto.nombre + "</h3></li>");
    document.write("<li><h3>Detalle: "+ producto.detalle + "</h3></li>");
    document.write("<li><h3>Cantidad: "+ producto.cantidad + "</h3></li></ul><br>");
 }


 //Ordenados por Precios

var ordenadosPrecio = [];
ordenadosPrecio = arrayProductos.map(elemento => elemento);
var ordenadosPrecio = arrayProductos;
ordenadosPrecio.sort(function(a,b){
   return a.precio - b.precio;
});
console.log("Ordenados por Cantidad de Menor a Mayor");
console.log(ordenadosPrecio);
document.write("<h3>Lista de Productos ordenados por Precio de Menor a Mayor: </h3>");

for(var producto of ordenadosPrecio) {
    document.write("<ul><li><h3>Nombre: "+ producto.nombre + "</h3></li>");
    document.write("<li><h3>Detalle: "+ producto.detalle + "</h3></li>");
    document.write("<li><h3>Precio: "+ producto.precio + "</h3></li></ul><br>");
 }