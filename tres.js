/*
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población 
para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
*/

function mostrar()
{
	var nombreIngresado;
	var edadIngresada;
	var generoIngresado;
	var vacunaIngresada;
	var temperaturaIngresada;
	var flagTemperaturaMaxima;
	var mayorTemperatura;
	var nombreConMasTemperatura;
	var vacunaConMasTemperatura;
	var contadorMujeresSputnik;
	var contadorNoBinariosVacunados;
	var contadorAstraZenecaConFibre;
	var contadorEdadHombresSputnikSinFiebre;
	var acumuladorEdadHombresSputnikSinFiebre;
	var promedioEdadHombresSputnikSinFiebre;
	var respuesta;
	
	flagTemperaturaMaxima=false;
	contadorMujeresSputnik=0;
	contadorNoBinariosVacunados=0;
	contadorAstraZenecaConFibre=0;
	contadorEdadHombresSputnikSinFiebre=0;
	acumuladorEdadHombresSputnikSinFiebre=0;
	respuesta="ok";

	while(respuesta!="listo")
	{
		nombreIngresado=prompt("Ingrese nombre del pasajero/a:");
		edadIngresada=prompt("Ingrese la edad del pasajero/a:");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada||edadIngresada<0||edadIngresada<150))
		{
			edadIngresada=prompt("Error. Ingrese la edad del pasajero/a:");
			edadIngresada=parseInt(edadIngresada);
		}
		generoIngresado=prompt("Ingrese sexo del pasajero/a: ('F', 'M' o 'NB')");
		while(generoIngresado!="F"&&generoIngresado!="M"&&generoIngresado!="NB")
		{
			generoIngresado=prompt("Error. Ingrese sexo del pasajero/a: ('F', 'M' o 'NB')");
		}
		vacunaIngresada=prompt("Ingrese vacuna: “SputnikV”, “AstraZeneca”, “Otra”.");
		while(vacunaIngresada!="SputnikV"&&vacunaIngresada!="AstraZeneca"&&vacunaIngresada!="Otra")
		{
			vacunaIngresada=prompt("Error. Ingrese vacuna: (“SputnikV”, “AstraZeneca”, “Otra”)");
		}
		temperaturaIngresada=prompt("Ingrese la temperatura corporal del pasajero/a: (Entre 35 y 41)");
		temperaturaIngresada=parseInt(temperaturaIngresada);
		while(temperaturaIngresada<35||temperaturaIngresada>41||isNaN(temperaturaIngresada))
		{
			temperaturaIngresada=prompt("Error. Ingrese la temperatura corporal del pasajero/a: (Entre 35 y 41)");
			temperaturaIngresada=parseInt(temperaturaIngresada);
		}
		if(flagTemperaturaMaxima==false)
		{
			mayorTemperatura=temperaturaIngresada;
			nombreConMasTemperatura=nombreIngresado;
			flagTemperaturaMaxima=true;
		}
		else
		{
			if(temperaturaIngresada>mayorTemperatura)
			{
				mayorTemperatura=temperaturaIngresada;
				nombreConMasTemperatura=nombreIngresado;
			}
		}
		if(generoIngresado=="M"&&vacunaIngresada=="SputnikV")
		{
			contadorMujeresSputnik++;
		}
		if(generoIngresado=="NB")
		{
			if(vacunaIngresada=="AstraZeneca"||vacunaIngresada=="Otra")
			{
				contadorNoBinariosVacunados++;
			}
		}
		if(vacunaIngresada=="AstraZeneca"&&temperaturaIngresada>38)
		{
			contadorNoBinariosVacunados++;
		}
		if(generoIngresado=="H"&&vacunaIngresada=="SputnikV"&&temperaturaIngresada<37)
		{
			contadorEdadHombresSputnikSinFiebre++;
			acumuladorEdadHombresSputnikSinFiebre+=edadIngresada;
		}
		respuesta=prompt("Ingrese 'listo' si ese fue el ultimo regristro:")
	}

	document.write("A. La persona con mayor temperatura se llama "+nombreConMasTemperatura+" y esta vacunado con "+vacunaConMasTemperatura+"<br>");
	if(contadorMujeresSputnik==0)
	{
		document.write("B. No han ingresado mujeres con Sputnik.<br>");
	}
	else
	{
		document.write("B. La cantidad de mujeres con Sputnik es: "+contadorMujeresSputnik+".<br>");
	}
	if(contadorNoBinariosVacunados==0)
	{
		document.write("C. No han ingresado no binarios vacunados con AstraZeneca u otra.<br>");
	}
	else
	{
		document.write("C. La cantidad de no binarios con AstraZeneca u Otra es: "+contadorNoBinariosVacunados+".<br>");
	}
	if(contadorAstraZenecaConFibre==0)
	{
		document.write("D. No han ingresado vacunados con AstraZeneca con temperatura alta.<br>");
	}
	else
	{
		document.write("D. La cantidad de vacunados con AstraZeneca que tienen fiebre es: "+contadorAstraZenecaConFibre+".<br>");
	}
	if(contadorEdadHombresSputnikSinFiebre==0)
	{
		document.write("E. No han ingresado hombres con sputnik sin fiebre.<br>");
	}
	else
	{
		promedioEdadHombresSputnikSinFiebre=acumuladorEdadHombresSputnikSinFiebre/contadorEdadHombresSputnikSinFiebre;
		document.write("E. El promedio es: "+promedioEdadHombresSputnikSinFiebre+".<br>");
	}

}
