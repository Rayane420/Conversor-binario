function acessarBinario(){
	var decimal = document.querySelector(".decimal").value;
	
	
	var numBinario = parseInt(decimal).toString(2);
 
	document.querySelector(".numBinario").innerHTML = numBinario;
		
	
}

function acessarDecimal(){
	var binario = document.querySelector(".binario").value;
	
	
	var numDecimal = parseInt(binario, 2);
 
	document.querySelector(".numDecimal").innerHTML = numDecimal;
	
	
	
}