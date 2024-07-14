let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = ()=>{
    turnO = true;
    enableleboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true; 
        }
        box.disabled = true;
        checkWinners();
    });
});

const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableleboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (Winner)=>{
    msg.innerText = `Congratulation , The Winner is ${Winner} !`;
    msgContainer.classList.remove("hide");
    disableboxes();
}

const checkWinners= ()=>{
    for(let partten of winPatterns){
        let pos1vla = boxes[partten[0]].innerText;
        let pos2vla = boxes[partten[1]].innerText;
        let pos3vla = boxes[partten[2]].innerText;
        if(pos1vla != "" && pos2vla != "" && pos3vla !=""){
            if(pos1vla == pos2vla && pos2vla == pos3vla){
                showWinner(pos1vla);
            }
        }
    }
}

newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);