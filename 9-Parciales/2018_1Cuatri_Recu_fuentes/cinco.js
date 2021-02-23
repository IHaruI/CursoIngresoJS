function mostrar()
{
    let dia;

    dia = prompt("Ingrese un dia");

    switch(dia){
        case "sabado":
        case "domingo":
            alert("Buen finde");
            break;

        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            alert("A trabajar");
            break;

        default:
            alert("Lo ingresado no es un dia");
            break;
    }
}