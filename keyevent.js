let inputDirection = {
    x: 0, y: 0
}
let lastInputDirection = {
    x: 0, y: 0
}
let direction = 0
//监听键盘事件
window.addEventListener('keydown', e => {
    console.log(e.key)
    switch (e.key) {
        case 'ArrowUp':
            inputDirection = {x: -1, y: 0}
            direction = -90
            break
        case 'ArrowDown':
            inputDirection = {x: 1, y: 0}
            direction = 90
            break
        case 'ArrowLeft':
            inputDirection = {x: 0, y: -1}
            direction = -180
            break
        case 'ArrowRight':
            inputDirection = {x: 0, y: 1}
            direction = 0
            break
    }
})


//蛇转向
function getInputDirection(){
    return inputDirection
}
//蛇头方向
function  getDirection(){
    return direction
}

export {getInputDirection,getDirection}