/*
Por Paltoko - 2016 
	;( )
	
Esta obra está sujeta a la licencia Reconocimiento 4.0 Internacional de Creative Commons. 
http://creativecommons.org/licenses/by/4.0/.
	
**/

// !!! POR HACER:
/*
- explotar.
- No sigas leyendo tramposo!!!
*/


//Variables

var error_txt = "Ingrese un texto válido!"
var fase = 0;
var dlg = document.getElementById("dialogo");
var opciones = document.getElementById("casos");
var res = document.getElementById("respuesta");
var error_ele = document.getElementById("errorLog");


// Variables para FrameLooper
var myString = "";
var myArray = myString.split("");
var loopTimer;

// var finales
var monedas = false; // op dar monedas de fase 1.
var robar = false; // op robar.

// Casos
	//fase 0
var c0 = "JUGAR";
var cc = "CREDITOS";
	//fase 1
var c1a = "DAR UNAS MONEDAS";
var c1b = "IGNORARLO";
	// fase 2
var c2a = "ESPERAR AL VERDE";
var c2b = "CRUZAR";
	//fase 3
var c3a = "ESPERAR TU TURNO";
var c3b = "PREGUNTAR SI TE PUEDEN ATENDER AHORA";
	//fase 4
var c4a1 = "PAGAR";
var c4b = "ROBAR SIN QUE SE DE CUENTA";
var c4a2 = "ESPERAR TU TURNO";
	//fase 5
var c5a1 = "ACELERAR EL PASO";
var c5a2 = "TOMAR TRANSPORTE";
var c5a3 = "SALIR Y TOMAR TRANSPORTE";

	//fase 6
var c6a1 = "INSULTAR";
var c6b = "SEGUIR TU CAMINO";
var c6a2 = "ABRIR LA PUERTA";
	//fase 7
var c7a1 = "SEGUIR TU CAMINO";
var c7a2 = "ESPERAR";
	//fase 8
var c8a1 = "ABRIR LA PUERTA";

	//reset
var c_reset = "ABRE LOS OJOS";


// Dialogos
var credits = "Por Paltoko - (CC BY 4.0) - 2016 ;()";

var d1 = "Cierra los ojos.  >>Tu madre necesita un medicamento. Estás en el centro de la ciudad camino a la farmacia. Te encuentras con un vagabundo pidiendo dinero, no se ve bien.";

	//fase 2
var d2a = ">>Le das unas monedas y sigues tu camino. Llegas a un semáforo en rojo.";

var d2b = ">>Simplemente lo ignoras y sigues tu camino. Llegas a un semáforo en rojo.";

	//fase 3
var d3a = ">>Esperas la luz verde y cruzas sin perder más tiempo. Llegas a la farmacia, pero hay veinte personas antes que tú.";

var d3b = ">>Cruzas sin perder el tiempo. Un auto pasó peligrosamente cerca de ti, pero sólo recibes algunos insultos del conductor. Llegas a la farmacia, pero hay veinte personas antes que tú.";

	//fase 4
var d4a = ">>Esperas tu turno hasta que por fin te atienden. El empleado dice que sólo hay en existencia la opción de medicamento más cara.";

var d4b = ">>Les dices que es urgente y que necesitas que te atiendan ahora, pero sólo logras adelantar un turno.";

	//fase 5
var d5a1 = ">>Pagas y te vas de la farmacia con el medicamento. Ya no te alcanza para volver en transporte público.";

var d5a2 = ">>Pagas y te vas de la farmacia con el medicamento. Te alcanza el dinero justo para el transporte público.";

var d5a3 = ">>Le preguntas por unas vitaminas, mientras las busca, rápida y disimuladamente te robas la medicina... " + "No te han detectado.";

	//fase 6
var d6a1 = ">>Aceleras el paso para volver pronto a tu hogar. Te encuentras al mismo vagabundo que le diste dinero.";

var d6a2 = ">>Llegas a tu hogar.";

	//fase 7
var d7a1 = ">>Molesto por haberle dado unas monedas, insultas al vagabundo, pero él no te responde.";

var d7a2 = ">>Encuentras a tu madre sintiéndose muy mal, pero le das la medicina esperando a que se recupere. Te quedas cuidándola toda la noche.";

var d7a3 = ">>Encuentras a tu madre sintiéndose muy mal, por lo que le das la medicina prontamente para que se recupere. " + "Te quedas cuidándola esta noche.";

	//fase 8
var d8a1 = ">>Sigues tu camino lo más pronto posible. Llegas a tu hogar.";

var d8a2 = ">>Fue una larga noche, pero tu madre parece estar mejor. Ese mismo día ves en las noticias que un hombre sin hogar murió en la noche en pésimas condiciones. " + "Te preguntas si fue el mismo vagabundo que te pidió unas monedas el día anterior, si tu ayuda hubiese sido útil; si sólo usar una pequeña parte de tu tiempo para un gesto desinteresado a un extraño, hubiese cambiado las cosas... " + "FIN.-";

var d8a3 = ">>Fue una larga noche, pero tu madre parece estar mejor. Luego de pasado lo peor, sientes el remordimiento de tus acciones; ¿es válido actuar en egoísmo con extraños, mientras sea para ayudar a un ser querido? " + "Personas sin rostro que entran y salen de nuestras vidas. Cómo mejoraría el mundo si los viéramos como una imagen familiar... " + "FIN.-";

	//fase 9
var d9a = ">>Tu madre está peor. No hay tiempo para la medicina. Llamas a emergencias y se llevan a tu madre al hospital. " + "Esperando a que ella se recupere, te preguntas si esto se hubiese evitado si hubieras llegado antes; tuvieras más dinero o hubieras puesto tus intereses por sobre todos... "  + "FIN.-";


// Funcion juego
function game(e) {
	//Si presiona tecla "Enter"
    if (e.keyCode == 13) {
		var respu = res.value;
		var resV = respu.toUpperCase();
		
		
		
		//fase 0
		if (fase == 0){
			//console.log("iniciando fase 0 " +"var fase = " + fase );	
			
			switch(resV) {
				case c0:
					$("#titulo").hide(1000);
					$("#op_ini").hide();
					$("#casos").show();
					mostrarCasos(c1a, c1b);
					nextF(d1);
					break;
				case cc:
					nextF(credits);
					$("#casos").hide();
					fase -= 1;
					break;
				default:
					//logError();	
					return false;
			}
		}else if (fase == 1){	
		//fase 1
		
			//console.log("iniciando fase 1 " +"var fase = " + fase );
			switch(resV) {
				case c1a:
					monedas = true;
					//console.log("monedas = " + monedas); 
					mostrarCasos(c2a, c2b);
					nextF(d2a);
					break;
				case c1b:
					mostrarCasos(c2a, c2b);
					nextF(d2b);
					break;
				default:
					//logError();
					return false;					
			}
		}else if (fase == 2){
		//fase 2
		
			//console.log("iniciando fase 2 " +"var fase = " + fase );
			//mostrarCasos(c3a, c3b);
			switch(resV) {
				case c2a:
					mostrarCasos(c3a, c3b);
					nextF(d3a);
					break;
				case c2b:
					mostrarCasos(c3a, c3b);
					nextF(d3b);
					break;
				default:
					//logError();	
					return false;
			}
		}else if (fase == 3){
		//fase 3
		
			//console.log("iniciando fase 3 " +"var fase = " + fase );
			switch(resV) {
				case c3a:
					mostrarCasos(c4a1, c4b);
					nextF(d4a);
					break;
				case c3b:
					mostrarCasos(c4a2,"");
					nextF(d4b);
					break;
				default:
					//logError();	
					return false;
			
			}
		
		}else if (fase == 4){
		//fase 4
		
			//console.log("iniciando fase 4 " +"var fase = " + fase );
			switch(resV) {
				case c4a1:
					if(monedas == true){
						mostrarCasos(c5a1, "");
						nextF(d5a1);
						break;
					}else{
						mostrarCasos(c5a2,"");
						nextF(d5a2);
						break;
					}
				case c4a2:
						mostrarCasos(c4a1, c4b);
						nextF(d4a);
						fase -= 1;
						break;
					
				
				case c4b:
					robar = true;
					//console.log("robar = " + robar);
					mostrarCasos(c5a3,"");
					nextF(d5a3);
					break;
				default:
					//logError();	
					return false;
			
			}		
			
			
		}else if (fase == 5){
			//fase 5
			
			//console.log("iniciando fase 5 " +"var fase = " + fase );
			switch(resV) {
				case c5a1:
					mostrarCasos(c6a1,c6b);
					nextF(d6a1);
					break;				
				case c5a2:
					mostrarCasos(c6a2,"");
					nextF(d6a2);
					break;
				case c5a3:
					mostrarCasos(c6a2,"");
					nextF(d6a2);
					break;
				default:
					//logError();	
					return false;
			
			}

		}else if (fase == 6){
			//fase 6
			
			//console.log("iniciando fase 6 " +"var fase = " + fase );
			switch(resV) {
				case c6a1:
					mostrarCasos(c7a1,"");
					nextF(d7a1);
					break;	
				case c6b:
					mostrarCasos(c8a1,"");
					nextF(d8a1);
					fase += 1;
					break;	
				
				
				case c6a2:
					//console.log("camino robar");
					if(robar == true){
						//console.log("entro al if");
						mostrarCasos(c7a2,"");
						nextF(d7a3);
						break;	
					}else{
						//console.log("camino no robar");
						mostrarCasos(c7a2,"");
						nextF(d7a2);
						break;	
					}
					
				default:
					//logError();	
					return false;
			
			}
			
			
		}else if(fase == 7){
			//fase 7
			
			//console.log("iniciando fase 7 " +"var fase = " + fase );
			switch(resV) {
				case c7a1:
					mostrarCasos(c8a1,"");
					nextF(d8a1);
					break;				
				case c7a2:
					if(robar == false){
						nextF(d8a2);
						mostrarCasos(c_reset, "");
						//fin
						break;
						
					}else{
						nextF(d8a3);
						mostrarCasos(c_reset, "");
						//fin
						break;
					}	
				default:
					//logError();	
					return false;
			
			}
			
		}else if (fase == 8){
			//fase 8
			
			//console.log("iniciando fase 8 " +"var fase = " + fase );
			switch(resV) {
				case c8a1:
					nextF(d9a);
					mostrarCasos(c_reset, "");
					//$("#casos").hide();
					//fin
					break;	
				case c_reset:
					rst();
					break;
				default:
					//logError();	
					return false;
			
			}
			
		}else if (fase == 9){
			//fase 9
			
			//console.log("iniciando fase 9 " +"var fase = " + fase );
			switch(resV) {
				case c_reset:
					rst();
					//fin
					break;			
				default:
					//logError();	
					return false;
			
			}	
		}else{
			return false;
		}
				
        return false;
    }
}

// Funcion siguiente fase
// string -> void
function nextF(d){
	dlg.innerHTML = "";
	//dlg.innerHTML = d;
	fase += 1;
	errorLog.innerHTML = "";
	res.value = "";
	
	myString = d;
	myArray = myString.split("");
	frameLooper();
}


// Funcion texto errorLog
function logError(){
	res.value = "";
	if(error_ele != " "){
		errorLog.innerHTML = error_txt;
	}	
}

// Funcion mostrar casos
// string, string -> void
function mostrarCasos(c1, c2){
	opciones.innerHTML = c1 + "</br>" + c2;
}

// Funcion reset
function rst(){
	fase = 0;
	$("#op_ini").show();
	$("#casos").hide();
	dlg.innerHTML = "";
	$("#titulo").show();
	myString = "";
	res.value = "";
	//console.log("RESET");
		
}

// Funcion Frame looper para dialogo
function frameLooper() {
	if(myArray.length > 0) {
		document.getElementById("dialogo").innerHTML += myArray.shift();
	} else {
		clearTimeout(loopTimer); 
                return false;
	}
	loopTimer = setTimeout('frameLooper()',70);
	
}


