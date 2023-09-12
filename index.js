const b1 = document.getElementById("b1");
b1.addEventListener("click", Log);
const b2 = document.getElementById("b2");
b2.addEventListener("click", Log);

function Log()
{
console.log("this button works");
document.getElementById("b1").innerText = "X"
}   