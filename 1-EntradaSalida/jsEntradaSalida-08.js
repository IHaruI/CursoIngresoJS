/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo;
	let divisor;
	let resultado;
	
	// Dividendo = parseInt (document.getElementById("txtIdNumeroDividendo").value);

	// Divisor = parseInt (document.getElementById("txtIdNumeroDivisor").value);

	dividendo = txtIdNumeroDividendo.value;

	divisor = txtIdNumeroDivisor.value;

	dividendo = parseInt(dividendo);

	divisor = parseInt(divisor);

	resultado = dividendo % divisor;

	alert("El resto es " + resultado);
}
