/*
3.	
Franco Messina Div H, Ej 3 Parcial
De los 15 empleados de una PYME se ingresan los siguientes datos:
•	Nombre y apellido
•	Genero del empleado ("Femenino", "Masculino", "No Binario")
•	Cantidad de hijos (no puede ser un numero negativo)

El programa deberá mostrar:
	a.	El nombre del empleado Masculino con mas cantidad de hijos.
	b.	Nombre y apellido del primer empleado No Binario que no tiene hijos.

Sabiendo que: 
   *Si no tiene hijos no le corresponde asignación familiar 
   *Si tiene un hijo le corresponde 3000
   *Si tiene dos hijos le corresponde 5000 por sus dos hijos
   *Y si tiene más de dos hijos le corresponde 8000

	c.	Mostrar el total de dinero que deberá pagar la PYME en concepto de asignaciones
	d.	En caso de que el total de asignaciones supere los 500000, el Gobierno Nacional asistirá a la PYME 
subvencionando el 10% de las asignaciones. Mostrar el valor de la subvención si corresponde.
*/
function mostrar()
{
	let nombre;//Nombre Ingresado
	let apellido;//Apellido Ingresado
	let genero;//Genero Ingresado
	let cantidadHijos;//CantidadHijos Ingresado;
	let cargaEmpleados;//Carga Empleados en este caso 15. arranca en 0
	let nombreCantidadHijosMaxima;//Nombre dela persona con más hijos
	let cantidadHijosMaxima;//Cantidad de hijos maxima
	let banderaCantidadHijos;//Bandera para entrar a cantidad hijos Maxima
	let banderaNoBinario;//Bandera para primer NB sin hijos
	let nombreNoBinario;//Nombre del NB sin hijos
	let apellidoNoBinario;//Apellido del NB sin hijos
	let acumuladorTieneUnHijo;//Acumulo la asignacion familiar de solo un hijo
	let acumuladorTieneDosHijos;//Acumulo la asignacion familiar de dos hijos
	let acumuladorTieneMasDosHijos;//Acumulo la asignacion familiar de más de dos hijos
	let costoTotal;//Suma de todos las asginaciones
	let subvencionFinal;//Subvención del estado;
	const asignacionUnHijo;
	const asignacionDosHijos;
	const asignacionMasDosHijos;

	asignacionUnHijo = 3000;
	asignacionDosHijos = 5000;
	asignacionMasDosHijos = 8000;
	acumuladorTieneUnHijo = 0;
	acumuladorTieneDosHijos = 0;
	acumuladorTieneMasDosHijos = 0;
	banderaNoBinario = true;
	banderaCantidadHijos = true;
	cargaEmpleados = 0;
	while(cargaEmpleados < 15)
	{
		nombre = prompt("Ingresa tu nombre");
		while(!(isNaN(nombre)))
		{
			nombre = prompt("Error.Ingresa tu nombre correcto");
		}
		apellido = prompt("Ingresa tu apellido");
		while(!(isNaN(apellido)))
		{
			apellido = prompt("Error.Ingresa tu apellido correcto");
		}
		genero = prompt("Ingresa tu genero");
		while(genero != "Femenino" && genero != "Masculino" && genero != "No Binario")
		{
			genero = prompt("Error. Ingresa tu genero, F/M/NB");
		}
		cantidadHijos = prompt("Ingresa la cantidad de hijos");
		cantidadHijos = parseInt(cantidadHijos);
		while(isNaN(cantidadHijos) || cantidadHijos < 0)
		{
			cantidadHijos = prompt("Error.Ingresa tu cantidad Hijos correcto");
			cantidadHijos = parseInt(cantidadHijos);
		}
		switch(genero)
		{
			// a.	El nombre del empleado Masculino con mas cantidad de hijos.
			case "Masculino":
				if(cantidadHijos > cantidadHijosMaxima || banderaCantidadHijos == true)
				{
					cantidadHijosMaxima = cantidadHijos;
					nombreCantidadHijosMaxima = nombre;
					banderaCantidadHijos = false;
				}
			break;
			// b.	Nombre y apellido del primer empleado No Binario que no tiene hijos.
			case "No Binario":
				if(cantidadHijos == 0 && banderaCantidadHijos == true)
				{
					nombreNoBinario = nombre;
					apellidoNoBinario = apellido;
					banderaCantidadHijos = false;
				}
			break;

		}
		if(cantidadHijos > 2)
		{
			acumuladorTieneMasDosHijos = acumuladorTieneMasDosHijos + asignacionMasDosHijos;
		}
		else
		{
			if(cantidadHijos > 1)
			{
				acumuladorTieneDosHijos = acumuladorTieneDosHijos + asignacionDosHijos;
			}
			else
			{
				acumuladorTieneUnHijo = acumuladorTieneUnHijo + asignacionUnHijo;
			}
		}
		
		cargaEmpleados++;
	}

// 	c.	Mostrar el total de dinero que deberá pagar la PYME en concepto de asignaciones
	costoTotal = acumuladorTieneMasDosHijos + acumuladorTieneDosHijos + acumuladorTieneUnHijo;
	document.write(`El total de dinero que deberá pagar la PYME es: ${costoTotal}`);
// 	d.	En caso de que el total de asignaciones supere los 500000, el Gobierno Nacional asistirá a la PYME 
// subvencionando el 10% de las asignaciones. Mostrar el valor de la subvención si corresponde.
	subvencionFinal = costoTotal * 10 / 100;
	if(costoTotal > 500000)
	{
		document.write(`El estado ayudará con una subvención de ${subvencionFinal} pesos`);
	}
	else
	{
		document.write("No existe la subvención");
	}
}
