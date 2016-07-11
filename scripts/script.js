$(document).ready(function() { 
  move();
  $("#go-button").on("click", function(){ 
    train.start(3); 
    train.move();
    console.log("I go hard.");
  }); 
  reset();
  $("#reset-button").on("click", function() {
    train.reset();
    console.log("I went back.");  
  });
});

function move() {
  train.move();
  window.requestAnimationFrame(move);
}

function reset() {
  train.reset();
}

var train = {
  xPos: 0,
  yPos: 0,
  height: 0,
  width: 0,
  color: 0,
  xVel: 0,
  yVel: 0,
  
  start: function(speed) {
    this.xVel = speed;
  },
  
  move: function() {
    this.xPos = this.xPos + this.xVel;
    console.log(this.xPos);
    if (this.xPos > 800) {
      $("#player").css("left", 800); 
    }
    else {
      $("#player").css("left", this.xPos);
    }
  },
  
  reset: function() {
    this.xPos = 0;
    this.xVel = 0;
    speed = 0;
    $("#player").css("left", 0);
  }
}

