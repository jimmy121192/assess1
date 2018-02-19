var bg1 = document.getElementById("bg1");
var bg2 = document.getElementById("bg2");
var bg3 = document.getElementById("bg3");
var bg4 = document.getElementById("bg4");
var pre = document.getElementById("pre");
var zoom = document.getElementById("zoom");
var ch1 = document.getElementById("ch1");
var ch2 = document.getElementById("ch2");
var ch3 = document.getElementById("ch3");
var makebg = document.getElementById("makebg");
var reset = document.getElementById("reset");
var hide = document.getElementById("hide");
var show = document.getElementById("show");
var bg = document.getElementById("bg");
var app1 = document.getElementById("app1");
var zoomin = document.getElementById("zoomin");
var zoomout = document.getElementById("zoomout");
var zoom = document.getElementById("zoom");
var num = document.getElementById("num");




bg1.addEventListener("click", function(){
	document.getElementById("ch1").style.backgroundImage = "url(./imgs/i1.jpg)";
	document.getElementById("ch2").style.backgroundImage = "url(./imgs/i2.jpg)";
	document.getElementById("ch3").style.backgroundImage = "url(./imgs/i3.jpg)";

})
bg2.addEventListener("click", function(){
	document.getElementById("ch1").style.backgroundImage = "url(./imgs/i4.jpg)";
	document.getElementById("ch2").style.backgroundImage = "url(./imgs/i5.jpg)";
	document.getElementById("ch3").style.backgroundImage = "url(./imgs/i6.jpg)";
})

	bg3.addEventListener("click", function(){
	document.getElementById("ch1").style.backgroundImage = "url(./imgs/i7.jpg)";
	document.getElementById("ch2").style.backgroundImage = "url(./imgs/i8.jpg)";
	document.getElementById("ch3").style.backgroundImage = "url(./imgs/i9.jpg)";
	})
		bg4.addEventListener("click", function(){
	document.getElementById("ch1").style.backgroundImage = "url(./imgs/i10.jpg)";
	document.getElementById("ch2").style.backgroundImage = "url(./imgs/i11.jpg)";
	document.getElementById("ch3").style.backgroundImage = "url(./imgs/i12.jpg)";
	})

document.getElementById("ch1").addEventListener("mouseenter", function(){
	zoom.style.backgroundImage = ch1.style.backgroundImage;
})
document.getElementById("ch2").addEventListener("mouseenter", function(){
	zoom.style.backgroundImage = ch2.style.backgroundImage;
})
document.getElementById("ch3").addEventListener("mouseenter", function(){
	zoom.style.backgroundImage = ch3.style.backgroundImage;
})

makebg.addEventListener("click", function(){

bg.style.backgroundImage = zoom.style.backgroundImage
})
reset.addEventListener("click", function(){
bg.style.display = "none";
})
hide.addEventListener("click", function(){
	app1.style.display = "none";
})	
show.addEventListener("click", function(){
	app1.style.display = "block";
})	

//Q5

var curH = 70;
var curW = 100;
zoomin.addEventListener("click", function(){

	curW += 10;
	zoom.style.width = curW + "%";
	curH += 7;
	zoom.style.height = curH + "%";

	if (curW > 91 && curH > 64 ){
		curW = 91;
		curH = 64;
	zoom.style.width = 91 + "%";
	zoom.style.height = 64 + "%";
	}
	

})	

zoomout.addEventListener("click", function(){
	
	curW -= 10;
	zoom.style.width = curW + "%";
	curH -= 7;
	zoom.style.height = curH + "%";
	
	
	if (curW < 11 && curH < 8){
		curW = 11;
		curH = 8;
	zoom.style.width = 11 + "%";
	zoom.style.height = 8 + "%";
	}
	
})		

//Q.6a

if (num.value <= 12 || num.value >= 1)
	{num.addEventListener("change", function(){
	bg.style.backgroundImage = "url(./imgs/i"+num.value+".jpg)";
})
}
function warn(id) {	
if (num.value > 12 || num.value < 1) { alert("Doesn’t exist!")};
}

//Q.6b


	
/*var step = 1;  


next.addEventListener("click", function(){
step =step +1;

	if (step == 4){step= 0;};
document.getElementById('"bg"+step').selected;
})*/



var imgN1 = 1;
var imgN2 = 2;
var imgN3 = 3;


next.addEventListener("click", function(){
imgN1 = imgN1+3;
imgN2 = imgN2+3;
imgN3 = imgN3+3;


	if (imgN3 == 15){imgN1 = 1; imgN2 = 2; imgN3 = 3;};
	ch1.style.backgroundImage = "url(./imgs/i"+imgN1+".jpg)";
	ch2.style.backgroundImage = "url(./imgs/i"+imgN2+".jpg)";
	ch3.style.backgroundImage = "url(./imgs/i"+imgN3+".jpg)";
	});

pre.addEventListener("click", function(){
imgN1 = imgN1-3;
imgN2 = imgN2-3;
imgN3 = imgN3-3;


	if (imgN1 == -2){imgN1 = 10; imgN2 = 11;imgN3 = 12;};
	ch1.style.backgroundImage = "url(./imgs/i"+imgN1+".jpg)";
	ch2.style.backgroundImage = "url(./imgs/i"+imgN2+".jpg)";
	ch3.style.backgroundImage = "url(./imgs/i"+imgN3+".jpg)";
	});



/*zoomin.addEventListener("click", function(){
	if (zoom.style.width < 91 +"%")
	zinh = parseInt(zinh + 7);
	zinw = parseInt(zinw + 10);
	zoom.style.width = zinw + "%";
	zoom.style.height = zinh + "%";
})	
zoomout.addEventListener("click", function(){
	zinh = parseInt(zinh - 7);
	zinw = parseInt(zinw - 10);
	zoom.style.width = zinw + "%";
	zoom.style.height = zinh + "%";
})	*/