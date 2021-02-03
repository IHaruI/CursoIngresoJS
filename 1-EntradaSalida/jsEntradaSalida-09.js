/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let nuevoSueldo;
	let aumento;

	sueldo = txtIdSueldo.value;

	sueldo = parseInt(sueldo);

	nuevoSueldo = sueldo * 10 / 100;

	aumento = sueldo + nuevoSueldo;

	txtIdResultado.value = aumento;
}
