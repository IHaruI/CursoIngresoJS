function mostrar()
{
	let estacion;
	let destino;
	
	estacion = txtIdEstacion.value;
	destino = txtIdDestino.value;

	switch(estacion){
		case "Invierno":
			if(destino == "Bariloche"){
				alert("Se viaja");
			}
			else{
				alert("No se viaja");
			}
			break;

		case "Verano":
			if(destino == "Mar del plata" || destino == "Cataratas"){
				alert("Se viaja");
			}
			else{
				alert("No se viaja");
			}
			break;

		case "Otoño":
				alert("Se viaja");
			break;

		case "Primavera":
			if(destino != "Bariloche"){
				alert("Se viaja");
			}
			else{
				alert("No se viaja");
			}
			break;
	}
}