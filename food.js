import {rand} from './rand.js'
import {onSnake,snakeGrow} from './snake.js'
let foodPosition = rand()
let num =Math.ceil(Math.random()*5)
console.log(num)
var url = 'url(./img/'+num+'.png)';
var score = 0
function update(){
    //判断蛇头是否碰到食物
    if(onSnake(foodPosition)){
        //蛇生长
        snakeGrow()
        var position = rand()
        foodPosition = position
        url = 'url(./img/'+Math.ceil(Math.random()*5)+'.png)'
        score+=1
    }
}
function getScore(){
    var getScore = document.getElementById("score")
    getScore.innerText=score
}

function draw(gameBoard){
    var food = document.createElement('div')
    food.style.gridRowStart = foodPosition.x
    food.style.gridColumnStart = foodPosition.y
    food.classList.add('food')
    food.style.backgroundImage=url

    gameBoard.appendChild(food)
}

export {update,draw,getScore}