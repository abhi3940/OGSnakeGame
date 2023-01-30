import { onSnake, ofSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'


let poop = getRandomPoopPosition()
const EXPANSION_RATE = 10




export function update() {
    if (onSnake(poop)) {
        expandSnake(EXPANSION_RATE)
        poop = getRandomPoopPosition()
    }
}

export function draw(gameBoard) {
    const poopElement = document.createElement('div')
    poopElement.style.gridRowStart = poop.y
    poopElement.style.gridColumnStart = poop.x
    poopElement.classList.add('poop')
    gameBoard.appendChild(poopElement)
}

function getRandomPoopPosition() {
    let newpoopPosition
    while (newpoopPosition == null || ofSnake(newpoopPosition)) {
        newpoopPosition = randomGridPosition()
    }
    return newpoopPosition
}