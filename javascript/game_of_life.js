function buttonPressed() {
    alert('Button pressed');
}

function GameOfLife(canvas) {
    this.canvas = canvas;
    alert("GameOfLife instantiated");
}

GameOfLife.prototype.getCanvas = function() {
    return this.canvas;
};