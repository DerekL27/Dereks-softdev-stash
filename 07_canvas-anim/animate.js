// Team No Makeup: Matthew Chan, Derek Leung
// SoftDev1 pd2
// K07 -- They lock us in the tower whenever we get caught
// 2020-02-12


var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");

var isAnimating = false;
var animationId;
var radius = 0;
var adjust = 1;

var animate = function(e){
    //if(isAnimating == false){
    if(radius>250){
     adjust*=-1;
    }
    if(radius<2){
     adjust = 1;
    }
    radius+=adjust;
    ctx.beginPath();    // starts to draw the circle/dot (like netlogo 'pd' or 'pen down')
    ctx.arc(100, 100, radius, 0, 6.28);
    ctx.fillStyle = "#D8E4FF";
    ctx.fill();
    isAnimating = true;
    animationId = window.requestAnimationFrame(animate);
    //}
};

var animateButton = document.getElementById("animate");
animateButton.addEventListener("click", animate);



 var stop = function(e){
     if (isAnimating == true){
         isAnimating = false;
         window.cancelAnimationFrame(animationId);
     }
 };

 var stopButton = document.getElementById("stop");
 stopButton.addEventListener("click", stop);
