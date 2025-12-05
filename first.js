let boxs = document.querySelectorAll(".box");
let newgame = document.querySelector("#newgame");
let msgcantainer = document.querySelector(".msgcantainer");
let resetnutton = document.querySelector("#rest-butoon");
let msg = document.querySelector("#msg");
let turn0 = true;
const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
            box.classList.add("color1");
            box.classList.remove("color2");
        }
        else {
            box.innerText = "X";
            turn0 = true;

            box.classList.add("color2");
            box.classList.remove("color1");
        }
        checkwinner();
    });
});

const anebalebutone = () => {
    for (let box of boxs) {
        box.disabled = false;
        box.innerText = "";
    }
}
const disablebutone = () => {
    for (let box of boxs) {
        box.disabled = true;
    }
}

const showwinner = (winner) => {
    msg.innerText = `congratulations !! winner is ${winner}`;
    msgcantainer.classList.remove("hide");
    disablebutone();
}
const checkwinner = () => {
    for (patten of winpattern) {
        let pos1 = boxs[patten[0]].innerText;
        let pos2 = boxs[patten[1]].innerText;
        let pos3 = boxs[patten[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showwinner(pos1);
            }
            else {
                mathchdrow();
                s
            }
        }

    }
}

const resetgame = () => {
    turn0 = true;
    anebalebutone();
    msgcantainer.classList.add("hide");
}
const mathchdrow = () => {
    msg.innerText = "math is drow";
}

newgame.addEventListener("click", resetgame);
resetnutton.addEventListener("click", resetgame);