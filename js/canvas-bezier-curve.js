const canvas = document.querySelector("#bezier-curve");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("bezier-curve", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const radius = 5;
const angle = Math.PI / 180;

const colorRed = "rgba(255, 26, 104, 1)";
const colorBlue = "rgba(54, 162, 235, 1)";
const colorGreen = "rgba(75, 192, 192, 1)";
const colorYellow = "rgba(255, 205, 86, 1)";
const colorPurple = "rgba(153, 102, 255, 1)";
const colorOrange = "rgba(255, 159, 64, 1)";

ctx.beginPath(); // Starting Point = SP
ctx.strokeStyle = colorRed;
ctx.lineWidth = 10;
ctx.arc(200, 300, radius, angle * 0, angle * 360, false); // SP
ctx.stroke();

ctx.beginPath(); // Ending Point = EP
ctx.strokeStyle = colorRed;
ctx.lineWidth = 10;
ctx.arc(700, 300, radius, angle * 0, angle * 360, false); // EP
ctx.stroke();

ctx.beginPath(); // Control Point 1 = CP1
ctx.strokeStyle = colorBlue;
ctx.lineWidth = 10;
ctx.arc(300, 100, radius, angle * 0, angle * 360, false); // CP1
ctx.stroke();

ctx.beginPath(); // Control Point 2 = CP2
ctx.strokeStyle = colorBlue;
ctx.lineWidth = 10;
ctx.arc(500, 650, radius, angle * 0, angle * 360, false); // CP2
ctx.stroke();

// bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY)
ctx.beginPath();
ctx.strokeStyle = colorYellow;
ctx.lineWidth = 5;
ctx.moveTo(200, 300);
ctx.bezierCurveTo(300, 400, 500, 650, 700, 300);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = colorPurple;
ctx.lineWidth = 5;
ctx.moveTo(200, 300);
ctx.lineTo(300, 100);
ctx.lineTo(500, 650);
ctx.lineTo(700, 300);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "lightgray";
ctx.lineWidth = 3;
ctx.moveTo(300, 100);
ctx.lineTo(250, 300);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "lightgray";
ctx.lineWidth = 5;
ctx.moveTo(500, 650);
ctx.lineTo(600, 300);
ctx.stroke();
