function mostrar()
{
	/*let numero;
	let contadorDivisores;

	contadorDivisores = 0;

	numero = prompt("Ingrese un número");
	numero = parseInt(numero);

	for(let i = 1 ; i <= numero ; i = i + 1)
	{
		if(numero % i == 0)
		{
			contadorDivisores = contadorDivisores + 1;
		}
	}

	if(contadorDivisores == 2)
	{
		alert(numero + " es primo");
	}
	else
	{
		alert(numero + " no es primo");
	}*/


	let numero;
	let contadorDivisores;

	contadorDivisores = 0;

	numero = prompt("Ingrese un número");
	numero = parseInt(numero);

	while (isNaN(numero))
	{
		numero = prompt("Eso no es un numero, reingrese un número");
		numero = parseInt(numero);
	}

	for(let i = 2 ; i < numero ; i = i + 1)
	{
		if(numero % i == 0)
		{
			contadorDivisores = contadorDivisores + 1;
		}
	}

	if(contadorDivisores != 0 || numero <= 1)
	{
		alert(numero + " no es primo");
	}
	else
	{
		alert(numero + " es primo");
	}
}