function mostrar()
{
	let numero;
	let contadorPares;

	contadorPares = 0;

	numero = prompt("Ingrese un número");
	numero = parseInt(numero);

	for(let i = 1 ; i <= numero ; i = i + 1)
	{
		if(i % 2 == 0)
		{
			contadorPares = contadorPares + 1;
			console.log(i);
		}
	}

	console.log("Pares encontrados " + contadorPares);
}