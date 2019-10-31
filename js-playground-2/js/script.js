let linkItems = document.querySelectorAll(".container li a");

linkItems.forEach(function(itm,ind,arr){
	itm.addEventListener("click",changeBg)
	
})

function changeBg(e){
	
	let value1= Math.random(255);
	let value2= Math.random(205);
	let value3= Math.random(155);
	
	document.body.style.backgroundColor = 'rgb(' + value1 + ',' + value2 +',' +value3+')'
}