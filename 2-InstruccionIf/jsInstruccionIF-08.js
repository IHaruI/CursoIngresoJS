function mostrar()
{
	let edad;
	let estado;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	estado = estadoCivil.value;

	if(estado == "Soltero" && edad >= 18){
		alert("Es soltero y no es menor.");
	}

	/*
	else if(estado == "Soltero"){
		alert("Es soltero y no es menor.");
	}
	*/
}