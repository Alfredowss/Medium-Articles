class Game{
    constructor(){
        this.player = {
            health: 50
        }

    }

    start(){
        setInterval(this.increaseHealth, 500)
    }

    increaseHealth(){
        this.player.health+=10
    }
}


let game = new Game()
game.start()
