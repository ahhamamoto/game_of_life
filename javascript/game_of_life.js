function GameOfLife(canvas, area) {
    this.area = area;
    this.canvas = canvas;
    this.columns = this.canvas.width / (this.area + 1) + 1;
    this.lines = this.canvas.height / (this.area + 1) + 1;
    this.ctx = canvas.getContext("2d");
}

GameOfLife.prototype.getCanvas = function() {
    return this.canvas;
};

GameOfLife.prototype.drawGrid = function() {
    this.ctx.beginPath();

    var flag = 1;
    for (var i = 1; i <= this.columns; i++) {
        this.ctx.moveTo(i * this.area, 0);
        this.ctx.lineTo(i * this.area, this.canvas.height);
        if (flag > 0) {
            flag = -1;
        } else {
            flag = 1;
        }
    }

    var flag = -1;
    for (var i = 1; i <= this.lines; i++) {
        this.ctx.moveTo(0, i * this.area);
        this.ctx.lineTo(this.canvas.width, i * this.area);
        if (flag > 0) {
            flag = -1;
        } else {
            flag = 1;
        }
    }

    this.ctx.stroke();
}

// pinta o grid de preto e branco
GameOfLife.prototype.blackAndWhite = function() {
    this.ctx.beginPath();

    var lastFlag = -1;
    for (var i = 0; i <= this.lines; i++) {
        var flag = -lastFlag;
        for (var j = 0; j <= this.columns; j++) {
            if (flag > 0) {
                this.ctx.moveTo(j * this.area, i * this.area);
                this.ctx.lineTo(j * this.area + this.area, i * this.area);
                this.ctx.lineTo(j * this.area + this.area, i * this.area + this.area);
                this.ctx.lineTo(j * this.area, i * this.area + this.area);
                this.ctx.fill();
                flag = -1;
            } else {
                flag = 1;
            }
        }
        lastFlag = flag;
    }
}

GameOfLife.prototype.clearGrid = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

function drawGrid() {
    var game = new GameOfLife(document.getElementById("gof"), 20);
    game.drawGrid();
}

function blackAndWhite() {
    var game = new GameOfLife(document.getElementById("gof"), 20);
    game.blackAndWhite();
}

function clearGrid() {
    var game = new GameOfLife(document.getElementById("gof"), 20);
    game.clearGrid();
}