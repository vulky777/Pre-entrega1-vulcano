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

const datosPersonales = () => {
    alert(`A continuacion le solicitaremos una serie de datos:`);
    dato0 = prompt(`Ingrese su nombre completo`)
    dato1 = prompt(`Ingrese su correo electronico`);
    dato2 = parseInt(prompt(`Ingrese su numero de celular`));
    dato3 = prompt(`Ingrese su calle y altura a la que quiere recibir el producto`);
    dato4 = prompt(`Ingrese la localidad`);
    dato5 = parseInt(prompt(`Codigo postal`));
    
    return `¡¡¡ Muchas gracias por su Compra !!! 
    
    Nombre Completo: ${dato0}
    Correo electronico: ${dato1}
    Telefono: ${dato2}
    Domicilio y Altura: ${dato3}
    Localidad: ${dato4} Codigo Postal: ${dato5}`
}

const productoComprado = (a) => {
    return `El envio de su ${a} se realizara en los proximos 7 dias aviles.`
}


alert(`Bienvenido a Word Of Warcraft Merchandising`);
let producto = prompt(`¿Que producto desea comprar? \n 1) Remeras\n 2) Tazas\n 3) Banners \n (Seleccione un número)`);
let respuesta, pago, repitaLaOperacion, dato1, dato2, dato3, dato4, dato5, dato0;

while ((respuesta !== "no") && (respuesta !== "NO") && (respuesta !== "No")){
        
    if (producto == "1"){
        
        alert(`Cada remera esta $ 5.000`);
        pago = parseInt(prompt(`Seleccione el metodo de pago que desea elegir: \n 1) Credito. \n 2) Debito. \n 3) Efectivo. \n (Seleccione un número)`));
        alert(`El costo de la Remera es de $ ` + MetodoDePago(5000));
        alert(datosPersonales());
        alert(productoComprado("remera"));

    } else if (producto == "2"){
        
        alert(`Cada Taza esta $ 1.000`);
        pago = parseInt(prompt(`Seleccione el metodo de pago que desea elegir: \n 1) Credito. \n 2) Debito. \n 3) Efectivo. \n (Seleccione un número)`));
        alert(`El costo de la Taza es de $ ` + MetodoDePago(1000));
        alert(datosPersonales());
        alert(productoComprado("taza"));


    } else if (producto == "3"){

        alert(`Cada Banner esta $ 7.000`);
        pago = parseInt(prompt(`Seleccione el metodo de pago que desea elegir: \n 1) Credito. \n 2) Debito. \n 3) Efectivo. \n (Seleccione un número)`));
        alert(`El costo del Banner es de $ ` + MetodoDePago(7000));
        alert(datosPersonales());
        alert(productoComprado("banner"));


    } else {
        alert(`No se reconoce el producto, vuelva a probrar`);  
    }
    
    respuesta = prompt("¿Desea realizar otra operacion? Si / No");
    
    if (respuesta == "no" || respuesta == "No" || respuesta =="NO"){
        alert(`Hasta pronto !!`)
        break;
    } else if (respuesta=="si" || respuesta=="SI" || respuesta=="Si") {
        producto = prompt(`¿Que producto desea comprar? \n 1) Remeras\n 2) Tazas\n 3) Banners \n (Seleccione un número)`);
    } else {
        repitaLaOperacion = prompt("No se reconoce respuesta. ¿Quiere seguir? Si / No")
        if (repitaLaOperacion=="si" || repitaLaOperacion=="SI" || repitaLaOperacion=="Si") {
            producto = prompt(`¿Que producto desea comprar? \n 1) Remeras\n 2) Tazas\n 3) Banners \n (Seleccione un número)`);
        } else {
            alert("Gracias por venir Vuelva pronto")
            break;
        }
    }
    
}
