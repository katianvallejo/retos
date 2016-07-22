function obtener(){
	var numero = parseFloat(prompt("Digite un número"));
	fizzbuzz(numero);
}

function fizzbuzz(numero){
	try{
		if (numero%3 == 0 && numero%5 == 0) {
			document.getElementById("resultado").innerHTML = "FIZZBUZZ";
		}
		else if (numero%3 == 0) {
			document.getElementById("resultado").innerHTML="FIZZ";
		}
		else if (numero%5 == 0) {
			document.getElementById("resultado").innerHTML="BUZZ";
		}
		else
		{
			document.getElementById("resultado").innerHTML= numero;
		}
	}
	catch(err){
		document.getElementById("resultado").innerHTML= err.message;
	}
}