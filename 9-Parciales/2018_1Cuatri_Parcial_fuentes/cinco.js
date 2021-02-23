function mostrar()
{
    let planeta;

    planeta = prompt("Ingrese un planeta");

    switch(planeta){
        case "tierra":
            alert("acá vivimos");
            break;

        case "venus":
        case "mercurio":
            alert("acá hace más calor");
            break;

        case "marte":
        case "júpiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
            alert("acá hace más frio");
            break;

        default:
            alert("Ese planeta no esta en nuestro sistema solar");
    }
}