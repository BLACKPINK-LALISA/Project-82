var mouseUp = "empty";
var width=2;
var radius=20;
var color="red";
var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown" , my_mouseDown);
function my_mouseDown () {
    color = document.getElementById("colour").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
}

canvas.addEventListener("mouseup" , my_mouseUp);
function my_mouseUp(e) {
mouseUp = "mouseUP";
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
 {
     var x = e.clientX - canvas.offsetLeft;
     var y = e.clientY - canvas.offsetTop;

 if (mouseUp == "mouseDown")
 {
     console.log ("current position of x and y coordinates = ");
     console.log ("x =" + x + "y = " + y);
     
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.arc(y, x, radius, 0, 2*Math.PI);
    ctx.stroke();
 }
}