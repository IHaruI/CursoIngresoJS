/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let numero;
	let seguir;
	let maximo;
	let minimo;
	let flag;

	flag = 0;

	do
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		if(flag == 0)
		{
			maximo = numero;
			minimo = numero;
			flag = 1;
		}
		if(numero > maximo)
		{
			maximo = numero;
		}
		else
		{
			if(numero < minimo)
			{
				minimo = numero;
			}	
		}

		seguir = prompt("¿Quiere ingresar otro numero? (s/n)");

	} while (seguir == 's');

	txtIdMaximo.value = maximo;
	txtIdMinimo.value = minimo;
	

	/*let numero;
	let seguir;
	let maximo;
	let minimo;
	let flag;

	flag = 0;

	do
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		if(flag == 0 || numero > maximo)
		{
			maximo = numero;
		}
		if(flag == 0 || numero < minimo)
		{
			minimo = numero;
			flag = 1;
		}	

		seguir = prompt("¿Quiere ingresar otro numero? (s/n)");

	} while (seguir == 's');

	txtIdMaximo.value = maximo;
	txtIdMinimo.value = minimo;
	*/
}