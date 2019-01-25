class Game {

  constructor() {
    this.gameCanvas = document.getElementById("gameCanvas")
    this.ctxGame = this.gameCanvas.getContext("2d")

    this.backgroundCanvas = document.getElementById("backgroundCanvas")
    this.ctxBackground = this.gameCanvas.getContext("2d")

    this.sprites = new Image()
    this.sprites.src = "./img/exampleSprites.png" // currenty four sprites in png file
    this.speed = 100

    this.playerX = 0 // starting position x
    this.playerY = 0 // starting position y

    this.keyCheck()
    this.runGame()
  }

  // loop to run game, lower this.speed to make 'ticks' faster
  runGame() {
    setTimeout(function onTick() {
      if (this.isEndGame()) return // currently game stops if true
      this.fillCanvas()
      this.drawSprite()
      // maybe put in a collision check function here with another object etc
      this.runGame()
    }.bind(this), this.speed)
  }

  // fill background example with one colour, can be image though
  fillCanvas() {
      this.ctxBackground.fillStyle = 'lightyellow'
      this.ctxBackground.strokestyle = 'black'
      this.ctxBackground.fillRect(0, 0, this.backgroundCanvas.width, this.backgroundCanvas.height)
      this.ctxBackground.strokeRect(0, 0, this.backgroundCanvas.width, this.backgroundCanvas.height)
    }

  // draw sprite example on gameCanvas, currently set to the first sprite in the image file (draws on top on backgroundCanvas)
  drawSprite() {
    let sheetX = 0 // x on the image sprite sheet, get image at this x coordinate (see below 24x24 sprites example)
    let sheetY = 0 // y on the image sprite sheet, get image at this y coordinate (see below 24x24 sprites example)
    this.ctxGame.drawImage(this.sprites, sheetX, sheetY, 24, 24, this.playerX, this.playerY, 24, 24)
  }

  // example check key pressed
  keyCheck() {
    document.addEventListener("keydown", this.direction.bind(this))
  }

  // what happens when a certain key is pressed
  direction(event) {
    const LEFT_KEY = 37
    const RIGHT_KEY = 39
    const UP_KEY = 38
    const DOWN_KEY = 40

    const keyPressed = event.keyCode

    if(keyPressed === LEFT_KEY) {
     // move sprite left code
     // eg. this.playerX += 10
    }

    if(keyPressed === UP_KEY) {
     // move sprite up code
    }

    if(keyPressed === RIGHT_KEY) {
     // move sprite right code
    }

    if(keyPressed === DOWN_KEY) {
     // move sprite left code
    }
  }

  // game end checks
  isEndGame() {
    // returns true or false
  }

}