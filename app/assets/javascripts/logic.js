function onClick(e){
	document.getElementById("text").innerHTML = document.getElementById("input").value;
}

//Executes these upon load
document.addEventListener("DOMContentLoaded", function(event){
document.getElementById("submit").addEventListener("click", onClick);
});