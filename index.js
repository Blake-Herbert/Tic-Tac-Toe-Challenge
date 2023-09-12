const b1 = document.getElementById("b1");
b1.addEventListener("click", Log);
const b2 = document.getElementById("b2");
b2.addEventListener("click", Log);
const b3 = document.getElementById("b3");
b3.addEventListener("click", Log);
const b4 = document.getElementById("b4");
b4.addEventListener("click", Log);
const b5 = document.getElementById("b5");
b5.addEventListener("click", Log);
const b6 = document.getElementById("b6");
b6.addEventListener("click", Log);
const b7 = document.getElementById("b7");
b7.addEventListener("click", Log);
const b8 = document.getElementById("b8");
b8.addEventListener("click", Log);
const b9 = document.getElementById("b9");
b9.addEventListener("click", Log);

let currentPlayer = "x";

function Log()
{
if(document.getElementById("b1").innerText != "x" && document.getElementById("b1").innerText != "o")
{
document.getElementById("b1").innerText = currentPlayer;
} else console.log("invalid move");
}