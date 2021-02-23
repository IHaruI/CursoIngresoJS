function mostrar()
{
	let edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if(edad > 17){
		alert("Usted es mayor de edad");
	}

	else{
		alert("Usted no es mayor de edad");
	}


	/*
	let edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if(edad >= 18){
		alert("Usted es mayor de edad");
	}

	else{
		alert("Usted no es mayor de edad");
	}
	*/

	/*let edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if(edad >= 18){
		alert("Usted es mayor de edad");
	}

	if(edad <= 17){
		alert("Usted no es mayor de edad");
	}
	*/
}