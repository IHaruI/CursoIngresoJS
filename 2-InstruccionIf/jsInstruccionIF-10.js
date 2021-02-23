function mostrar()
{
	let numero;
	let maximo = 10;
	let minimo = 1;

	numero = Math.round(Math.random() * (maximo - minimo) + minimo);

	if(numero > 8){
		alert("Execelente Nota: " + numero);
	}

	else if(numero > 3){
		alert("Aprobo Nota: " + numero);
	}

	else {
		alert("Vamos, la proxima se puede Nota: " + numero);
	}






	/*
	if(numero >=9 && numero <=10){
		alert("EXCELENTE nota: " + numero);
	}

	else if(numero >=4){
		alert("APROBÓ nota: " + numero);
	}

	else if(numero <=3){
		alert("Vamos, la proxima se puede nota: " + numero);
	}
	*/
}