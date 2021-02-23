function mostrar()
{
    let num1;
    let num2;
    let resultado;
    let division;
    let suma;

    num1 = prompt("Ingrese su primer numero");
    num2 = prompt("Ingrese su segundo numero");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    resultado = num1 + num2;

    division = num1 / num2;
    division = division.toFixed(2);

    suma = num1 + num2;

    if(num1 == num2 && resultado > 49){
        alert(num1 + " + " + num2 + " = " + resultado);
    }

    else if(num1 > num2){
        alert(num1 + " / " + num2 + " = " + division);
    }

    else if(num1 < num2 && suma > 49){
        alert(num1 + " + " + num2 + " = " + suma);
    }

    else{
        alert("la suma es " + num1 + " + " + num2 + " = " + resultado + " y es menor a 50");
    }
}
