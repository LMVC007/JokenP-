const rockplayer = document.getElementById('rock');
const paperplayer = document.getElementById('paper');
const scissorsplayer = document.getElementById('scissors');
let yourchoiceplayer = 0;


rockplayer.addEventListener('click', function(){
    yourChoice(1)
});
paperplayer.addEventListener('click', function(){
    yourChoice(2)
})
scissorsplayer.addEventListener('click', function(){
    yourChoice(3)
});

function yourChoice(value) {
    const result = value + yourchoiceplayer
    console.log(result)
    return result
    }
