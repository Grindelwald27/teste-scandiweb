// Criar elemento label-----------------------------------------------
let labelElement = document.createElement('label');

// criar elemento input-----------------------------------------------
let inputElement = document.createElement('input');

// chamar elemento div com id print------------------------------------
let divElement = document.getElementById('print');

// criar elemento div principal----------------------------------------
let principal = document.createElement('div');

principal.setAttribute('id', 'medida');

let span = document.createElement('span');


// criando caixas forniture

// caixa 1
let caixa1 = document.createElement('div');

let labelElement1 = document.createElement('label');

labelElement1.setAttribute('class', 'col-4');

// caixa 2
let caixa2 = document.createElement('div');

let labelElement2 = document.createElement('label');

labelElement2.setAttribute('class', 'col-4');

let inputElement2 = document.createElement('input');

// caixa 3
let caixa3 = document.createElement('div');

let labelElement3 = document.createElement('label');

labelElement3.setAttribute('class', 'col-4');

let inputElement3 = document.createElement('input');

// adicionando principal na divElement------------------------------------
divElement.appendChild(principal);

function seletor(){

	let select = document.getElementById('productType');

	let valor = select.options[select.selectedIndex].value;

	rezetarLabel();

	principal.innerHTML = null;
	// Size---------------------------------------------------------------
	if (valor === 'Size'){

		// adiciona principal na div pai-----------------------------------
		divElement.appendChild(principal);

		let textElement = document.createTextNode('Size (MB) :')

		labelElement.appendChild(textElement);

		labelElement.setAttribute('class', 'col-3');

		divElement.appendChild(labelElement);

		inputElement.setAttribute('type', 'number');

		inputElement.setAttribute('class', 'form-control ml-5 col-3');

		inputElement.setAttribute('placeholder', 'Size (MB) ');

		inputElement.setAttribute('id', 'size');

		divElement.appendChild(inputElement);

		let txSpan = document.createTextNode('Please provide size in MB format');

		span.appendChild(txSpan);

		span.setAttribute('style', 'font-weight: bold;');

		span.setAttribute('class', 'col-7');

		divElement.appendChild(span);

	}else if(valor === 'Book'){
		removerPrin();

		// adiciona principal na div pai-----------------------------------
		divElement.appendChild(principal);

		//mexendo no label--------------------------------------------------
		let textElement = document.createTextNode('Weight (KG) :')

		labelElement.appendChild(textElement);

		labelElement.setAttribute('class', 'col-3');

		divElement.appendChild(labelElement);

		// mexendo no input ------------------------------------------
		inputElement.setAttribute('type', 'number');

		inputElement.setAttribute('class', 'form-control ml-5 col-3');

		inputElement.setAttribute('placeholder', 'weight (kg)');

		inputElement.setAttribute('id', 'weight');

		divElement.appendChild(inputElement);

		let txSpan = document.createTextNode('Please provide weight in KG format');

		span.appendChild(txSpan);

		span.setAttribute('style', 'font-weight: bold;');

		span.setAttribute('class', 'col-7');

		divElement.appendChild(span);
		
	}else if(valor === 'Furniture'){
		removerPrin();

		// adiciona principal na div pai
		divElement.appendChild(principal);

		// caixa 1 ---------------------------------------------------
		let texto1 = document.createTextNode('Height (CM) :');

		caixa1.setAttribute('class', 'caixa1 form-inline col-12');

		labelElement1.appendChild(texto1);

		caixa1.appendChild(labelElement1);

		inputElement.setAttribute('type', 'number');

		inputElement.setAttribute('class', 'form-control ml-5 col-4');

		inputElement.setAttribute('placeholder', 'height (cm)');

		inputElement.setAttribute('id', 'height');

		caixa1.appendChild(inputElement);

		principal.appendChild(caixa1);

		// caixa 2 --------------------------------------------------------
		let texto2 = document.createTextNode('Width (CM) :');

		caixa2.setAttribute('class', 'caixa2 form-inline col-12');

		labelElement2.appendChild(texto2);

		caixa2.appendChild(labelElement2);

		inputElement2.setAttribute('type', 'number');

		inputElement2.setAttribute('class', 'form-control ml-5 col-4');

		inputElement2.setAttribute('placeholder', 'width (cm)');

		inputElement2.setAttribute('id', 'width');

		caixa2.appendChild(inputElement2);

		principal.appendChild(caixa2);

		// caixa 3 ------------------------------------------------------
		let texto3 = document.createTextNode('Length (CM) :');

		caixa3.setAttribute('class', 'caixa3 form-inline col-12');

		labelElement3.appendChild(texto3);

		caixa3.appendChild(labelElement3);

		inputElement3.setAttribute('type', 'number');

		inputElement3.setAttribute('class', 'form-control ml-5 col-4');

		inputElement3.setAttribute('placeholder', 'length (cm)');

		inputElement3.setAttribute('id', 'length');

		caixa3.appendChild(inputElement3);

		principal.appendChild(caixa3);

		// span
		let txSpan = document.createTextNode('Please provide dimensions in HxWxL format');

		span.appendChild(txSpan);

		span.setAttribute('style', 'font-weight: bold;');

		span.setAttribute('class', 'col-9');

		divElement.appendChild(span);

	}else if (valor === 'Type Switcher'){
		removerPrin();

		// adiciona principal na div pai
		divElement.appendChild(principal);

		divElement.removeChild(inputElement);
	}

}

function removerPrin(){
	let divElement = document.getElementById('print');

	divElement.removeChild(principal);

}

function rezetarLabel(){
	labelElement.innerHTML = null;

	labelElement1.innerHTML = null;

	labelElement2.innerHTML = null;

	labelElement3.innerHTML = null;

	span.innerHTML = null;
}