/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
10-De los negativos el mas grande y de los pares el mas chico*/
function mostrar()
{
	let numeroIngresado;
	let acumuladorNegativos;
	let acumuladorPositivo;
	let cantidadPositivos;
	let cantidadNegativos;
	let cantidadCeros;
	let cantidadPares;
	let promedionegativo;
	let promediopositivo;
	let diferenciaPositivosNegativos;
	let respuesta;
	let maximoNegativo;
	let minimoPar;

	respuesta = "si";
	acumuladorNegativos = 0;
	acumuladorPositivo = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;

	while (respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseFloat(numeroIngresado);
		
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Error, reingrese un numero");
			numeroIngresado = parseFloat(numeroIngresado);
		}

		console.log(numeroIngresado);

		if(numeroIngresado < 0)
		{
			if(cantidadNegativos == 0 || numeroIngresado > maximoNegativo)
			{
				maximoNegativo = numeroIngresado;
			}
			acumuladorNegativos = acumuladorNegativos + numeroIngresado;
			cantidadNegativos = cantidadNegativos + 1;
		}
		else
		{
			if(numeroIngresado > 0)
			{
				acumuladorPositivo = acumuladorPositivo + numeroIngresado;
				cantidadPositivos = cantidadPositivos + 1;
			}
			else
			{
				cantidadCeros = cantidadCeros + 1;
			}
		}

		if(numeroIngresado % 2 == 0)
		{
			/*if(cantidadPares == 0)
			{
				minimoPar = numeroIngresado;
			}
			else
			{
				if(numeroIngresado < minimoPar)
				{
					minimoPar = numeroIngresado;
				}
			}*/
			if(numeroIngresado < minimoPar || cantidadPares == 0)
			{
				minimoPar = numeroIngresado;
			}

			cantidadPares = cantidadPares + 1;

		}

		respuesta = prompt("¿Quiere ingresar otro numero? (si/no)");
		
	}
	

	diferenciaPositivosNegativos = acumuladorPositivo - acumuladorNegativos;

	document.write("La suma de los negativos es: " + acumuladorNegativos + "<br>");
	document.write("La suma de los positivos es: " + acumuladorPositivo + "<br>");
	document.write("La cantidad de los positivos es: " + cantidadPositivos + "<br>");
	document.write("La cantidad de los negativos es: " + cantidadNegativos + "<br>");
	document.write("La cantidad de pares es: " + cantidadPares + "<br>");

	if(cantidadPositivos != 0)
		{
			promediopositivo = acumuladorPositivo / cantidadPositivos;
			document.write("El promedio del positivo es: " + promediopositivo + "<br>");
		}
	else
	{
		document.write("El promedio del positivo es: no hubo ingreso de numeros positivos <br>");
	}
	if(cantidadNegativos != 0)
	{
		promedionegativo = acumuladorNegativos / cantidadNegativos;
		document.write("El promedio del negativo es: " + promedionegativo + "<br>");
	}
	else
	{
		document.write("El promedio del negativo es: no hubo ingreso de numeros negativos <br>");
	}

	document.write("La diferencia entre positivos y negativos es: " + diferenciaPositivosNegativos + "<br>");
	
	
	
	
	/*let seguir;
	let numero;
	let contadorpositivo;
	let contadornegativo;
	let contadorcero;
	let contadorpares;
	let acumuladorpositivo;
	let acumuladornegativos;
	let promediopositivo;
	let promedionegativo;
	let diferencia;

	contadorpositivo = 0;
	contadornegativo = 0;
	contadorcero = 0;
	contadorpares = 0;
	acumuladorpositivo = 0;
	acumuladornegativos = 0;
	promediopositivo = 0;
	promedionegativo = 0;

	do 
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		if(numero < 0)
		{
			acumuladornegativos = acumuladornegativos + numero;
			contadornegativo = contadornegativo + 1;
		}
		else
		{
			if(numero == 0)
			{
				contadorcero = contadorcero + 1;
			}
			else
			{
				acumuladorpositivo = acumuladorpositivo + numero;
				contadorpositivo = contadorpositivo + 1;
			}
		}

		if(numero % 2 == 0)
		{
			contadorpares = contadorpares + 1;
		}

		seguir = prompt("¿Quiere ingresar otro numero? (s/n)");

	} while (seguir == 's');

	if(contadorpositivo > 0)
	{
		promediopositivo = acumuladorpositivo / contadorpositivo;
	}
	if(contadornegativo > 0)
	{
		promedionegativo = acumuladornegativos / contadornegativo;
	}

	diferencia = contadorpositivo - contadornegativo;

	console.log("1-Suma de los negativos: " + acumuladornegativos);
	console.log("2-Suma de los positivos: " + acumuladorpositivo);
	console.log("3-Cantidad de positivos: " + contadorpositivo);
	console.log("4-Cantidad de negativos: " + contadornegativo);
	console.log("5-Cantidad de ceros: " + contadorcero);
	console.log("6-Cantidad de números pares: " + contadorpares);
	console.log("7-Promedio de positivos: " + promediopositivo);
	console.log("8-Promedios de negativos: " + promedionegativo);
	console.log("9-Diferencia: " + diferencia);*/
}