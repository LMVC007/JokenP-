const rockplayer = document.getElementById('rock');
const paperplayer = document.getElementById('paper');
const scissorsplayer = document.getElementById('scissors');

rockplayer.addEventListener('click', function(){
    teste(1)
});
paperplayer.addEventListener('click', function(){
    teste(2)
})
scissorsplayer.addEventListener('click', function(){
    teste(3)
});

function teste(value) {
    console.log(value);
    }
