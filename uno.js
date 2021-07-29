/*Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los 
siguientes datos:
Tipo: (validar "HDD", "SSD" o "SSDM2")
Precio: (validar entre 5000 y 18000),
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipoIngresado HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   disponibles. 
c) Cuántas unidades de HDD hay en total.
*/


function mostrar()
{
   var tipoIngresado;
   var precioIngresado;
   var cantidadIngresada;
   var marcaIngresada;
   var capacidadIngresada;
   var flagSSDbarato;
   var flagHDDcaro;
   var precioSSDbarato;
   var precioHDDcaro;
   var capacidadSSDbarato;
   var capacidadHDDcaro;
   var cantidadSSDbarato;
   var cantidadHDDcaro;
   var acumuladorHDD;
   var mensajeA;
   var mensajeB;
   var mensajeC;

   respuesta="ok"
   flagSSDbarato=false;
   flagHDDcaro=false;
   acumuladorHDD=0;

   for(var i=0; i<5; i++)
   {
      tipoIngresado=prompt("Ingrese tipo de producto: ('HDD', 'SSD', 'SSDM2')");
      while(tipoIngresado!="HDD"&&tipoIngresado!="SSD"&&tipoIngresado!="SSDM2")
      {
         tipoIngresado=prompt("Error. Ingrese tipo de producto: ('HDD', 'SSD', 'SSDM2')");
      }
      precioIngresado=prompt("Ingrese precio: (Entre 5000 y 18000)")
      precioIngresado=parseInt(precioIngresado);
      while(isNaN(precioIngresado)||precioIngresado<5000||precioIngresado>18000)
      {
         precioIngresado=prompt("Error. Ingrese precio: (Entre 5000 y 18000)")
         precioIngresado=parseInt(precioIngresado);
      }
      cantidadIngresada=prompt("Ingrese la cantidad de unidades: (No mas de 50)")
      cantidadIngresada=parseInt(cantidadIngresada);
      while(isNaN(cantidadIngresada)||cantidadIngresada<0||cantidadIngresada>50)
      {
         cantidadIngresada=prompt("Error. Ingrese la cantidad de unidades: (No mas de 50)")
         cantidadIngresada=parseInt(cantidadIngresada);
      }
      marcaIngresada=prompt("Ingrese marca: (“Seagate”, “Western Digital”, “Kingston”)");
      while(marcaIngresada!="Seagate"&&marcaIngresada!="Western Digital"&&marcaIngresada!="Kingston")
      {
         marcaIngresada=prompt("Error. Ingrese marca: (“Seagate”, “Western Digital”, “Kingston”)");
      }
      capacidadIngresada=prompt("Ingrese capacidad: (250Gb, 500Gb, 1Tb, 2Tb)");
      while(capacidadIngresada!="250Gb"&&capacidadIngresada!="500Gb"&&capacidadIngresada!="1Tb"&&capacidadIngresada!="2Tb")
      {
         capacidadIngresada=prompt("Error. Ingrese capacidad: (250Gb, 500Gb, 1Tb, 2Tb)");
      }
      if(tipoIngresado=="SSD")
      {
         if (flagSSDbarato==false)
         {
            precioSSDbarato=precioIngresado;
            capacidadSSDbarato=capacidadIngresada;
            cantidadSSDbarato=cantidadIngresada;
            flagSSDbarato=true;
         }
         else
         {
            if(precioIngresado<precioSSDbarato)
            {
               precioSSDbarato=precioIngresado;
               capacidadSSDbarato=capacidadIngresada;
               cantidadSSDbarato=cantidadIngresada;
            }
         }
      }
      else
      {
         if(tipoIngresado=="HDD")
         {
            acumuladorHDD+=cantidadIngresada;
            if (flagHDDcaro==false)
            {
               precioHDDcaro=precioIngresado;
               capacidadHDDcaro=capacidadIngresada;
               cantidadHDDcaro=cantidadIngresada;
               flagHDDcaro=true;
            }
            else
            {
               if(precioIngresado>precioHDDcaro)
               {
                  precioHDDcaro=precioIngresado;
                  capacidadHDDcaro=capacidadIngresada;
                  cantidadHDDcaro=cantidadIngresada;
               }
            }
         }
      }
   }
   if(flagSSDbarato==false)
   {
      mensajeA="No se han ingresado productos del tipo SSD.";
   }
   else
   {
      mensajeA="Del SSD mas barato se registran "+cantidadSSDbarato+" unidades con "+capacidadSSDbarato+" de capacidad.";
   }
   document.write("A. "+mensajeA+"<br>");
   if(flagHDDcaro==false)
   {
      mensajeB="No se han ingresado productos del tipo HDD.";
   }
   else
   {
      mensajeB="Del HDD mas caro se registran "+cantidadHDDcaro+" unidades con "+capacidadHDDcaro+" de capacidad.";
   }
   document.write("B. "+mensajeB+"<br>");
   document.write("C. La cantidad de undidades HDD es: "+acumuladorHDD);
}
/*
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
disponibles.
c) Cuántas unidades de HDD hay en total.
*/