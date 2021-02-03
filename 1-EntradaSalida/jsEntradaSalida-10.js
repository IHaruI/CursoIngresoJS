/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldo;
	let nuevoSueldo;
	let descuento;

	sueldo = txtIdImporte.value;

	sueldo = parseInt(sueldo);

	descuento = sueldo * 25 / 100;

	// descuento = sueldo * 0.25;

	nuevoSueldo = sueldo - descuento;

	// nuevoSueldo = sueldo - (sueldo * 0.25);

	// nuevoSueldo = sueldo * 0.75;

	txtIdResultado.value = nuevoSueldo;
}
