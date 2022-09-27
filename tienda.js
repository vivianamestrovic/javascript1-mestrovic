let nombreProductoA = 'orquidea'
let precioProductoA = 5200
let stockProductoA = 15

let nombreProductoB = 'potus'
let precioProductoB = 750
let stockProductoB = 40

let nombreProductoC = 'monstera'
let precioProductoC = 3800
let stockProductoC = 25

let precioTotal = 0

function precio(cantidad, precio){
    precioTotal += (cantidad * precio)
}

let cantidadCompra = prompt("Bienvenido! Comencemos con su pedido :) Cuántas variedades de plantas desea comprar?")

for(let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt("ingrese qué desea comprar: \n - orquidea\n - potus\n - monstera")

    if(productoCompra == 'orquidea'){
        let cantidadProductoOrquidea = prompt("ingrese qué cantidad de " + nombreProductoA + " desea comprar:")
        if(cantidadProductoOrquidea <= stockProductoA){
            precio(cantidadProductoOrquidea, precioProductoA)
        }
        else{
            alert("actualmente tenemos " + stockProductoA + "unidades de este producto")
        }
    }
    else if(productoCompra == 'potus'){
        let cantidadProductoPotus = prompt("ingrese qué cantidad de " + nombreProductoB + " desea comprar:")
        if(cantidadProductoPotus <= stockProductoB){
            precio(cantidadProductoPotus, precioProductoB)
        }
        else{
            alert("actualmente tenemos " + stockProductoPotus * precioProductoB + " unidades de este producto")
        }
    }
    else if(productoCompra == 'monstera'){
        let cantidadProductoMonstera = prompt("ingrese qué cantidad de " + nombreProductoC + " desea comprar:")
        if(cantidadProductoMonstera <= stockProductoC){
            precio(cantidadProductoMonstera, precioProductoC)
        }
        else{
            alert("actualmente tenemos " + stockProductoMonstera * precioProductoC + " unidades de este producto")
        }
    }
    else{
        alert("No tenemos ese producto a la venta")
    }
}

if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
}
else{
    alert("Gracias por su visita")
}