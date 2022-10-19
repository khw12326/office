let canvas;
let ctx;
canvas = document.createElement("canvas")
ctx = canvas.getContext("2d")
canvas.width=400;
canvas.height=700;
document.body.appendChild(canvas);

let backgroundImage,spaceshipImage,bulletImage,enemyImage,gameoverImage;
///좌표////
let spaceshipX = canvas.width/2-32
let spaceshipY = canvas.height-64

function loadImage() {
    backgroundImage = new Image();
    backgroundImage.src="img/space.img";
    
    spaceshipImage = new Image();
    spaceshipImage.src="img/attack.img.png";

    bulletImage = new Image();
    bulletImage.src="img/bullet.png";

    gameoverImage = new Image();
    gameoverImage.src="img/game-over.webp";

    enemyImage = new Image();
    enemyImage.src="img/enemy.jfif";
}
let keysDown={};
function setupKeyboardListener() {
    document.addEventListener("keydown",function(event){
        keysDown[event.keyCode] = true;
        console.log("키다운객체에 들거간 값은?",keysDown);
    });
    document.addEventListener("keyup",function(event){
        delete keysDown[event.keyCode];
        console.log("버튼 클릭후",keysDown);
    });
}
function update(){
    if(39 in keysDown){
        spaceshipX += 5;
    }
    if(37 in keysDown){
        spaceshipX -= 5;
    }
    if(spaceshipX <=0){
        spaceshipX=0
    }
    if(spaceshipX >= canvas.width - 64){
        spaceshipX = canvas.width - 64
    }
    
}

function render() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
}
function main() {
    render();
    update();
    requestAnimationFrame(main);
}

loadImage();
main();
setupKeyboardListener();