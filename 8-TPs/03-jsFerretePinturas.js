/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let tempF;
    let tempC;
    
    tempF = txtIdTemperatura.value;

    tempF = parseFloat(tempF);

    tempC = (tempF - 32) / 1.8;

    tempC = tempC.toFixed(2);

    alert(tempF + " Fahrenheit son " + tempC + " centigrados");
}

function CentigradosFahrenheit () 
{
	let tempC;
    let tempF;
    
    tempC = txtIdTemperatura.value;

    tempC = parseFloat(tempC);

    tempF = (tempC *1.8) + 32;

    tempF = tempF.toFixed(2);

    alert(tempC + " centigrados son " + tempF + " Fahrenheit");
}
