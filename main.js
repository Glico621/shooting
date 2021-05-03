//変数定義
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//銃書式
var gunWidth = 30;
var gunHeight = 50;
var gunX = (canvas.width-gunWidth)/2;
var newY = 0;
var counter = 0;
//敵位置
var enemysY =[];
var ex =200;
//キー入力
var upPressed = false;



//キーマウス処理
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("kyeup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

//マウス移動
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        gunX = relativeX - gunWidth/2;
    }
}

//キー入力
function keyDownHandler(e) {
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
}

//衝突処理
function collisionDetection() {

}

//各々描画
//銃
function drawGun() {
    ctx.beginPath();
    ctx.rect(gunX, canvas.height - gunHeight, gunWidth, gunHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

//弾
function drawBullet() {
    ctx.beginPath();
    var now = counter;
    var newCounter = counter - now;
    ctx.arc(gunX+15, canvas.height-50-newCounter, 10, 0, Math.PI*2, false);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

//敵
function drawEnemy() {
    ctx.font = "16px Ariel",
    ctx.fillStyle = "#0095DD";
    ctx.fillText("(*´ω｀)" , canvas.width/2, ex);
}



//メイン関数
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawEnemy();
    //drawBullet();
    drawGun();

    //↑を押すと弾発射
    if(upPressed) {
        drawBullet();
    }

    ex++;
    newY++;
    counter++;

    requestAnimationFrame(draw);
}

draw();