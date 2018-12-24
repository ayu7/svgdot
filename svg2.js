var pic= document.getElementById("vimage");
var button=document.getElementById("button");
var stop=document.getElementById("stop");
var intervalID;


var dot=function(e){
    var r=10;
    //idk why but calling clear here doesn't work, maybe something about interval and how the functions run?? not sure
    clearInterval(intervalID);
    while (pic.childNodes.length>0){
         pic.removeChild(pic.childNodes[0]);}

    var width=parseInt(pic.getAttribute("width"));
    var height=parseInt(pic.getAttribute("height"));

    var c= document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", width/2);
    c.setAttribute("cy", height/2);
    c.setAttribute("r", r);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);

    var small=true;

    var grow=function(){
      if (small)
	       r++;
      else
         r--;
	    c.setAttribute("r", r);

      if (r >width/2 || r >height/2)
        small=false;
      if (r<1)
        small=true;

  }

    intervalID=window.setInterval(grow, 16);

}

var clear=function(){
    stopIt;
    while (pic.childNodes.length>0){
	       pic.removeChild(pic.childNodes[0]);
    }
}

var stopIt= function(){
    clearInterval(intervalID);
}

pic.addEventListener("click", dot);
button.addEventListener("click", clear);
stop.addEventListener("click", stopIt);
