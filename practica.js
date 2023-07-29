// let nombre = "pepito";
// let edad = 34;
// let direccion = "AV";

/* 
estructura de un objeto

{clave1: valor1, clave2: valor2, ..., claven: valorn}
*/

// const persona1 = {
//   nombre: "pepito",
//   edad: 34,
//   direccion: "AV",
// };

// console.log(persona1.nombre);
// console.log(persona1.edad);
// console.log(persona1.direccion);
// console.log(persona1.pepito);
// let clave = "nombre";
// console.log(persona1.clave);

// console.log(persona1["nombre"]);
// console.log(persona1["edad"]);
// console.log(persona1["direccion"]);
// let clave = "nombre";
// console.log(persona1[clave]);

// const persona1 = {
//   nombre: "pepito",
//   edad: 34,
//   direccion: "AV",
// };

// let propiedad = prompt("Ingrese la propiedad que quiere consultar");

// alert(persona1[propiedad])

// const persona = { nombre: "andres" };

// persona["edad"] = 26;
// persona.direccion = "AV";

// console.log(persona);

//funcion constructora

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
// }

// let nombre = prompt("Ingrese el nombre");
// let edad = prompt("Ingrese la edad");
// let direccion = prompt("Ingrese la direccion");

// const persona1 = new Persona(nombre, edad, direccion);
// const persona1 = new Persona("pepito", 34, "AV");
// const persona2 = new Persona("pepita", 50, "AV");
// console.log(persona1.nombre);
// console.log(persona2.nombre);

// function Persona(info) {
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
// }

// const persona1 = new Persona({
//   edad: 26,
//   direccion: "AV",
//   nombre: "andres",
// });

// console.log(persona1);

// const persona1 = {
//   nombre: "pepito",
//   edad: 34,
//   direccion: "AV",
// };

// for(const propiedad in persona1){
//   console.log(propiedad);
// }

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
//   this.hablar = function () {
//     console.log(`Hola soy ${this.nombre}`);
//   };
// }

// const persona1 = new Persona("pepito", 34, "AV");
// console.log(persona1);

// persona1.hablar();

// class Persona {
//   constructor(nombre, edad, direccion) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//   }

//   hablar() {
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// const persona1 = new Persona("pepito", 34, "AV");
// console.log(persona1);

// persona1.hablar();

// class Producto {
//   constructor(nombre, precio, imagen) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.imagen = imagen;
//     this.vendido = false;
//   }

//   vender() {
//     this.vendido = true;
//   }
// }

// const producto1 = new Producto("Kit de pesas...", 106900, "http://askjdf");
// const producto2 = new Producto(
//   "Silla de escritorio..",
//   205900,
//   "http://asdjkhfg"
// );

// console.log(producto1);
// producto1.vender();
// console.log(producto1);
// console.log(producto2);
/*
class Producto {
    constructor(nombre, precio, imagen, cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
      this.cantidad = cantidad;
    }
  
    vender() {
      this.cantidad -= 1; // this.cantidad -= 1     this.cantidad = this.cantidad - 1
    }
}
  
const producto1 = new Producto("Kit de pesas...", 106900, "http://askjdf", 5);


console.log(producto1);
producto1.vender();
console.log(producto1);
producto1.vender();
console.log(producto1);
*/
/*
let dato1 = parseInt(prompt(`Ingrese los 16 digitos del frente de la tarjeta:`));
let dato2 = parseInt(prompt(`Ingrese el mes de vencimiento de la tarjeta`));
let dato3 = parseInt(prompt(`Ingrese el año de vencimiento de la tarjeta`));
let dato4 = parseInt(prompt(`Ingrese el codigo de vencimiento de la tarjeta`));

class Tarjeta {
    constructor(numero16, vencimiento1, vencimiento2, codigo) {
        this.frente = numero16;
        this.mes = vencimiento1;
        this.año = vencimiento2;
        this.codigo = codigo;
    }
}

const datosTarjeta = new Tarjeta(dato1, dato2, dato3, dato4);
console.log(datosTarjeta);
*/




/// TUTORRRR *******************************************************







/*
class Tarjeta {
    constructor(numero16, vencimiento1, vencimiento2, codigo) {
      this.frente = numero16;
      this.mes = vencimiento1;
      this.año = vencimiento2;
      this.codigo = codigo;
    }
}
  
const obtenerDatos = () => {
    
    const numero16 = parseInt(prompt("Ingrese los 16 digitos del frente de la tarjeta:"));
    const vencimiento1 = parseInt(prompt("Ingrese el mes de vencimiento de la tarjeta"));
    const vencimiento2 = parseInt(prompt("Ingrese el año de vencimiento de la tarjeta"));
    const codigo = parseInt(prompt("Ingrese el codigo de vencimiento de la tarjeta"));

    const datosTarjeta = new Tarjeta( numero16, vencimiento1, vencimiento2, codigo);

    console.log(datosTarjeta);
}

obtenerDatos();
*/
/*
const entrada = () => {
  return prompt((`Ingrese los articulos que desea agregar a la Caja Sorpresa: \n(Escriba los nombres de los articulos, el maximo es 3 articulos.) \n1) Skins. \n2) Pets. \n3) Expansion Wow Shadowlands. \n4) Membresia. (de 1 año) \n5) Monturas. \n6) Cosmeticos.`).toLowerCase());
}

let valor = entrada();

console.log(valor);
*/

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// recibo el elemento a borrar por parámetro
const eliminar = (nombre) => {
    // busco su índice en el array
    let index = nombres.indexOf(nombre)

     // si existe, o sea es distinto a -1, lo borro con splice
    if (index != -1 ) {
        nombres.splice(index, 1)
    } 
}
eliminar('Rita')
console.log(nombres)
