const rockplayer = document.getElementById('rock');
const paperplayer = document.getElementById('paper');
const scissorsplayer = document.getElementById('scissors');
let yourchoiceplayer = 0;
let generatechoice = 0;
let yourpoint = document.querySelector('.your-point');
let machinepoint = document.querySelector('.machine-point');


rockplayer.addEventListener('click', function () {
    yourChoice(1)
    generateNumber()
    compareChoices()
});
paperplayer.addEventListener('click', function () {
    yourChoice(2)
    generateNumber()
    compareChoices()
})
scissorsplayer.addEventListener('click', function () {
    yourChoice(3)
    generateNumber()
    compareChoices()
});

function yourChoice(value) {
    const result = value
    yourchoiceplayer = result
    console.log("minha escolha", yourchoiceplayer)

}


function generateNumber() {
    const min = 1;
    const max = 3;

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    generatechoice = result
    console.log("generate", generatechoice)

}   

function yourPoints(){

}
function machinePoints(){

}

function compareChoices() { 

    if (yourchoiceplayer === 1 && generatechoice === 1) {
        document.getElementById("result-round").innerHTML = "Seu oponente jogou pedra também, empate.";
    } else if (yourchoiceplayer === 2 && generatechoice ===2) {
        document.getElementById("result-round").innerHTML = "Seu oponente jogou papel também, empate.";
    } else if (yourchoiceplayer === 3 && generatechoice === 3) {
        document.getElementById("result-round").innerHTML ="Seu oponente jogou tesoura também, empate.";
    } else if(yourchoiceplayer === 1 && generatechoice === 2) {
        document.getElementById("result-round").innerHTML = "O oponente escolheu papel, você perdeu.";
    } else if(yourchoiceplayer === 1 && generatechoice === 3) {
       document.getElementById("result-round").innerHTML = "O oponente escolheu tesoura, você ganhou.";
    } else if(yourchoiceplayer === 2 && generatechoice === 1) {
       document.getElementById("result-round").innerHTML = "O oponente escolheu pedra, você ganhou.";
    } else if(yourchoiceplayer === 2 && generatechoice === 3) {
        document.getElementById("result-round").innerHTML ="O oponente escolheu tesoura, você perdeu.";
    } else if(yourchoiceplayer === 3 && generatechoice === 1) {
        document.getElementById("result-round").innerHTML = "O oponente escolheu pedra, você perdeu.";
    } else if(yourchoiceplayer === 3 && generatechoice === 2) {
        document.getElementById("result-round").innerHTML = "O oponente escolheu papel, você ganhou.";
    }
}



