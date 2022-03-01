let btn = document.querySelector('#delete-product-btn');

let input = document.querySelectorAll('.delete-checkbox');

let divElement = document.querySelectorAll('.col-2');

let principal = document.querySelectorAll('.itens');

btn.onclick = function(){	
	for (let i = 0; i < input.length; i++){
		for (let p = 0; p < 3; p++){
			i = 0;
			p = 0;
			if (principal[p]){
				if (input[i].checked){
					principal.splice(divElement[i], 1);
				}
			}
		}
		
	}
}