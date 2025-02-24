const canvas = document.querySelector("#bezier-curve");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const radius = 5;
const angle = Math.PI / 180;

const colorRed = "rgba(255, 26, 104, 1)";
const colorBlue = "rgba(54, 162, 235, 1)";
const colorGreen = "rgba(75, 192, 192, 1)";
const colorYellow = "rgba(255, 205, 86, 1)";
const colorPurple = "rgba(153, 102, 255, 1)";
const colorOrange = "rgba(255, 159, 64, 1)";

ctx.beginPath();
ctx.strokeStyle = colorRed;
ctx.lkineWidth = 5;
ctx.arc(200, 300, radius, angle * 0, angle * 360, false);
