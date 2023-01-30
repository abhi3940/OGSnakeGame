import { update as updateSnake, draw as drawsnake, SNAKE_SPEED,
getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
//import { update as updatePoop, draw as drawPoop } from './poop.js'
import { outsideGrid } from './grid.js'


let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    if (gameOver) {
       if ( confirm('You lost. Press ok to restart')) {
           window.location = '/'
       }
       return
    } 

    
    
    
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return


  
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
  cheakDeath()
  //updatePoop()
}

function draw() {
  gameBoard.innerHTML = ''
  drawsnake(gameBoard)
  drawFood(gameBoard)
  //drawPoop(gameBoard)
}

function cheakDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}