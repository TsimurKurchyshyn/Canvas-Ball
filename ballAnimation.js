/*
Создаем
 */
let ballAnimation = document.getElementById("canvas");
let ctx = ballAnimation.getContext("2d");
/*
создаем функцию Circle которая создает круг.
 */
let circle = function (x,y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
}
/*
var drawBee = function (x,y) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "Black";
    ctx.fillStyle = "Gold";
    circle(x,y, 8, true);
    circle(x,y, 8, false);
    circle(x - 5, y - 11, 5, false);
    circle(x + 5, y - 11, 5, false);
    circle(x - 2, y - 1, 2, false);
    circle(x + 2, y - 1, 2, false);
};

var update = function (coordinate) {
    var offset = Math.random() * 4 -2;
    coordinate += offset;
    if (coordinate > 200) {
        coordinate = 200;
    }
    if (coordinate < 0) {
        coordinate = 0;
    }
    return coordinate;
};
var x = 100;
var y = 100;
setInterval(function() {
    ctx.clearRect(0,0,200,200);
    drawBee(x,y);
    x = update(x);
    y = update(y);
    ctx.strokeRect(0,0,200,200);
}, 30);

var keyNames = {
    32: "space",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    16: "Shift",
    18: "Alt",
    13: "Enter",
};
$("body").keydown(function (event) {
    console.log(keyNames[event.keyCode]);
});
*/
/*
Создаем переменные Width (Ширина) и Height (Высота).
 */
let width = ballAnimation.width;
let height = ballAnimation.height;
/*
Создаем функцию Ball, в будуйщем будет наш шарик.
 */
let Ball = function() {
    /*
    Начальная позития шарика.
     */
    this.x = width / 2;
    this.y = height / 2;
        /*
        Начальное направление шарика или куда он будет двигаться в начале.
         */
        this.xSpeed = 5;
        this.ySpeed = 0;
};
/*
Этот код делает так если шарик коснулся рамки то он появится на протевоположной стороне в которую он врезался.
 */
Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if (this.x < 0){
        this.x = width;
    } else if (
    this.x > width) {
        this.x = 0;
    }
    if (this.y < 0) {
        this.y = height;
    } else if (
        this.y > height) {
    this.y = 0;}
};

/*
Создаем функцию которая будет рисовать наш шарик.
 */
Ball.prototype.draw = function () {
    /*
    Задаем параметры для функции Circle: Где шарик появится, его радиус и заполнение шарика
    чтобы он был полностью черным.
     */
    circle(this.x, this.y, 10,true);
};

/*
Создаем скорость передвижения шарика и куда он будет двигатся в определенном
направлении когда будет нажата определленная клавиша.
 */
Ball.prototype.setDirection = function (direction) {
    if (direction === "up") {
        this.xSpeed = 0;
        this.ySpeed = -5;
    } else if (direction === "down") {
        this.xSpeed = 0;
        this.ySpeed = 5;
    } else if (direction === "left") {
        this.xSpeed = -5;
        this.ySpeed = 0;
} else if (direction === "right") {
        this.xSpeed = 5;
        this.ySpeed = 0;
    } else if (direction === "stop") {
        this.xSpeed = 0;
        this.ySpeed = 0;
    }
}

/*
Создаем переменную Ball которая будет создавать новые шарики в новых позитиях.
 */
let ball = new Ball();
/*
Специальные номера для клавиш или что будет если нажать на одну из них.
 */
let keyActions = {
    32: "stop",
    37: "left",
    38: "up",
    39: "right",
    40: "down"
};

/*$ обозначает что мы пишем на языке JQuery. */$("body").keydown(function (event) {
    /* Создаем переменную Direction. Она будет отвечать за направление шарика. */
    let direction = keyActions[event.keyCode];
    ball.setDirection(direction);
});
setInterval(function () {
    /* Очишает весь canvasBall. */
    ctx.clearRect(0,0,width,height);
    /* Функция которая рисует шарик. */
    ball.draw();
    /* Функция которая задает позитию шарика. */
    ball.move();
    /* Рисует рамку для canvasBall чтобы было гораздо легче передвигать шарик. */
    ctx.strokeRect(0,0,width,height);
    /* Шарик будет перерисовыватся каждые 30 милисекунд. */
}, 30);