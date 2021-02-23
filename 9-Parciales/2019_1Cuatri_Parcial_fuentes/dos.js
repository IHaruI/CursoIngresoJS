function mostrar()
{
  let nombre1;
  let nombre2;
  let peso1;
  let peso2;
  let suma;
  let promedio;

  nombre1 = prompt("Ingrese su nombre");

  nombre2 = prompt("Ingrese su nombre");

  peso1 = prompt("Ingrese su peso");

  peso2 = prompt("Ingrese su peso");

  peso1 = parseFloat(peso1);
  
  peso2 = parseFloat(peso2);

  suma = peso1 + peso2;

  promedio = (peso1 + peso2) / 2;

  alert("Ustedes se llaman " + nombre1 + " y " + nombre2 + ", pesan " + peso1 + " y " + peso2 + " kilos, que sumados son " + suma + " kilos y el promedio de peso es " + promedio + ".");
}
