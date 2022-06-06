resultado = document.getElementsByClassName('resultado');
resultado.innerHTML = 'Igual.';

function comparar(){
	n1 = document.getElementsByName('n1')[0].value;
	n2 = document.getElementsByName('n2')[0].value;
	resultado = document.getElementsByClassName('resultado')[0];
	if (n1 == n2){
		resultado.innerHTML = 'Igual.';
	}else if(n1>n2){
		resultado.innerHTML = 'n1 maior que n2.';
	}else{
		resultado.innerHTML = 'n1 menor que n2.';
	}
}


function comparar_string(){
	string1 = document.getElementsByName('string1')[0].value;
	string2 = document.getElementsByName('string2')[0].value;
	resultado = document.getElementsByClassName('resultado_s')[0];
	if (string1.length == string2.length){
		resultado.innerHTML = 'Igual.';
	}else if(string1.length > string2.length){
		resultado.innerHTML = 'string1 maior que string2.';
	}else{
		resultado.innerHTML = 'string1 menor que string2.';
	}
}

function full(){
	d = (document.getElementsByName('day')[0].value)*1;
	m = (document.getElementsByName('month')[0].value)*30;
	y = (document.getElementsByName('year')[0].value)*365;
	
	genero = document.getElementsByName('genero')[0].value;
	resultado = document.getElementsByClassName('resultado_full')[0];
	
	dias = d+m+y;
	console.log(dias);
	if(genero == 1){
		ibge = (73.1)*365;
		resultado.innerHTML = "Falta:"+(ibge-dias)+" de dias restantes.";
	}else{
		ibge = (80.1)*365;
		resultado.innerHTML = "Falta:"+(ibge-dias)+" de dias restantes.";
	}
}