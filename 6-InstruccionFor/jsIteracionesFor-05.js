function mostrar()
{
	let numero;

	for(; ;)
	{
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);

		if(numero == 9)
		{
			break;
		}

		alert("Su número es: " + numero);
	}
}