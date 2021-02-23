
function mostrar()
{
    let lad1;
    let lad2;
    let lad3;
    let perimetro;

    lad1 = prompt("Ingrese las medidas del lado A");

    lad2 = prompt("Ingrese las medidas del lado B");

    lad3 = prompt("Ingrese las medidas del lado C");

    lad1 = parseFloat(lad1);

    lad2 = parseFloat(lad2);

    lad3 = parseFloat(lad3);

    perimetro = lad1 + lad2 + lad3;

    alert("El perimetro de tu triangulo equilatero es " + perimetro);

}
