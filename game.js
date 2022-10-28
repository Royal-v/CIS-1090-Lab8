//Remember these? We get references to the elements.
let game = document.querySelector("#game");
let chicken = document.querySelector("#chicken");
let score = document.querySelector("#score");
let time = document.querySelector("#time");

let scores = 0;
let timer = 120;
//This function returns a random integer [0...max)
function random(max){
    return Math.floor(Math.random() * max);
}

function checkifyoulose(){
    if(timer > 0){
        timer--;
        time.innerText = timer;
    }
    else{alert("you have lost 😢")
scores = 0
timer = 120}
}
function checkifyouwin(){
    if(scores >= 20){
        scores = 0
        timer = 120
        alert("you win!!!!!😊")
    }
    else{}
}
function addscorepig() {

    scores++;
    scores++;
    scores++;
    score.innerText = scores;
    randomizepig();

}
function addscorecow() {

    scores++;
  
    score.innerText = scores;
    randomizecow();
    
  }

function addchicken(){
    scores++;
    scores++;
    score.innerText = scores;
    randomizeChicken();
   
}
//This function sets the position of the chicken to a random
//place inside the game div
function randomizeChicken(){
    chicken.style.top = random(game.offsetHeight - chicken.offsetHeight) + "px";
    chicken.style.left = random(game.offsetWidth - chicken.offsetWidth) + "px";
}
function randomizecow(){
    cow.style.top = random(game.offsetHeight - cow.offsetHeight) + "px";
    cow.style.left = random(game.offsetWidth - cow.offsetWidth) + "px";
}
function randomizepig(){
    pig.style.top = random(game.offsetHeight - cow.offsetHeight) + "px";
    pig.style.left = random(game.offsetWidth - cow.offsetWidth) + "px";
}
//Call this function when the player clicks the chicken


//We've seen this before. Call the "youWin" function
//whenever the user clicks the chicken
chicken.addEventListener('click', addchicken);
cow.addEventListener('click', addscorecow);
pig.addEventListener('click', addscorepig)
//A new event lisener! "mouseover" happens when the MOUSE goes
//OVER the element.
//
//Also: Peep the anonymous function we are passing in.
chicken.addEventListener('mouseover', function(){
    //When you get the mouse over the chicken there
    //is an 80% chance the chicken moves before you
    //can click it
    if ( random(100) < 80 ){
        randomizeChicken();
    }
});
cow.addEventListener('mouseover', function(){
    //When you get the mouse over the chicken there
    //is an 80% chance the chicken moves before you
    //can click it
    if ( random(100) < 60 ){
        randomizecow();
    }
});
pig.addEventListener('mouseover', function(){
    if ( random(100) < 90){
        randomizepig();
    }
    
});
//Another function the browser gives us!
//Every 1000 miliseconds (1 second) move that bird
window.setInterval(randomizeChicken, 1000);
window.setInterval(randomizecow, 1200);
window.setInterval(randomizepig, 600);
window.setInterval(checkifyouwin, 100);
window.setInterval(checkifyoulose,1000);