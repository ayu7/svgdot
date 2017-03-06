var pic= document.getElementById("vimage");
var button=document.getElementById("button");

var circle=function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    
    var c= document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    return c;
}

var addCircle=function(e){
    var c=circle(e);
    pic.appendChild(c);

}
   
var clear=function(){
    while (pic.childNodes.length>0){
	pic.removeChild(pic.childNodes[0]);
    }
}

pic.addEventListener("click", addCircle, true);
button.addEventListener("click", clear);
