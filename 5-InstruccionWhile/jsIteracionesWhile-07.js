/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let seguir;
	let numero;
	let acumulador;
	let contador;
	let promedio;

	acumulador = 0;
	contador = 0;

	do
	{
		numero = prompt("Ingrese su numero");
		numero = parseInt(numero);

		acumulador = acumulador + numero;
		
		contador = contador + 1;

		seguir = prompt("¿Quiere ingresar otro numero?");

	} while (seguir == 's');

	promedio = acumulador / contador;

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;
	
	/*
	let seguir;
	let numero;
	let acumulador;
	let contador;
	let promedio;

	seguir = 's';
	acumulador = 0;
	contador = 0;

	while (seguir == 's')
	{
		numero = prompt("Ingrese su numero");
		numero = parseInt(numero);

		acumulador = acumulador + numero;
		
		contador = contador + 1;

		seguir = prompt("¿Quiere ingresar otro numero?");
	}

	promedio = acumulador / contador;

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;
	*/
}