const buttonRock = document.getElementById("btnrock");
const buttonScissors = document.getElementById("btnscissors");
const buttonPaper = document.getElementById("btnpaper");
const buttonStart = document.getElementById("start_button");
const myChoice = document.getElementById("my_choice");



var userName = prompt("이름을 입력해 주세요");
var computerChose = ["Rock", "Scissors", "Paper"];
var countNumber = 0

document.getElementById('hihi').innerHTML = "안녕하세요, " + userName + "님, 가위바위보 중에서 하나 골라주세요!";

buttonRock.addEventListener('click', ()=>{
    myChoice.innerHTML = "Rock"
});

buttonScissors.addEventListener('click', ()=>{
    myChoice.innerHTML = "Scissors"
});

buttonPaper.addEventListener('click', ()=>{
    myChoice.innerHTML = "Paper"
});

buttonStart.addEventListener('click', ()=>{
    document.getElementById('computer_chose').innerHTML = 
        computerChose[Math.floor(Math.random() * computerChose.length)]


        if( myChoice.innerHTML == "Rock"){
            if(document.getElementById('computer_chose').innerHTML == "Rock"){
                document.getElementById('resulttext').innerHTML = "This game is a DRAW!<br> 무승부!";
            }
            else if(document.getElementById('computer_chose').innerHTML == "Scissors"){
                    document.getElementById('resulttext').innerHTML = "YOU WIN!<br> 이겼다!";
                }
            else {document.getElementById('resulttext').innerHTML = "YOU LOSE!<br> 졌다!"
            }
        }

        if( myChoice.innerHTML == "Scissors"){
            if(document.getElementById('computer_chose').innerHTML == "Scissors"){
                document.getElementById('resulttext').innerHTML = "This game is a DRAW!<br> 무승부!";
            }
            else if(document.getElementById('computer_chose').innerHTML == "Paper"){
                    document.getElementById('resulttext').innerHTML = "YOU WIN!<br> 이겼다!";
                }
            else {document.getElementById('resulttext').innerHTML = "YOU LOSE!<br> 졌다!"
            }
        }

        if( myChoice.innerHTML == "Paper"){
            if(document.getElementById('computer_chose').innerHTML == "Paper"){
                document.getElementById('resulttext').innerHTML = "This game is a DRAW!<br> 무승부!";
            }
            else if(document.getElementById('computer_chose').innerHTML == "Rock"){
                    document.getElementById('resulttext').innerHTML = "YOU WIN!<br> 이겼다!";
                }
            else {document.getElementById('resulttext').innerHTML = "YOU LOSE!<br> 졌다!"
            }
        }

        if( document.getElementById('resulttext').innerHTML == "YOU WIN!<br> 이겼다!"){
            document.getElementById('count_number').innerHTML = countNumber +=1;}

        if( document.getElementById('resulttext').innerHTML == "YOU LOSE!<br> 졌다!"){
            document.getElementById('count_number').innerHTML = countNumber -=1;}


});
