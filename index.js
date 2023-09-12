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

let currentPlayer = "x";

////////////////////////////////

function ClaimSpace(Event, SelectedButton) {
    console.log(Event.target.id);
    if (Event.target.id.innerText != "x" && Event.target.id.innerText != "o") {
        Event.target.innerText = currentPlayer;
        CheckWinCondition;

        if (currentPlayer == "x") {
            currentPlayer = "o";
        } else currentPlayer = "x"

    } else console.log("invalid move");
}


function CheckWinCondition() {
    if (document.getElementById("b1").innerText = document.getElementById("b2").innerText
        // currentPlayer == document.getElementById("b1").innerText == document.getElementById("b2").innerText == document.getElementById("b3").innerText ||
        // currentPlayer == document.getElementById("b1").innerText == document.getElementById("b5").innerText == document.getElementById("b9").innerText ||
        // currentPlayer == document.getElementById("b1").innerText == document.getElementById("b4").innerText == document.getElementById("b7").innerText ||
        // currentPlayer == document.getElementById("b2").innerText == document.getElementById("b5").innerText == document.getElementById("b8").innerText ||
        // currentPlayer == document.getElementById("b3").innerText == document.getElementById("b5").innerText == document.getElementById("b7").innerText ||
        // currentPlayer == document.getElementById("b3").innerText == document.getElementById("b6").innerText == document.getElementById("b9").innerText ||
        // currentPlayer == document.getElementById("b4").innerText == document.getElementById("b5").innerText == document.getElementById("b6").innerText ||
        // currentPlayer == document.getElementById("b7").innerText == document.getElementById("b8").innerText == document.getElementById("b9").innerText
    ) {
        console.log("win");
    }
}