function mostrar()
{
    let precio;
    let descuento;
    let resultado;
    let precioFinal;

    precio = prompt("Ingrese el precio");

    descuento = prompt("Ingrese el descuento");

    precio = parseFloat(precio);

    descuento = parseFloat(descuento);

    resultado = precio * descuento / 100;

    precioFinal = precio - resultado;

    elPrecioFinal.value = precioFinal;
}