//We Suck At Calculus - Kevin Li / Derek Leung (Big Buford)
//SoftDev pd2
//K13 -- Ask Circles
//2020-03-27

var namespace = "http://www.w3.org/2000/svg"; //don't want to keep retyping this
var pic = document.getElementById("vimage");
var clearbutton = document.getElementById("clear");

var clear = function() {
  var rect = document.createElementNS(namespace, "rect");
  rect.setAttribute("width", 500);
  rect.setAttribute("height", 500);
  rect.setAttribute("style", "fill:rgb(255,255,255);"); //big brain maneuvers
  pic.appendChild(rect);
  drawnOn = false;
}

var draw = function(e) {
  var x = e.offsetX;
  var y = e.offsetY;

    var c = document.createElementNS(namespace, "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 20);
    c.setAttribute("fill", "blue");
    c.addEventListener("click",draw2);
    pic.appendChild(c);

}

var draw2 = function(e) {
  this.setAttribute("fill","cyan");
  this.removeEventListener("click",draw2);
  this.addEventListener("click",draw3);
  e.stopPropagation();
}

var draw3 = function(e) {
  var x = Math.round(Math.random() * 500)
  var y = Math.round(Math.random() * 500)

    var c = document.createElementNS(namespace, "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 20);
    c.setAttribute("fill", "blue");
    c.addEventListener("click",draw2);
    pic.appendChild(c);
  pic.removeChild(this)
  e.stopPropagation()
}

clearbutton.addEventListener("click", clear);
pic.addEventListener("click", draw);
