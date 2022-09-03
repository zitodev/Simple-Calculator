//clear screen function
function clearMe(){
	document.getElementById('screen').value = "";
}
//display value
function openMe(value){
	document.getElementById('screen').value += value;
}
//to evaluate the value
function calculator(){
	let value = document.getElementById('screen').value;
	let cal = eval(value);
	document.getElementById('screen').value = cal;
}