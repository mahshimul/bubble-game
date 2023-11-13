var timer = 10;
var score = 0;
var bit = 0;










function scoreUpdate(){
score += 10;
document.querySelector('#scr').textContent = score
}




function hitNum(){
    bit = Math.floor(Math.random()*10)
    document.querySelector('#hit').textContent = bit;
}






function makeBubble(){
    var clutter = ''


for(var i = 1; i<=95; i++){
    var rn = Math.floor(Math.random()*10)
     clutter += `<div class="bubble">${rn}</div>`; 
     document.querySelector('#pbtom').innerHTML = clutter
}
}

function runTimer(){
var time = setInterval(function(){
    if(timer > 0){
timer--;
document.querySelector('#timerval').textContent = timer; }
else{
clearInterval(time);
document.querySelector('#pbtom').innerHTML = `<h1 id="re">Game Over! <br> Your Score is :${score}</h><br> <button id="btn">Play Again </button>`

}
}, 1000);



}

function e (){
    document.querySelector('#btn').addEventListener('click', function(){
        document.body.innerHTML = 'hello'
    } )
}






document.querySelector('#pbtom').addEventListener('click',function(t){
    var play = Number(t.target.textContent)

if(play === bit){
scoreUpdate();
hitNum();
makeBubble();

}
});




hitNum();
makeBubble();
runTimer();
newGame();
