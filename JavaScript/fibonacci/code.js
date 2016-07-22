function obtener(){
	var numero= parseFloat(prompt("Digite un número"));
	try{
		if (numero>=0){
			mensaje(numero, fibonacci(numero));
		}
		else{
			alert("Ingreso un número negativo");
		}
	}
	catch(err){
		alert(err.message);
	}
}

function fibonacci(numero){
	try{
		if(numero==0){
			return numero;
		}
		else if (numero==1){
			return numero;
		}
		else {
			var c;
			a=0, b=1; 
			for (var i = 2; i < numero; i++) {
				c=a;
				a=b;
				b=a+c;
			}
			return b;
		}
	}
	catch(err){
		alert(err.message);
	}
}

function mensaje(numero, n){
	alert ("El fibonacci de " + numero + " es: " + n);
}