let timer = 61;
let score =0;
let hitrn =-1;


function increseScore(x=false){
    score= x?0:score+10;

    // score +=10;
    document.querySelector("#scoreval").textContent=score;
}

function getnewHit(){
    let array = [0,1,2,3,4,5,6,7,8,9];
    array.shift();
  
     hitrn =array[Math.floor(Math.random()*array.length)]
    
    
    document.querySelector("#hitval").textContent = hitrn;
}


function makeBubble(){

let clutter = "";

for(let i=1;i<=90;i++){
    let rn = Math.floor(Math.random()*10)
  clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

let timerInt;
function runTimer(){

    timerInt = setInterval(function(){
        
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        
        
        }
        else{

            clearInterval(timerInt);
         
            document.querySelector("#pbtm").innerHTML = `<h1> Time Up <br>     Score  : ${score} </h1>`;
        }
    
    },1000);
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    let clickedNumber = Number(dets.target.textContent);
    
    if(clickedNumber === hitrn ){
        
        increseScore();
        makeBubble();
        getnewHit();
    }
})


function playAg(){
    clearInterval(timerInt);
    timer = 61;
    runTimer();
    score = 0;
    increseScore(true);
    makeBubble();
    getnewHit();


  

    
}


runTimer();
makeBubble();
getnewHit();
