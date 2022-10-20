let canvas;
let ctx;
canvas = document.createElement("canvas")
ctx = canvas.getContext("2d")
canvas.width=400;
canvas.height=700;
document.body.appendChild(canvas);

let backgroundImage,spaceshipImage,bulletImage,enemyImage,gameoverImage;
///우주선 좌표////
let spaceshipX = canvas.width/2-32
let spaceshipY = canvas.height-64

let bulletList = []
function Bullet(){
    this.x= 0;
    this.y= 0;
    this.init=function(){
        this.x = spaceshipX + 20;
        this.y = spaceshipY;

        bulletList.push(this);
    };
    this.update = function(){
        this.y-=7;
    };
}

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

        if(event.keyCode == 32){
            createBullet()//총알 생성
        }
    });
}
function createBullet(){
    console.log("총알 생성");
    let b = new Bullet();
    b.init();
    console.log("새로운 총알 리스트",bulletList);

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
        spaceshipX = canvas.width - 64;
    }

    for(let i =0;i<bulletList.length;i++){
        bulletList[i].update()
    }
    
}

function render() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);

    for(let i=0;i<bulletList.length;i++) {
        ctx.drawImage(bulletImage,bulletList[i].x,bulletList[i].y)
    }
}
function main() {
    render();
    update();
    requestAnimationFrame(main);
}

loadImage();
main();
setupKeyboardListener();