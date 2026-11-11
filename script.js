const rockplayer = document.getElementById('rock');
const paperplayer = document.getElementById('paper');
const scissorsplayer = document.getElementById('scissors');
let yourchoiceplayer = 0;
let generatechoice = 0;


rockplayer.addEventListener('click', function(){
    yourChoice(1)
    generateNumber()
    compareChoices()
});
paperplayer.addEventListener('click', function(){
    yourChoice(2)
    generateNumber()
    compareChoices()
})
scissorsplayer.addEventListener('click', function(){
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

function compareChoices() {
   // if (yourchoiceplayer == generateNumber()) {
    //    alert("Seu oponente jogou pedra também, empate.")
  //  } else if (yourchoiceplayer == generateNumber()) {
   //     alert("Seu oponente jogou papel também, empate.")
   // } else if(yourchoiceplayer == generateNumber()) {
   //     alert("Seu oponente jogou tesoura também, empate.")
   // } else if(yourChoice(1) =! generateNumber()) {
   //     alert("Seu oponente jogou papel, você perdeu.")
   // } else if(yourChoice(1) =! generateNumber()) {
   //     alert("Seu oponente jogou tesoura, você venceu!")
   // } else if(yourChoice(2) =! generateNumber()) {
   //     alert("Seu oponente jogou pedra, você venceu!")
   // } else if(yourChoice(2) =! generateNumber()) {
   //     alert("Seu oponente jogou tesoura, você perdeu.")
   // } else if(yourChoice(3) =! generateNumber()) {
   //     alert("Seu oponente jogou pedra, você perdeu.")
   // } else if(yourChoice(3) =! generateNumber()) {
   //     alert("Seu oponente jogou papel, você venceu!")
//    }
}