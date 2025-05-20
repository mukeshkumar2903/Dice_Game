const scores = document.querySelector(".scores");
const result = document.querySelector(".result");
const img = document.querySelector("#diceImage");
const buttons = document.querySelectorAll(".buttons button");
const imgArray = [
    "images/dice_1.png",
    "images/dice_2.png",
    "images/dice_3.png",
    "images/dice_4.png",
    "images/dice_5.png",
    "images/dice_6.png" 
];
let score = 0;
let selectedValue = null;

let lastBtn=null;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(lastBtn){
            lastBtn.classList.remove("active");

        }
        button.classList.add("active");
        selectedValue = parseInt(button.getAttribute("btn"));
        lastBtn=button;
    });
});


img.addEventListener("click", () => {
    if (selectedValue === null) {
        alert("Please select a Number:");
        return;
    }
    const randomValue = Math.floor(Math.random() * imgArray.length)+1;
    img.src = imgArray[randomValue - 1];

    if (randomValue === selectedValue) {
        score += 15;
        console.log(score);
        
    } else {
        score -= 5;
        console.log(score);
        
    }
    scores.textContent=score;
    selectedValue=null;
});