//Where did the bridge go?
//How do we get the bridge to be treated like a .land?

var whistleSFX;

$(document).ready(function() { 
  whistleSFX = document.getElementById("train-whistle");
  move();
  $("#go-button").on("click", function(){ 
    train.start(3); 
    train.move();
  }); 
  reset();
  $("#reset-button").on("click", function() {
    train.reset();
  });
  makeBridge();
  $("#block-maker").on("click", function() {
    bridge.start(); 
    bridge.makeBridge();
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
  gravity: .06125,
  gravy: true,
    
  start: function(speed) {
    if (this.xVel == 0 && this.xPos == 0) {
      whistleSFX.play();
    }
    this.xVel = speed;
  },
  
  move: function() {
        
    this.xPos = this.xPos + this.xVel;
    if (this.xPos > 800) {
      this.hammerTime(); 
    }
    
    this.yVel = this.yVel + this.gravity;
    this.yPos = this.yPos + this.yVel;
    var that = this;
    
    $(".ground").each(function() {
      var land = $(this);
      var position = land.position();
      var leftEdge = position.left;
      var rightEdge = position.left + land.width();
      var topEdge = position.top - 16;
      var bottomEdge = position.top + land.height();
      
      if(that.xPos >= leftEdge && that.xPos <= rightEdge && that.yPos >= topEdge && that.yPos <= bottomEdge) {
          that.yPos = position.top - 16;
          that.yVel = 0;
      }
      
    });
    
    if(this.yPos > 540) {
      this.hammerTime();
    }
    
    $("#player").css("left", this.xPos).css("top", this.yPos);
  },
  
  hammerTime: function() {
    this.xVel = 0;
  },
  
  reset: function() {
    this.xPos = 0;
    this.xVel = 0;
    this.yPos = 0;
    this.yVel = 0;
    }
}

function makeBridge() {
  bridge.makeBridge();
}

var bridge = {
  x: 0,
  y: 0,
  height: 0,
  width: 0,
  
  start: function() {
    this.x = document.getElementById("block-x").value + "px";
    this.y = document.getElementById("block-y").value + "px";
    this.height = document.getElementById("block-height").value;
    this.width = document.getElementById("block-width").value;
    console.log(this);
  },
  
  makeBridge: function() {
    
    $("#my-bridge").css("position", "absolute");
    $("#my-bridge").css("left", this.x);
    $("#my-bridge").css("top", this.y);
    $("#my-bridge").css("height", this.height);
    $("#my-bridge").css("width", this.width);
    $("#my-bridge").css("background-color", "#8000ff");
    $("#my-bridge").css("display", "block");
    console.log("hey now");
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
//   $("#my-bridge").css("left", this.bridgeX);
//   $("#my-bridge").css("top", this.bridgeY);
//   $("#my-bridge").css("height", this.bridgeHeight);
//   $("#my-bridge").css("width", this.bridgeWidth);
//   $("#my-bridge").css("background-color", "#8000ff");
// }

