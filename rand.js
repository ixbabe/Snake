const GRID_SIZE = 50

function rand(){

    return {
        x:Math.floor(Math.random()*GRID_SIZE)+1,
        y:Math.floor(Math.random()*GRID_SIZE)+1
    };
}

//判断蛇是否超出GRID_SIZE
function outsideGrid(position){
    return position.x<1||position.y<1||position.x>GRID_SIZE||position.y>GRID_SIZE
}

export {rand,outsideGrid}