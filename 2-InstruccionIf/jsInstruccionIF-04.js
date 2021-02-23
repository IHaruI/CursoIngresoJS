function mostrar()
{
	/*let edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if(edad >= 13){

		if(edad <= 17){
		alert("Usted es un adolecente");
		}
		
	}
	*/

	

	// si estoy dentro del rango
	let edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if(edad >= 13 && edad <= 17){
		alert("Usted es un adolecente");
		
	}
	
	/*
	// si estoy fuera del rango
	let edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if(! (edad < 13 || edad > 17)){
		alert("Usted es un adolecente");
		
	}
	*/
}
/*

|| = or

&& = and

! = not
*/