var pic= document.getElementById("vimage");
var clear=document.getElementById("clear");
var move=document.getElementById("move");
var requestID;

var createCircle=function(x, y, r, hor, vert){
  var c= document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", r);
  c.setAttribute("fill", "yellow");
  c.setAttribute("stroke", "black");
  c.setAttribute("hor",hor);
  c.setAttribute("vert", vert);
  c.addEventListener("click",changeCircle);
  pic.appendChild(c);
};


var dot=function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    createCircle(x,y,20,1,1);
};

var changeCircle=function(e){
    if (this.getAttribute("fill") == "blue"){
      this.parentNode.removeChild(this);
      var x=Math.random()*500;
      var y=Math.random()*500;
      createCircle(x,y,20,1,1);
  }
    else
      this.setAttribute("fill", "blue");
    e.stopPropagation();
};


var moveThings=function(e){

  var move=function(){
    console.log(requestID);
    children = pic.children;
    var xbound=parseInt(pic.getAttribute("width"));
    var ybound=parseInt(pic.getAttribute("height"));


	for (var i = 0; i < children.length; i++) {
	    var c = children[i];

	    var cx = parseInt(c.getAttribute("cx"));
	    var cy = parseInt(c.getAttribute("cy"));
      var hor=parseInt(c.getAttribute("hor"));
      var vert=parseInt(c.getAttribute("vert"));
      var r=parseInt(c.getAttribute("r"));

      if (cx==xbound/2){
        r=r/2;
        if (r>2){
          c.setAttribute("r",r);
          createCircle(cx+(hor*-1),cy,r,hor*-1,vert);
        }
        else
          pic.removeChild(c);
      }

      if (cx==xbound-r||cx==r){
        hor*=-1;
        c.setAttribute("hor",hor);
      }
      if (cy==ybound-r||cy==r){
        vert*=-1;
        c.setAttribute("vert",vert);
      }
      c.setAttribute("cx",cx+hor);
      c.setAttribute("cy", cy+vert);

}
	    requestID = window.requestAnimationFrame(move);
  }
    move();
};

var clearIt=function(){
    while (pic.childNodes.length>0){
	       pic.removeChild(pic.childNodes[0]);
    }
};

pic.addEventListener("click", dot);
clear.addEventListener("click", clearIt);
move.addEventListener("click", moveThings);
