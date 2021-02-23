function mostrar()
{
    let num1;
    let num2;
    let resultado;
    let resta;
    let suma;
    

    num1 = prompt("Ingrese su primer numero");
    num2 = prompt("Ingrese su segundo numero");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    resultado = num1 + num2;

    resta = num1 - num2;

    suma = num1 + num2;

    if(num1 == num2 && resultado < 11){
        alert(num1 + " + " + num2 + " = " + resultado);
    }

    else if(num1 > num2){
        alert(num1 + " - " + num2 + " = " + resta);
    }

    else if(num1 < num2 && suma < 11){
        alert(num1 + " + " + num2 + " = " + suma);
    }

    else{
        alert("La suma es " + num1 + " + " + num2 + " = " + resultado + " y supero el 10");
    }
}