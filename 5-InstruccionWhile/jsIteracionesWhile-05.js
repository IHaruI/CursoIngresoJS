/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	/*let sexo;
	let fem;
	let mas;
	let flag;

	flag = 0;

	while (flag == 0)
	{
		sexo = prompt("Ingrese su sexo");

		if(sexo == 'f')
		{
			fem = "Femenino";
			txtIdSexo.value = fem;
		}
		if(sexo == 'm')
		{
			mas = "Masculino";
			txtIdSexo.value = mas;
		}

		flag = 1;
	}*/


	let sexoIngresado;

	sexoIngresado = prompt("Ingrese su sexo (f/m)");

	sexoIngresado = sexoIngresado.toLowerCase();    //transforma las palabras mayusculas en minusculas.
	//sexoIngresado = sexoIngresado.toUpperCase();    //transforma las palabras minusculas en mayusculas.

	while (sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("Error. Ingrese");
	}

	txtIdSexo.value = sexoIngresado;
}