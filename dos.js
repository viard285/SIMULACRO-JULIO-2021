/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos alimenticios, 
hasta que el cliente quiera. Por cada compra se ingresa:
Tipo: (validar "Yerba", "Azúcar", "Café").
Cantidad de bolsas. (más de cero).
Precio por bolsa (más de cero).
Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a pagar.
Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar.
Se pide mostrar por pantalla:
a)	El importe total a pagar bruto, sin descuento.
b)	El importe total a pagar con descuento (solo si corresponde)
c)	Informar el tipo con más cantidad de bolsas.
d)	El tipo de la compra más barata. (sobre el Bruto sin descuento)
*/

function mostrar()
{
  var productoIngresado;
  var cantidadDeBolsas;
  var precioIngresado;
  var precioTotal;
  var descuento;
  var acumuladorPrecio;
  var acumuladorBolsas;
  var precioConDescuento;
  var mayorCantidadBolsas;
  var productoConMasCantidad;
  var menorPrecio;
  var productoMasBarato;
  var flagCantidad;
  var flagPrecio;
  var respuesta;

  acumuladorPrecio=0;
  acumuladorBolsas=0;
  flagCantidad=false;
  flagPrecio=false;
  respuesta="ok";

  while(respuesta!="listo")
  {
    productoIngresado=prompt("Ingrese su producto: (Azucar, Yerba o Cafe)");
    while(productoIngresado!="Azucar"&&productoIngresado!="Yerba"&&productoIngresado!="Cafe")
    {
      productoIngresado=prompt("Error. Ingrese su producto: (Azucar, Yerba o Cafe)");
    }
    cantidadDeBolsas=prompt("Ingrese la cantidad de bolsas:");
    cantidadDeBolsas=parseInt(cantidadDeBolsas);
    while(cantidadDeBolsas<1||isNaN(cantidadDeBolsas))
    {
      cantidadDeBolsas=prompt("Error. Ingrese la cantidad de bolsas:");
      cantidadDeBolsas=parseInt(cantidadDeBolsas);
    }
    precioIngresado=prompt("Ingrese el precioIngresado por unidad:")
    precioIngresado=parseInt(precioIngresado);
    while(precioIngresado<1||isNaN(precioIngresado))
    {
      precioIngresado=prompt("Ingrese el precioIngresado por unidad:")
      precioIngresado=parseInt(precioIngresado); 
    }
    precioTotal=precioIngresado*cantidadDeBolsas;
    acumuladorPrecio+=precioTotal;
    acumuladorBolsas+=cantidadDeBolsas;
    if(flagCantidad==false)
    {
      mayorCantidadBolsas=cantidadDeBolsas;
      productoConMasCantidad=productoIngresado;
      flagCantidad=true;
    }
    else
    {
      if(cantidadDeBolsas>mayorCantidadBolsas)
      {
        mayorCantidadBolsas=cantidadDeBolsas;
        productoConMasCantidad=productoIngresado;
      }
    }
    if(flagPrecio==false)
    {
      menorPrecio=precioIngresado;
      productoMasBarato=productoIngresado;
      flagPrecio=true;
    }
    else
    {
      if(precioIngresado<menorPrecio)
      {
        menorPrecio=precioIngresado;
        productoMasBarato=productoIngresado;
      }
    }
    respuesta=prompt("Ingrese 'listo' si ese fue su ultimo producto");
  }
  document.write("A. El precioIngresado total sin descuento es :"+acumuladorPrecio+".<br>");
  if(acumuladorBolsas>10)
  {
    if(acumuladorBolsas<30)
    {
      descuento=15;
    }
    else
    {
      descuento=25;
    }
    precioConDescuento=acumuladorPrecio-acumuladorPrecio*descuento/100;
    document.write("B. El precioIngresado con el descuento aplicado es: "+precioConDescuento+".<br>");
  }
  else
  {
    document.write("B. No se aplican descuentos en esta compra.<br>");
    
  }
  document.write("C. El tipo con mayor cantidad de bolsas es: "+productoConMasCantidad+"<br>");
  document.write("D. El tipo mas caro es: "+productoMasBarato+"<br>");
}