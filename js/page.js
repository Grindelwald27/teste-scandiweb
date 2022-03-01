// Criar elemento label-----------------------------------------------
let labelElement = document.createElement('label');

// criar elemento input-----------------------------------------------
let inputElement = document.createElement('input');

// chamar elemento div com id print------------------------------------
let divElement = document.getElementById('print');

// criar elemento div principal----------------------------------------
let principal = document.createElement('div');

principal.setAttribute('id', 'medida');

principal.setAttribute('class', 'form-group');

// adicionando principal na divElement------------------------------------
divElement.appendChild(principal);

function seletor(){

	let select = document.getElementById('productType');

	let valor = select.options[select.selectedIndex].value;

	labelElement.innerHTML = '';
	// Size---------------------------------------------------------------
	if (valor === 'Size'){

		// adiciona principal na div pai-----------------------------------
		divElement.appendChild(principal);

		let textElement = document.createTextNode('Size (MB) :')

		labelElement.appendChild(textElement);

		divElement.appendChild(labelElement);

		inputElement.setAttribute('type', 'number');

		inputElement.setAttribute('class', 'form-control ml-5');

		inputElement.setAttribute('placeholder', 'Size (MB) ');

		inputElement.setAttribute('id', 'dvd');

		divElement.appendChild(inputElement);

	}else if(valor === 'Book'){
		removerInput();

		// adiciona principal na div pai-----------------------------------
		divElement.appendChild(principal);

		//mexendo no label--------------------------------------------------
		let textElement = document.createTextNode('Weigth (KG) :')

		labelElement.appendChild(textElement);

		divElement.appendChild(labelElement);

		// mexendo no input ------------------------------------------
		inputElement.setAttribute('type', 'number');

		inputElement.setAttribute('class', 'form-control ml-5');

		inputElement.setAttribute('placeholder', 'weigth (kg)');

		inputElement.setAttribute('id', 'weigth');

		divElement.appendChild(inputElement);
		
	}else if(valor === 'Furniture'){
		removerInput();

		// adiciona principal na div pai
		divElement.appendChild(principal);

		// caixa 1 ---------------------------------------------------
		let texto1 = document.createTextNode('Height (CM)');

		let caixa1 = document.createElement('div');

		caixa1.setAttribute('class', 'caixa1 form-inline');

		labelElement.appendChild(texto1);

		caixa1.appendChild(labelElement);

		inputElement.setAttribute('type', 'number');

		inputElement.setAttribute('class', 'form-control ml-5');

		inputElement.setAttribute('placeholder', 'height (cm)');

		inputElement.setAttribute('id', 'height');

		caixa1.appendChild(inputElement);

		principal.appendChild(caixa1);

		divElement.appendChild(principal);

		// caixa 2 --------------------------------------------------------
		let texto2 = document.createTextNode('Width (CM)');

		let caixa2 = document.createElement('div');

		caixa2.setAttribute('class', 'caixa2 form-inline');

		labelElement.appendChild(texto2);

		caixa2.appendChild(labelElement);

		inputElement.setAttribute('type', 'number');

		inputElement.setAttribute('class', 'form-control ml-5');

		inputElement.setAttribute('placeholder', 'width (cm)');

		inputElement.setAttribute('id', 'width');

		caixa2.appendChild(inputElement);

		principal.appendChild(caixa2);

		divElement.appendChild(principal);

		// caixa 3 ------------------------------------------------------
		let texto3 = document.createTextNode('Length (CM)');

		let caixa3 = document.createElement('div');

		caixa3.setAttribute('class', 'caixa3 form-inline');

		labelElement.appendChild(texto3);

		caixa3.appendChild(labelElement);

		inputElement.setAttribute('type', 'number');

		inputElement.setAttribute('class', 'form-control ml-5');

		inputElement.setAttribute('placeholder', 'length (cm)');

		inputElement.setAttribute('id', 'length');

		caixa3.appendChild(inputElement);

		principal.appendChild(caixa3);

		divElement.appendChild(principal);

	}else if (valor === 'Type Switcher'){
		removerInput();

		// adiciona principal na div pai
		divElement.appendChild(principal);

		divElement.removeChild(labelElement);

		divElement.removeChild(inputElement);
	}

}

function removerInput(){
	let divElement = document.getElementById('print');

	divElement.removeChild(principal);
}