let userscore=0;
let computerscore=0;
const userscore_span=document.getElementById("user-score");
const computerscore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector("score-board");
const result_div=document.querySelector("result")
const result_p=document.querySelector(".result > p")
const rock=document.getElementById("r");
const paper=document.getElementById("p");
const scissor=document.getElementById("s");

function getcompchoice(){
    const choices=['r','p','s'];
    const rand=Math.floor(Math.random()*3)
    return choices[rand];
}
function convert(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    return "Scissor"
}
function win(userchoice,compchoice){
    userscore++;
    userscore_span.innerHTML=userscore;
    computerscore_span.innerHTML=computerscore;
    const smalluserword="user".fontsize(2).sub();
    const smallcompword="comp".fontsize(2).sub();
    result_p.innerHTML=`${convert(userchoice)} ${smalluserword}beats ${convert(compchoice)} ${smallcompword} You win!`
}
function lost(userchoice,compchoice){
    computerscore++;
    userscore_span.innerHTML=userscore;
    computerscore_span.innerHTML=computerscore;
    const smalluserword="user".fontsize(2).sub();
    const smallcompword="comp".fontsize(2).sub();
    result_p.innerHTML=`${convert(userchoice)} ${smalluserword}beats ${convert(compchoice)} ${smallcompword} You lost !`
}
function draw(userchoice,compchoice){
    const smalluserword="user".fontsize(2).sub();
    const smallcompword="comp".fontsize(2).sub();
    result_p.innerHTML=`${convert(userchoice)} ${smalluserword} equals ${convert(compchoice)} ${smallcompword} Draw !`
}
function Game(userchoice){
    const compchoice=getcompchoice();
    switch(userchoice+compchoice){
        case "rs":
        case "pr":
        case "sp":
            win(userchoice,compchoice);
            break; 
        case "rp":
        case "ps":
        case "sr":
            lost(userchoice,compchoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userchoice,compchoice);
            break;
    }
}
function main(){
    rock.addEventListener('click',function(){
        Game('r');
    })
    paper.addEventListener('click',function(){
        Game('p');
    })
    scissor.addEventListener('click',function(){
        Game('s');
    })
}
main();