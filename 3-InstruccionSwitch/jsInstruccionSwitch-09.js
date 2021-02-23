function mostrar()
{
	let destino;
	let estacion;
	let precioFinal;
	let descuento = 0;
	let aumento = 0;
	const Precio = 15000;

	destino = txtIdDestino.value;
	estacion = txtIdEstacion.value;

	switch(estacion){
		case "Invierno":
			if(destino == "Bariloche"){
				aumento = 20;
			}
			else if(destino == "Mar del plata"){
				descuento = 20;
			}
			else{
				descuento = 10;
			}
			break;

		case "Verano":
			if(destino == "Bariloche"){
				descuento = 20;
			}
			else if(destino == "Mar del plata"){
				aumento = 20;
			}
			else{
				aumento = 10;
			}
			break;

		case "Otoño":
		case "Primavera":
			if(destino == "Cordoba"){
				precioFinal = Precio;
			}
			else{
				aumento = 10;
			}
			break;
	}
	if(aumento != 0){
		precioFinal = Precio + Precio * aumento / 100;
	}
	else if(descuento != 0){
		precioFinal = Precio - Precio * descuento / 100;
	}
	alert("Precio final: " + precioFinal + "$");
}