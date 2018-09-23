


var slicePercent = [0.1,0.65,0.25];
var sliceSize = slicePercent.length;
var chartColors = ["#00aeff","ffcf36","#27c155","#ed5290"];

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var centerX = canvasWidth/2;
var centerY = canvasHeight/2;
var chartRadius = Math.min(canvasWidth,canvasHeight)/2;

var startAngel = [];
startAngel[0] = 0;
startAngel[1] = 2*Math.PI*slicePercent[0];
startAngel[2] = startAngel[1] + 2*Math.PI*slicePercent[1];
startAngel[3] = startAngel[2] + 2*Math.PI*slicePercent[2];

for(i=0;i<sliceSize;i++){
    context.beginPath();
    context.moveTo(centerX,centerY);
    context.arc(centerX,centerY,chartRadius,startAngel[i],startAngel[i+1],false);
    context.lineTo(centerX,centerY);
    context.closePath();
    context.fillStyle = chartColors[i];
    context.fill();

    context.lineWidth = 2;
    context.strokeStyle = "#fff";
    context.stroke();
}

context.beginPath();
context.moveTo(centerX,centerY);
context.arc(centerX,centerY,chartRadius*0.5,0,2*Math.PI,true);
context.lineTo(centerX,centerY);
context.closePath();
context.fillStyle = "#fff";
context.fill();
