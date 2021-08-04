/*
2.	Franco Messina Div H, Ej 2 Parcial
La empresa de cosmetica AVON necesita establecer un sistema de premios para las sucursales de  
distintas zonas de Bs As. Para ello, en base a distintas planillas que se cargan (pueden ser varias
planillas para la misma sucursal), se ingresan los siguientes datos:
  •	Sucursal (SUR, CABA, COSTA)
  •	Importe de la venta (número positivo NO menor que 5000)

  Al terminar de cargar las planillas, se debe calcular el total de ventas de cada sucursal. 
  Si la sucursal logro superar los $2500000 en ventas tendra un premio del 10% que se repartira entre
  los empleados de la sucursal, en caso contrario no tendran premio.

Mostrar:
a.	Para cada sucursal, el importe total de las ventas, cantidad de ventas y premio (si corresponde)
b.	La sucursal que obtuvo el mayor premio.  
*/
function mostrar()
{
  let seguirPlanillas;
  let sucursal;
  let importe;
  let acumuladorCaba;
  let acumuladorSur;
  let acumuladorCosta;
  let contadorVentasCaba;
  let contadorVentasSur;
  let contadorVentasCosta;
  let premioVentasSur;
  let premioVentasCaba;
  let premioVentasCosta;
  let banderaPremioMaximo;
  let premioMaximo;
  let sucursalPremioMaximo;
  const descuento;

  premioVentasSur = 0;
  premioVentasCaba = 0;
  premioVentasCosta = 0;
  descuento = 10;
  contadorVentasCaba = 0;
  contadorVentasSur = 0;
  contadorVentasCosta = 0;
  acumuladorCaba = 0;
  acumuladorSur = 0;
  acumuladorCosta = 0;
  seguirPlanillas = true;
  banderaPremioMaximo = true;
  while(seguirPlanillas== true)
  {
    sucursal = prompt("Ingrese su sucursal: Sur/CABA/Costa");
	
	 	while(sucursal!="SUR"&&sucursal!="CABA"&&sucursal!='COSTA')
	 	{
      sucursal = prompt("Ingrese su sucursal: Sur/CABA/Costa");
	 	}

    importe = prompt("Ingresa el importe");
    importe = parseFloat(importe);
	 	while(isNaN(importe)||importe<1||importe>5000)
	 	{
	 		importe = prompt("Por favor ingrese su importe"); 
      importe = parseFloat(importe);
	 	}
    
     switch(sucursal)
     {
        case "SUR":
          acumuladorSur = acumuladorSur + importe;
          contadorVentasSur++;
          if(acumuladorSur > premioMaximo|| banderaPremioMaximo == true)//Con este if averiguo el maximo de importe cada vez que itera
          {
            sucursalPremioMaximo = sucursal;
            banderaPremioMaximo = false;
          }
        break;
        case "CABA":
          acumuladorCaba = acumuladorCaba + importe;
          contadorVentasCaba++;
          if(acumuladorCaba > premioMaximo|| banderaPremioMaximo == true)//Con este if averiguo el maximo de importe cada vez que itera
          {
            sucursalPremioMaximo = sucursal;
            banderaPremioMaximo = false;
          }
        break;
        default:
          acumuladorCosta = acumuladorCosta + importe;
          contadorVentasCosta++;
          if(acumuladorCosta> premioMaximo|| banderaPremioMaximo == true)//Con este if averiguo el maximo de importe cada vez que itera
          {
            sucursalPremioMaximo = sucursal;
            banderaPremioMaximo = false;
          }
        break;
     }
    seguirPlanillas = confirm("Quieres ingresar otra planilla?")
  }
  // Al terminar de cargar las planillas, se debe calcular el total de ventas de cada sucursal. 
  // Si la sucursal logro superar los $2500000 en ventas tendra un premio del 10% que se repartira entre
  // los empleados de la sucursal, en caso contrario no tendran premio.
   
  if(acumuladorSur > 2500000)
  {
    premioVentasSur = acumuladorSur / descuento * 100;
  }
  if(acumuladorCosta > 2500000)
  {
    premioVentasCosta = acumuladorCosta / descuento * 100;
  }
  if(acumuladorCaba > 2500000)
  {
    premioVentasCaba = acumuladorCaba / descuento * 100;
  }
  // a.	Para cada sucursal, el importe total de las ventas, cantidad de ventas y premio (si corresponde)
  //Si es distinto de  0 quiere decir que tiene premio porque lo inicialize en 0 por lo tanto, tiene premio
  if(premioVentasSur != 0){
    document.write(`El importe total de ventas en la sucursal sur es: ${acumuladorSur}, la cantidad de ventas es: ${contadorVentasSur} y el premio es: ${premioVentasSur}`);
  }
  else
  {
    document.write(`El importe total de ventas en la sucursal sur es: ${acumuladorSur}, la cantidad de ventas es: ${contadorVentasSur} y no tiene premio`);
  }
  if(premioVentasCaba != 0){
    document.write(`El importe total de ventas en la sucursal caba es: ${acumuladorCaba}, la cantidad de ventas es: ${contadorVentasCaba} y el premio es: ${premioVentasCaba}`);
  }
  else
  {
    document.write(`El importe total de ventas en la sucursal sur es: ${acumuladorCaba}, la cantidad de ventas es: ${contadorVentasCaba} y no tiene premio`);
  }
  if(premioVentasCosta != 0){
    document.write(`El importe total de ventas en la sucursal caba es: ${acumuladorCosta}, la cantidad de ventas es: ${contadorVentasCosta} y el premio es: ${premioVentasCosta}`);
  }
  else
  {
    document.write(`El importe total de ventas en la sucursal sur es: ${acumuladorCosta}, la cantidad de ventas es: ${contadorVentasCosta} y no tiene premio`);
  }
  // b.	La sucursal que obtuvo el mayor premio. 
  if (premioVentasCaba == 0 && premioVentasCosta == 0 && premioVentasSur == 0)//Si ocurre esto ninguna obtuvo premio
  {
    document.write(`No obtuvo premio ninguna sucursal`)
  }
  else//Pero si alguna es distinta de 0 Hay premio. Por lo tanto el que más acumulador de Importe tenga va a ser el que más premio recibio
  {   //Y me evito muchos ifs.Preguntando cual es mayor
    document.write(`La sucursal con mayor premio es: ${sucursalPremioMaximo}`);
  }
 
}
