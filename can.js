var big=document.getElementById("big");
var num=document.getElementById("num");
var alpha=document.getElementById("alpha");
var alpha0=document.getElementById("alpha0");

var bigChange=function(e){
    alert("BIGG");

}

var numChange=function(e){
    alert("num num");
    e.stopPropagation();
}

var alphaChange=function(e){
    alert("AA BAA");
}


big.addEventListener("click", bigChange);
num.addEventListener("click", numChange);
alpha.addEventListener("click", alphaChange);
alpha0.addEventListener("click", alphaChange);
