/* FADE IN ON SCROLL */

const reveals = document.querySelectorAll(".reveal");

function reveal(){

for(let i=0;i<reveals.length;i++){

const windowHeight = window.innerHeight;
const elementTop = reveals[i].getBoundingClientRect().top;
const elementVisible = 150;

if(elementTop < windowHeight - elementVisible){
reveals[i].classList.add("active");
}

}

}

window.addEventListener("scroll",reveal);



/* SIMPLE RSVP ALERT */

const form = document.querySelector("form");

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you for your RSVP!");

form.reset();

});
/* SCRATCH CARD EFFECT */

const canvas = document.getElementById("scratchCard");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "gold";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.globalCompositeOperation = "destination-out";

let isDrawing = false;

canvas.addEventListener("mousedown", () => isDrawing = true);
canvas.addEventListener("mouseup", () => isDrawing = false);

canvas.addEventListener("mousemove", scratch);

function scratch(e){

if(!isDrawing) return;

const rect = canvas.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

ctx.beginPath();
ctx.arc(x,y,20,0,Math.PI*2);
ctx.fill();

}