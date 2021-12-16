import {SNAKE_SPEED,update as updateSnake,draw as drawSnake,getSnakeHead,snakeIntersection,changeSkin,changeSpeed} from "./snake.js";
import {update as updateFood, draw as drawFood,getScore} from './food.js'
import {outsideGrid} from './rand.js'

console.log(SNAKE_SPEED)

let lastRenderTime = 0

//游戏是否结束
let gameOver = false

//获取游戏的界面元素
var gameBoard = document.getElementById("game-board")

function  main (currentTime){
    if(gameOver){
       let cm = window.confirm('贪吃蛇都不会玩？')
        //如果按下确认则返回为true,按下取消为false
        if(cm){
            window.location.reload()
        }else{

        }

        return
    }
    window.requestAnimationFrame(main)
    let secondsTime = (currentTime-lastRenderTime)/1000
    if (secondsTime<1/SNAKE_SPEED){
        return
    }
    lastRenderTime = currentTime
   update()
    //绘制游戏内容:蛇和食物
    draw()
    checkGameOver()
    getScore()
    changeSkin()
    changeSpeed()
}
window.requestAnimationFrame(main)

function update(){
    updateFood()
    updateSnake()
}

function  draw(){
    gameBoard.innerHTML=''
    //画蛇
    drawSnake(gameBoard)
    //画食物
    drawFood(gameBoard)
}

//检查蛇是否超出界面
function checkGameOver(){
    gameOver = outsideGrid(getSnakeHead())||snakeIntersection()
}