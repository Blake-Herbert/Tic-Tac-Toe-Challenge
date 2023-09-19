const b1 = document.getElementById("b1");
b1.addEventListener("click", ClaimSpace);
const b2 = document.getElementById("b2");
b2.addEventListener("click", ClaimSpace);
const b3 = document.getElementById("b3");
b3.addEventListener("click", ClaimSpace);
const b4 = document.getElementById("b4");
b4.addEventListener("click", ClaimSpace);
const b5 = document.getElementById("b5");
b5.addEventListener("click", ClaimSpace);
const b6 = document.getElementById("b6");
b6.addEventListener("click", ClaimSpace);
const b7 = document.getElementById("b7");
b7.addEventListener("click", ClaimSpace);
const b8 = document.getElementById("b8");
b8.addEventListener("click", ClaimSpace);
const b9 = document.getElementById("b9");
b9.addEventListener("click", ClaimSpace);
const ClearBoardButton = document.getElementById("ClearBoardButton");
ClearBoardButton.addEventListener("click",ClearBoard);

let currentPlayer = "x";


function ClaimSpace(Event, SelectedButton) {
    //console.log(Event.target.id);
    if (Event.target.innerText != "x" && Event.target.innerText != "o") {
        Event.target.innerText = currentPlayer;
        CheckWinCondition(currentPlayer);

        if (currentPlayer == "x") {
            currentPlayer = "o";
        } else currentPlayer = "x"

    } else console.log("invalid move");
}


function CheckWinCondition() 
{
    if( b1.innerText != "" && b1.innerText == b2.innerText && b2.innerText == b3.innerText ||
        b1.innerText != "" && b1.innerText == b5.innerText && b5.innerText == b9.innerText ||
        b1.innerText != "" && b1.innerText == b4.innerText && b4.innerText == b7.innerText ||
        b2.innerText != "" && b2.innerText == b5.innerText && b5.innerText == b8.innerText ||
        b3.innerText != "" && b3.innerText == b5.innerText && b5.innerText == b7.innerText ||
        b3.innerText != "" && b3.innerText == b6.innerText && b6.innerText == b9.innerText ||
        b4.innerText != "" && b4.innerText == b5.innerText && b5.innerText == b6.innerText ||
        b7.innerText != "" && b7.innerText == b8.innerText && b8.innerText == b9.innerText )
    {   alert("Player " + currentPlayer.toUpperCase() + " wins!");
        ClearBoard(); 
    }
    else if ( 
        b1.innerText != "" &&
        b2.innerText != "" &&
        b3.innerText != "" &&
        b4.innerText != "" &&
        b5.innerText != "" &&
        b6.innerText != "" &&
        b7.innerText != "" &&
        b8.innerText != "" &&
        b9.innerText != "")
    {   alert("Draw");
        ClearBoard();   
    }
}


function ClearBoard() 
{
    b1.innerText = "";
    b2.innerText = "";
    b3.innerText = "";
    b4.innerText = "";
    b5.innerText = "";
    b6.innerText = "";
    b7.innerText = "";
    b8.innerText = "";
    b9.innerText = "";
}