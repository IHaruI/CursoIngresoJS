function mostrar()
{
	let num;
	let acumulador;
	let promedio;
	let i;

	acumulador = 0;
	i = 0;

	while (i < 5)
	{
		num = prompt("Ingrese su numero");
		num = parseInt(num);

		acumulador = acumulador + num;

		i = i + 1;
	}

	promedio = acumulador / 5;

	txtIdSuma.value = acumulador;

	txtIdPromedio. value = promedio;
}