
/// ******************************************** FUNCIONES ******************************************** ///

let respuesta, pago, repitaLaOperacion;

const MetodoDePago = (x) => {
    
    switch(pago){
        case 1:
            alert(`Con tarjeta de credito tenes un % 20 de descuento`)
            return (x) -  (x * 0.20);
        case 2:
            alert(`Con tarjeta de debito tenes un % 10 de descuento`)
            return (x) -  (x * 0.10);
        case 3:
            alert(`Con efectivo no tenes descuento`)
            return x;
        default:
            return "No se reconoce el medio de pago";
    }
}

const productoComprado = (a) => {
    return `El envio de su ${a} se realizara en los proximos 7 dias aviles.`
}

const entrada = () => {
    return prompt((`Ingrese los articulos que desea agregar a la Caja Sorpresa: \n(Escriba los nombres de los articulos, el maximo es 3 articulos.) \n1) Skins. \n2) Pets. \n3) Expansion Wow Shadowlands. \n4) Membresia. (de 1 año) \n5) Monturas. \n6) Cosmeticos.`).toLowerCase());

}


/// ******************************************** DATOS PERSONALES ******************************************** ///


class Personales {
    constructor(nombre, correo, celular, direccion, localidad, cp){
        this.nombre = nombre;
        this.correo = correo;
        this.celular = celular;
        this.direccion = direccion;
        this.localidad = localidad;
        this.cp = cp;
    }
}

const pedirDatosPersonales = () => {
    alert(`A continuacion le solicitaremos una serie de datos:`);
    const nombre = prompt(`Ingrese su nombre completo`);
    const correo = prompt(`Ingrese su Correo Electronico`);
    const celular = parseInt(prompt(`Ingrese su numero de telefono`));
    const direccion = prompt(`Ingrese su dirección`);
    const localidad = prompt(`Ingrese su localidad`);
    const cp = parseInt(prompt(`Ingrese su codigo postal`));

    alert(`¡¡¡ Muchas gracias por su Compra !!! 
    
    Nombre Completo: ${nombre}
    Correo electronico: ${correo}
    Telefono: ${celular}
    Domicilio y Altura: ${direccion}
    Localidad: ${localidad} Codigo Postal: ${cp}`)
}

/// ******************************************** DATOS TARJETA ******************************************** ///

class Tarjeta {
    constructor(numero16, vencimiento1, vencimiento2, codigo) {
        this.frente = numero16;
        this.mes = vencimiento1;
        this.año = vencimiento2;
        this.codigo = codigo;
    }
}

const obtenerDatosTarjeta = () => {
    
    const numero16 = parseInt(prompt("Ingrese los 16 digitos del frente de la tarjeta:"));
    const vencimiento1 = parseInt(prompt("Ingrese el mes de vencimiento de la tarjeta"));
    const vencimiento2 = parseInt(prompt("Ingrese el año de vencimiento de la tarjeta"));
    const codigo = parseInt(prompt("Ingrese el codigo de vencimiento de la tarjeta"));
    
    const datosTarjeta = new Tarjeta( numero16, vencimiento1, vencimiento2, codigo);
    
    console.log(datosTarjeta);
}

/// ******************************************** ARRAYS CAJA SORPRESA ******************************************** ///

const Carrito = [];
const CarritoDisponible = ["cosmeticos", "monturas", "membresia", "expansion", "pets", "skins"];
let i = 1;
let condicion;
let condicion2;

/// ___________________________________________________ COMIENZA LA EJECUCION DEL CODIGO ___________________________________________________ ///


alert(`Bienvenido a Word Of Warcraft Merchandising`);
let producto = prompt(`¿Que producto desea comprar? \n 1) Remeras\n 2) Tazas\n 3) Banners \n 4) Caja Sorpresa \n (Seleccione un número)`);

while ((respuesta !== "no")){
        
    if (producto == "1"){
        
        alert(`Cada remera esta $ 5.000`);
        pago = parseInt(prompt(`Seleccione el metodo de pago que desea elegir: \n 1) Credito. \n 2) Debito. \n 3) Efectivo. \n (Seleccione un número)`));
        alert(`El costo de la Remera es de $ ` + MetodoDePago(5000));
        obtenerDatosTarjeta();
        pedirDatosPersonales();
        alert(productoComprado("remera"));

    } else if (producto == "2"){
        
        alert(`Cada Taza esta $ 1.000`);
        pago = parseInt(prompt(`Seleccione el metodo de pago que desea elegir: \n 1) Credito. \n 2) Debito. \n 3) Efectivo. \n (Seleccione un número)`));
        alert(`El costo de la Taza es de $ ` + MetodoDePago(1000));
        obtenerDatosTarjeta();
        pedirDatosPersonales();
        alert(productoComprado("taza"));


    } else if (producto == "3"){

        alert(`Cada Banner esta $ 7.000`);
        pago = parseInt(prompt(`Seleccione el metodo de pago que desea elegir: \n 1) Credito. \n 2) Debito. \n 3) Efectivo. \n (Seleccione un número)`));
        alert(`El costo del Banner es de $ ` + MetodoDePago(7000));
        obtenerDatosTarjeta();
        pedirDatosPersonales();
        alert(productoComprado("banner"));


    } else if (producto == "4") {

        while ( i < 4 ) {
            
            let prueba = entrada();
            condicion = CarritoDisponible.includes(prueba);
            console.log(condicion);
            
            
            if (condicion !== true) {
                while ( condicion !== true){
                    alert("no se reconoce el elemento, vuelva a intentar");
                    entrada();
                    
                    
                }
            }   
            


            
            // let entrada = prompt((`Ingrese los articulos que desea agregar a la Caja Sorpresa: \n(Escriba los nombres de los articulos, el maximo es 3 articulos.) \n1) Skins. \n2) Pets. \n3) Expansion Wow Shadowlands. \n4) Membresia. (de 1 año) \n5) Monturas. \n6) Cosmeticos.`).toLowerCase());
            
            /*
            if ( ((entrada) !== ("skins")) && ((entrada) !== ("mebresia")) && ((entrada) !== ("monturas")) 
            && ((entrada) !== ("cosmeticos")) && ((entrada) !== ("expansion")) && ((entrada) !== ("pets"))){
                while ( condicion !== true ){
                    
                    alert("no se reconoce el elemento, vuelva a intentar");
                    entrada = prompt((`Ingrese los articulos que desea agregar a la Caja Sorpresa: \n(Escriba los nombres de los articulos, el maximo es 3 articulos.) \n1) Skins. \n2) Pets. \n3) Expansion Wow Shadowlands. \n4) Membresia. (de 1 año) \n5) Monturas. \n6) Cosmeticos.`).toLowerCase());
                    condicion = CarritoDisponible.includes(entrada); 
                    
                }
            } 
            */
                
            console.log(`${i}) Compra realizada`)
            Carrito.push(prueba/*.toLowerCase()*/);
            i++
        }
        console.log(Carrito);
        let borrarCarrito = prompt(`Su Caja Sorpresa de compras cuenta con: ${Carrito}.\n¿Desea Eleminiar algun articulo del carrito?`).toLowerCase();

        if (borrarCarrito == "si") {
            alert(`borrame`)
        } 
 
    }
    else {
        alert(`No se reconoce el producto, vuelva a probrar`);  
    }
    
    respuesta = prompt("¿Desea realizar otra operacion? Si / No").toLowerCase();
    
    if (respuesta == "no"){
        alert(`Hasta pronto !!`)
        break;
    } else if (respuesta=="si") {
        producto = prompt(`¿Que producto desea comprar? \n 1) Remeras\n 2) Tazas\n 3) Banners \n 4) Caja Sorpresa \n (Seleccione un número)`);
    } else {
        repitaLaOperacion = prompt("No se reconoce respuesta. ¿Quiere seguir? Si / No").toLowerCase();
        if (repitaLaOperacion == "si") {
            producto = prompt(`¿Que producto desea comprar? \n 1) Remeras\n 2) Tazas\n 3) Banners \n 4) Caja Sorpresa \n (Seleccione un número)`);
        } else {
            alert("Gracias por venir Vuelva pronto")
            break;
        }
    }
    
}
