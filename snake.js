import {getInputDirection, getDirection} from './keyevent.js'
/*定义蛇的移动速度*/
let SNAKE_SPEED = 10

let newSegment = 0
const SNAKE_GROW = 1
const snakeBody = [
    {x: 10, y: 10}

]


//食物和蛇重合
function equalsPostion(position1, postion2) {
    return position1.x === postion2.x && position1.y === postion2.y
}

function addNewSegment() {
    for (let i = 0; i < newSegment; i++) {
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }
    newSegment = 0
}

/*更新蛇的长度*/
function update() {
    addNewSegment()
    var inputDirection = getInputDirection()
    //蛇身移动
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]}
    }
    //蛇头移动
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y


}

function draw(gameBoard) {
    /*   for (var i = 0; i < snakeBody.length; i++) {
           //创建div表示蛇
           const snakeElement = document.createElement('div')
           //设置元素的样式
           snakeElement.style.gridRowStart = snakeBody[i].y
           snakeElement.style.gridColumnStart = snakeBody[i].x
           snakeElement.style.backgroundColor = 'hsl(200,100%,50%)'
           snakeElement.style.border = '.25vmin solid black'
           gameBoard.appendChild(snakeElement)
       }*/

    //使用ES6的forEach遍历数组
    snakeBody.forEach((segment, index) => {
        const snakeElement = document.createElement('div')
        //设置元素的样式
        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gridColumnStart = segment.y
        if (index == 0) {
            snakeElement.classList.add('snake-head')
            snakeElement.style.transform = "rotate(" + getDirection() + "deg  )"
        } else {
            snakeElement.classList.add('snake-body')
        }

        /* snakeElement.className = 'snake' */
        /*snakeElement.style.backgroundColor = 'hsl(200,100%,50%)'
        snakeElement.style.border = '.25vmin solid black'*/
        gameBoard.appendChild(snakeElement)
    })
}

//获取蛇头
function getSnakeHead() {
    return snakeBody[0]
}

function snakeGrow() {
    newSegment = SNAKE_GROW
}

//判断蛇头是否碰到食物
function onSnake(position, {ignoreHead = false} = {}) {
    //使用数组的some函数遍历蛇的body除head,如果只有head返回false
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index == 0) {
            return false
        }
        return equalsPostion(segment, position)
    })
    /*  if (equalsPostion(snakeBody[0], position)) {
          newSegment = SNAKE_GROW
          return true
      }*/
}

function snakeIntersection() {
    return onSnake(snakeBody[0], {ignoreHead: true})
}

function changeSkin() {
    let color = document.getElementById("color").value;
    let body = document.getElementsByClassName("snake-body")
    for (let i = 0; i < body.length; i++) {
        body[i].style.backgroundColor = color
    }
}

function changeSpeed() {
    let easy = document.getElementById("easy")
    if(easy.checked==true){
        SNAKE_SPEED = easy.value
    }
    let common = document.getElementById("common")
    if(common.checked==true){
        SNAKE_SPEED = common.value
    }
    let difficult = document.getElementById("difficult")
    if(difficult.checked==true){
        SNAKE_SPEED = difficult.value
    }

}

export {update, draw, onSnake, getSnakeHead, snakeIntersection, snakeGrow, changeSkin, changeSpeed,SNAKE_SPEED}