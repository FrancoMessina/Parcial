/*
1.	
Franco David Messina, Ej 1 Div H Parcial
Se ingresan 10 notas, nombre del alumno y materia (Matematica, Lectura o Programación).
Calcular y mostrar:
   a.	Minima nota con el nombre del alumno
   b.	La materia con maxima nota.
   c.	Promedio de notas para lectura.
   d.	Porcentaje de alumnos que rindio cada materia.
*/
function mostrar()
{
	let contadorNotas;//Contador notas
   let notas;
   let nombre;
   let materia;
   let banderaNotaMinima;
   let nombreNotaMinima;
   let notaMinima;
   let notaMaxima;
   let banderaNotaMaxima;
   let materiaNotaMaxima;
   let acumuladorNotasLectura;
   let contadorNotasLectura;
   let acumuladorNotasMat;
   let contadorNotasMat;
   let acumuladorNotasProg;
   let contadorNotasProg;
   let promedioNotasLectura;
   let porcentajeLectura;
   let porcentajeMat;
   let porcentajeProg
   
   acumuladorNotasMat = 0;
   contadorNotasMat = 0 ;
   acumuladorNotasProg = 0;
   contadorNotasProg = 0;
   acumuladorNotasLectura= 0;
   contadorNotasLectura = 0;
   banderaNotaMinima = true;
   banderaNotaMaxima = true;
   notas = 0;
   while(contadorNotas < 10)
   {
      nombre = prompt("Ingresa el nombre del alumno");
      while(!isNaN(nombre))
      {
         nombre = prompt("Error..Ingresa el nombre del alumno");
      }
      materia = prompt("Ingresa la materia");
      while(materia != "Matematica" && materia !="Lectura" && materia != "Programación")
      {
         materia = prompt("Error. Ingresa la materia correcta");
      }
      notas = prompt("Ingresa la nota ");
      notas = parseFloat(notas);

      while(isNaN(notas) || notas < 0)
      {
         notas = prompt("Ingresa la nota ");
         notas = parseFloat(notas);
      }

      // a.	Minima nota con el nombre del alumno
      if(notas < notaMinima|| banderaNotaMinima == true)
			{
            notaMinima = nota;
				nombreNotaMinima= nombre;
				banderaNotaMinima = false;
			}
        // b.	La materia con maxima nota.
      if(notas > notaMaxima|| banderaNotaMaxima == true)
			{
            notaMaxima = nota;
				materiaNotaMaxima = materia;
				banderaNotaMaxima = false;
			}    
         // c.	Promedio de notas para lectura.
         // d.	Porcentaje de alumnos que rindio cada materia.
	 	switch(materia)
	 	{
	 		case "Lectura":
            acumuladorNotasLectura = acumuladorNotasLectura + notas;
            contadorNotasLectura++;
	 			
	 		break;

	 		
	 		case "Programación":
            acumuladorNotasProg = acumuladorNotasProg + notas;
            contadorNotasProg++;
	 			
	 		break;

	 		default:
            acumuladorNotasMat = acumuladorNotasMat + notas;
            contadorNotasMat++;
         break;
	 	}


      contadorNotas++;
   }
   // a.	Minima nota con el nombre del alumno
   alert(`El alumno con nota minima se llama ${nombreNotaMinima} y se saco un : ${notaMinima}`);
   // b.	La materia con maxima nota.
   alert(`La materia con nota maxima es: ${materiaNotaMaxima} y se saco un : ${notaMaxima}`);
   // c.	Promedio de notas para lectura.
   promedioNotasLectura = acumuladorNotasLectura / contadorNotasLectura;
   alert(`El promedio de notas en lectura es: ${promedioNotasLectura}`);
   // d.	Porcentaje de alumnos que rindio cada materia.
   porcentajeLectura = contadorNotasLectura / 10 * 100;
   porcentajeMat = contadorNotasMat / 10 * 100;
   porcentajeProg = contadorNotasProg / 10 * 100;
   alert(`Porcentaje de alumnos en Lectura ${porcentajeLectura}, porcentaje de alumnos en Mat: ${porcentajeMat} y porcentaje de alumnos en prog${porcentajeProg}`);

}
