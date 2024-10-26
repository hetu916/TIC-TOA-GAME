let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset-btn');
let nweGameBtn = document.querySelector('.new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let turn0 = true;
const winPaterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetGame = () => {
    turn0 = true;
    enabledBoxes();
    msgContainer.classList.add('hide');
}


boxes.forEach((box) => {

    box.addEventListener('click', () => {

        box.innerText = "sandy";
        if (turn0) {//PLAYER O
            box.innerText = 'O';
            turn0 = false;
        } else { //PLAYER X 
            box.innerText = 'X';
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
        box.innerText = "";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congractulation ,winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disabledBoxes();

};
const checkWinner = () => {

    for (let pattern of winPaterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;


        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log('winner', pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};
nweGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);