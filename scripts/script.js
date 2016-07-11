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
  makeBridge();
  $("#block-maker").on("click", function() {
    bridge.start(); 
    bridge.makeBridge();
    console.log("I made a bridge");
    return false;
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

function makeBridge() {
  bridge.makeBridge();
}

var bridge = {
  bridgeX: 0,
  bridgeY: 0,
  bridgeHeight: 0,
  bridgeWidth: 0,
  
  start: function() {
    this.bridgeX = document.getElementById("block-x").value + "px";
    this.bridgeY = document.getElementById("block-y").value + "px";
    this.bridgeHeight = document.getElementById("block-height").value;
    this.bridgeWidth = document.getElementById("block-width").value;
  },
  
  makeBridge: function() {
    
    $("#empty-box").css("position", "absolute");
    $("#empty-box").css("left", this.bridgeX);
    $("#empty-box").css("top", this.bridgeY);
    $("#empty-box").css("height", this.bridgeHeight);
    $("#empty-box").css("width", this.bridgeWidth);
    $("#empty-box").css("background-color", "#8000ff");
  }
}

// function bridgeMaker() {
//
//   var bridgeX, bridgeY, bridgeHeight, bridgeWidth;
//
//   this.bridgeX = document.getElementById("block-x").value;
//   this.bridgeY = document.getElementById("block-y").value;
//   this.bridgeHeight = document.getElementById("block-height").value;
//   this.bridgeWidth = document.getElementById("block-width").value;
//
//   $("#empty-box").css("left", this.bridgeX);
//   $("#empty-box").css("top", this.bridgeY);
//   $("#empty-box").css("height", this.bridgeHeight);
//   $("#empty-box").css("width", this.bridgeWidth);
//   $("#empty-box").css("background-color", "#8000ff");
// }

