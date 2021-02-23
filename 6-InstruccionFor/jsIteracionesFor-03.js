function mostrar()
{
	let repeticiones;

	repeticiones = prompt("Ingrese repeticiones");
	repeticiones = parseInt(repeticiones);

	for(let i = 0 ; i < repeticiones ; i = i + 1)
	{
		console.log(i + " Hola UNT-FRA");
	}
}