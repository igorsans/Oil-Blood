
function rectangularCollision({
    rectangle1,
    rectangle2
}) {
    return (
        rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
        rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    )
}

function determineWinner({player, enemy, timerId}) {
    clearTimeout(timerId)
    document.querySelector('#displayText').style.display = 'flex'
    if (player.health === enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Empate'
    } else if (player.health > enemy.health && player.health == 100){
        document.querySelector('#displayText').innerHTML = 'Player 1 Wins <br> PERFECT'
    } else if (player.health < enemy.health && enemy.health == 100){
        document.querySelector('#displayText').innerHTML = 'Player 2 Wins <br> PERFECT'
    } else if (player.health > enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Player 1 Wins'
    } else if (player.health < enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
    }
}

// timer
let timer = 60
let timerId
function decreaseTimer() {
    if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000)
        timer--
        document.querySelector('#timer').innerHTML = timer
    }
    if (timer === 0) {
        
        player.dead = true
        enemy.dead = true
        determineWinner({player, enemy, timerId})
    }

}