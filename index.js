const b1 = document.getElementById("b1");
b1.addEventListener("click", TakeMove);
const b2 = document.getElementById("b2");
b2.addEventListener("click", TakeMove);
const b3 = document.getElementById("b3");
b3.addEventListener("click", TakeMove);
const b4 = document.getElementById("b4");
b4.addEventListener("click", TakeMove);
const b5 = document.getElementById("b5");
b5.addEventListener("click", TakeMove);
const b6 = document.getElementById("b6");
b6.addEventListener("click", TakeMove);
const b7 = document.getElementById("b7");
b7.addEventListener("click", TakeMove);
const b8 = document.getElementById("b8");
b8.addEventListener("click", TakeMove);
const b9 = document.getElementById("b9");
b9.addEventListener("click", TakeMove);

let currentPlayer = "x";

function TakeMove()
{ if(document.getElementById("b1").innerText != "x" && document.getElementById("b1").innerText != "o") 
{
    document.getElementById("b1").innerText = currentPlayer;
    CheckWinCondition();
    
    if(currentPlayer == "x") 
    { currentPlayer = "o";
    } else currentPlayer ="x"

} else console.log("invalid move");
}


function CheckWinCondition()
{
    if( currentPlayer == b1.innerText == b2.innerText == b3.innerText ||
        currentPlayer == b1.innerText == b5.innerText == b9.innerText ||
        currentPlayer == b1.innerText == b4.innerText == b7.innerText ||
        currentPlayer == b2.innerText == b5.innerText == b8.innerText ||
        currentPlayer == b3.innerText == b5.innerText == b7.innerText ||
        currentPlayer == b3.innerText == b6.innerText == b9.innerText ||
        currentPlayer == b4.innerText == b5.innerText == b6.innerText ||
        currentPlayer == b7.innerText == b8.innerText == b9.innerText)
        alert(currentPlayer + " wins!");
}