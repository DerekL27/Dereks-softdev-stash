//Derek Leung and William Lin
//Softdev1 pd2
//K04: I See a Red Door...
//2020-02-06

//e.preventDefault() throws out the event if it is not explicitly handled in the code

var rectMode = false //state variable?

var clearScreen = function(e){
  var c = document.getElementById("slate");
  var ctx = c.getContext("2d");
  ctx.clearRect(0,0,c.width,c.height);
};

var button = document.getElementById('clear');
button.addEventListener('click',clearScreen);

var switchMode = function(e){
    if(rectMode == false){
        rectMode = true;
    }
    else{
        rectMode = false;
    }
};


var draw = function(event){
    var c = document.getElementById("slate");
    var ctx = c.getContext("2d");
    ctx.beginPath(); //like pd in netlogo?
    ctx.arc(event.offsetX, event.offsetY, 5, 0, 2 * Math.PI);
    ctx.fill();
};

var canvas = document.getElementById("slate");
canvas.addEventListener('click',draw);
