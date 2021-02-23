
function mostrar()
{
    let ancho;
    let largo;
    let perimetro;

    ancho = prompt("Ingrese el ancho");

    largo = prompt("Ingrese el largo");

    ancho = parseFloat(ancho);

    largo = parseFloat(largo);

    perimetro = (ancho + largo) * 2;

    alert("El perímetro es " + perimetro);
}
