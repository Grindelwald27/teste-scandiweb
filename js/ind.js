let btn = document.querySelector('#delete-product-btn');

let input = document.querySelectorAll('.delete-checkbox');

let divElement = document.querySelectorAll('.col-2');

let principal = document.querySelector('.itens');

btn.onclick = function(){
	for (let i = 0; i < input.length; i++){
		if (input[i].checked){
			input[i].parentElement.remove();
		}
	}	
}