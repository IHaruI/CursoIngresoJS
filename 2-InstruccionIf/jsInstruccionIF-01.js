function mostrar()
{
	let edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if(edad == 15){
		alert("Niña bonita");
	}

	alert("Fin de la función"); // Opcional.



	/*let edad;

	edad = txtIdEdad.value;

	if(edad == "15"){
		alert("Niña bonita");
	}

	alert("Fin de la función");
	*/

	/*
	15==15  = true
	"15"=="15"  = true
	"15"==15  = true
	15=="15"  = true
	*/

	/*
	let edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if(edad === "15"){
		alert("Niña bonita");
	}

	alert("Fin de la función");


	15===15  =true
	"15"==="15"  =true
	"15"===15  =false
	15==="15"  =false
	*/
}