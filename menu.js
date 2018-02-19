
var open = document.getElementById("open");

open.addEventListener("click", function(){
	document.getElementById("menu").style.left = "0px";
});

var close = document.getElementById("close");

close.addEventListener("click", function(){
	document.getElementById("menu").style.left = "-110px";
});
