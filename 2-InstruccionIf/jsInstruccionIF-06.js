function mostrar()
{
	/*let edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);


	if(edad < 13){
		alert("Usted es un niño/a");
	}

	else if( edad < 18){
		alert("Usted es un adolecente");
	}
	else if(edad < 65){
		alert("Usted es un adulto");
	}

	else{
		alert("Usted es un anciano/a"); //  Opcional
	}*/

	/*
	if(edad < 13 ){
		alert("Usted es niño");
	}

	else{
		
		if(edad < 18){
			alert("Usted es un adolecente");
		}

		else{

			if( edad < 65){
			alert("Usted es adulto");	
			}
			
			else{

				alert("Usted es un anciano/a");
			}
		}
	}
	*/

	let edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);


	if(edad > 12 && edad < 18){
		alert("Usted es un adolecente");
	}

	else if(edad >17){
		alert("Usted es mayor de edad");
	}

	else{
		alert("Usted es un niño/a");
	}
}