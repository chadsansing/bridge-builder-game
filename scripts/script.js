//What do we do with var whistleSFX = document.getElementById("train-whistle")?
//Do we need var train, bridge?
//How do we get the bridge to be trated like a .land?

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
  gravity: .06125,
  gravy: true,
    
  start: function(speed) {
    this.xVel = speed;
  },
  
  move: function() {
    
    // if(this.gravy) {
    //   console.log("This gravy is dope.");
    // }
        
    this.xPos = this.xPos + this.xVel;
    if (this.xPos > 800) {
      this.hammerTime(); 
    }
    
    this.yVel = this.yVel + this.gravity;
    this.yPos = this.yPos + this.yVel;
    var that = this;
    
    $(".land").each(function() {
      var land = $(this);
      var position = land.position();
      var leftEdge = position.left;
      var rightEdge = position.left + land.width();
      //console.log(leftEdge, rightEdge);
      
      if(that.xPos >= leftEdge && that.xPos <= rightEdge && that.yPos >= (position.top -16)) {
        that.yPos = position.top - 16;
        console.log("over land");
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
    
    $("#my-bridge").css("position", "absolute");
    $("#my-bridge").css("left", this.bridgeX);
    $("#my-bridge").css("top", this.bridgeY);
    $("#my-bridge").css("height", this.bridgeHeight);
    $("#my-bridge").css("width", this.bridgeWidth);
    $("#my-bridge").css("background-color", "#8000ff");
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

