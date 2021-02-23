/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave = prompt("Ingrese la clave:");

	while (clave != "utn750")
	{
		clave = prompt("Clave incorrecta, intente de nuevo");
	}

	alert ("Clave correcta");


	/*let clave;

	clave = prompt("Ingrese la clave:");

	while (!(clave == "utn750"))
	{
		clave = prompt("Clave incorrecta, intente de nuevo");
	}

	alert ("Clave correcta");*/

	/*let clave;
	let flag;

	flag = 0;

	do
	{
		if(flag == 0)
		{
			clave = prompt("Ingrese la clave");
			flag = 1;
		}
		else
		{
			clave = prompt("Clave incorrecta, intente de nuevo");
		}
	
	} while (clave != "utn750");

	alert("Clave correcta");*/
}
