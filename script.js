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

buttons.forEach((ele,index)=>{
   let removecolor; 
   
    buttons[index].addEventListener("click",()=>{
          removecolor=buttons[index]
          selectedValue=  buttons[index].innerHTML
          buttons.forEach((ele)=>ele.classList.remove("active"))
         ele.classList.add("active")
          
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
    scores.innerHTML=score;
    selectedValue=null;
});