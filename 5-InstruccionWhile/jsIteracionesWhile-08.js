/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let positivo;
	let negativos;
	let seguir;
	let flag;

	flag = 0;

	positivo = 0;
	negativos = 1;

	do
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		if(numero >= 0)
		{
			positivo = positivo + numero;
		}
		else
		{
			flag = 1;
			negativos = negativos * numero;
		}

		seguir = prompt("¿Quiere ingresar otro numero? (s/n)");

	} while (seguir == 's');

	if(flag == 0)
	{
		negativos = 0;
	}
	txtIdProducto.value = negativos;
	txtIdSuma.value = positivo;
	

	/*let numero;
	let positivo;
	let negativos;
	let seguir;
	let contadorNegativo;

	contadorNegativo = 0;

	positivo = 0;
	negativos = 1;

	do
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		if(numero >= 0)
		{
			positivo = positivo + numero;
		}
		else
		{
			contadorNegativo = contadorNegativo + 1;
			negativos = negativos * numero;
		}

		seguir = prompt("¿Quiere ingresar otro numero? (s/n)");

	} while (seguir == 's');

	if(contadorNegativo == 0)
	{
		negativos = 0;
	}
	txtIdProducto.value = negativos;
	txtIdSuma.value = positivo;
	*/
}