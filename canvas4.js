var pic= document.getElementById("vimage");
var button=document.getElementById("button");

var prevX=-1;
var prevY=-1;

var dot=function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    var c= document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");

    pic.appendChild(c);

    if (prevX>=0||prevY>=0){
	var l=document.createElementNS("http://www.w3.org/2000/svg", "line");
	l.setAttribute("x1", x);
	l.setAttribute("x2", prevX);
	l.setAttribute("y1", y);
	l.setAttribute("y2", prevY);
	l.setAttribute("stroke", "black");
	pic.appendChild(l);
}

    prevX=x;
    prevY=y;
}

var clear=function(){
    while (pic.childNodes.length>0){
	pic.removeChild(pic.childNodes[0]);
    }
    prevX=-1;
    prevY=-1;
}

pic.addEventListener("click", dot);
button.addEventListener("click", clear);
