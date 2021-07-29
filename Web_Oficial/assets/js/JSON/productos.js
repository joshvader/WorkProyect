 let productos = [
     //Detergentes
 {  id: 1,
    nombre : 'Detergente Matic Ultra 3 Litros',
    detalle: "PH nivelado",
    img: 'http://crucakuyen.com/img/detergente/520_.png',
    precio: 3500
},
{
    id: 2,
    nombre : 'Detergente Piel Sensible 3 Litros',
    detalle: "PH nivelado",
    img: 'http://crucakuyen.com/img/detergente/520_2.png',
    precio: 3500
},
{
    id: 3,
    nombre : 'Detergente Premium Menta',
    detalle: "PH nivelado",
    img: 'http://crucakuyen.com/img/detergente/520_3.png',
    precio: 4500
},
{
    id: 4,
    nombre : 'Detergente Premium Turquesa',
    detalle: "PH nivelado",
    img: './assets/img/detergente/520_4.png',
    precio: 4500
},

{
    id: 5,
    nombre : 'Detergente Líquido Perlado.',
    detalle: "PH nivelado",
    img: 'http://crucakuyen.com/img/detergente/520.png',
    precio: 4500
},
//Limpieza
{
    id: 6,
    nombre : 'Limpiador Antigrasa',
    detalle: "Remueve todo tipo de manchas de aceite, grasas y suciedad en general.",
    img: './assets/img/limpieza/580_1.png',
    precio: 2800
},
{
    id: 7,
    nombre : 'Eliminador de Sarro',
    detalle: "Limpia y remueve eficazmente el sarro dejando impecable todo tipo de superficies y artefactos.",
    img: './assets/img/limpieza/580_2.png',
    precio: 2800
},
{
    id: 8,
    nombre : 'Limpiador Multiuso',
    detalle: "Limpia todas las superficies de una manera eficaz sin dejar residuos secando rápidamente dejando un brillo natural. No raya la superficie tratada.",
    img: './assets/img/limpieza/580_3.png',
    precio: 2800
},
{
    id: 9,
    nombre : 'Pintura Para Pisos',
    detalle: "Pintura recomendada para pisos de hormigón, madera, ladrillo,",
    img: './assets/img/limpieza/580_4.png',
    precio: 2800
},
{
    id: 10,
    nombre : 'Limpiador de Pisos y Superficies Aroma Bambú',
    detalle: "PH nivelado para la limpieza de superficies en general tales como pisos, baños, mesones, o cualquier superficie en el hogar.",
    img: './assets/img/limpieza/580_5.png',
    precio: 2800
},
{
    id: 11,
    nombre : 'Limpiador de Pisos y Superficies Aroma Lavanda',
    detalle: "PH nivelado para la limpieza de superficies en general tales como pisos, baños, mesones, o cualquier superficie en el hogar.",
    img: './assets/img/limpieza/580_6.png',
    precio: 2800
},
{
    id: 12,
    nombre : 'Limpiador de Pisos y Superficies Aroma Primavera',
    detalle: "PH nivelado",
    img: './assets/img/limpieza/580_7.png',
    precio: 2800
},
{
    id: 13,
    nombre : 'Lavalozas Concentrado Aroma Limón',
    detalle: "PH nivelado, elaborado especialmente para la limpieza de sus platos o utensilios de cocina, proporcionando un brillo y un agradable aroma a limón sin dejar rastro de grasa.",
    img: './assets/img/limpieza/580_8.png',
    precio: 2800
},
//Suavizante
{
    id: 14,
    nombre : 'Suavizante de Ropa',
    detalle: "Suavisante Glim proporciona a las prendas untuosidad y suavidad.",
    img: 'http://crucakuyen.com/img/suavisante/580.png',
    precio: 5500
}

];

const keyLocalStorage = "productos";

if (localStorage.getItem("productos") == null){
    localStorage.setItem(keyLocalStorage, JSON.stringify(productos));
};
