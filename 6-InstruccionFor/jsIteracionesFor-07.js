function mostrar()
{
	let numero;
	let contadorDivisores;

	contadorDivisores = 0;

	numero = prompt("Ingrese un número");
	numero = parseInt(numero);

	for(let i = 1 ; i <= numero ; i = i + 1)
	{
		if(numero % i == 0)
		{
			contadorDivisores = contadorDivisores + 1;
			console.log(i);
		}
	}

	console.log("Su divisores encontrados son: " + contadorDivisores);
}