let boxes = document.querySelectorAll(".box");  /* Access the boxes by using class */
let resetBtn = document.querySelector("#reset"); /* Access the resetbtn by using id */
let newGameBtn = document.querySelector("#new-btn"); /* Access the new game button */
let msgContainer = document.querySelector(".msg-container"); /* Access the msg container */
let msg = document.querySelector("#msg");
let turnO = true;

/* 2D Array */
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

/* reset function*/
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

/* for each loop with arrow function */
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;         /* As soon as O print false value get stored in turnO */
        }
        else {
            box.innerText = "X";
            turnO = true;          /* then again true value get stored and loop continue */
        }
        box.disabled = true;      /* button get disabled after one click */

        checkWinner();
    });
});

/* disable box function*/
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

/* enable boxes*/
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

/*winner msg function*/
const showWinner = (winner) => {
    msg.innerText = `Congratulations!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();   /* disable box function get called*/
};

/* we create winning function */
const checkWinner = () => {
    for (let pattern of winPatterns)     /* for of loop */ {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "")  /* position value should not be empty */ {
            if (pos1val === pos2val && pos2val === pos3val)  /* pos 1,2,3 equal then print winner */ {
                console.log("Winner", pos1val);
                showWinner(pos1val);       /*winner text msg fuction called*/
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
/* reset function get called*/
