function makeBlock() {
  
  var myDiv = document.createElement('div');
  myDiv.id = 'block';
  myDiv.className = 'block';
  document.getElementsByTagName('body')[0].appendChild(myDiv);
  
  // var myBlockXPos = document.getElementById("block-x-pos").value;
  // var myBlockYPos = document.getElementById("block-y-pos").value;
  // var myBlockHeight = document.getElementById("block-height").value;
  // var myBlockWidth = document.getElementById("block-width").value;
  //
  // this.myBlockXPos = myBlockXPos;
  // this.myBlockXYos = myBlockYPos;
  // this.myBlockHeight = myBlockHeight;
  // this.myBlockWidth = myBlockWidth;
  
  var sheet = document.createElement('style')
  sheet.innerHTML = "#block {background-color: #000; positon: fixed; left: " + document.getElementById('block-x-pos').value + "px; top:" + document.getElementById('block-y-pos').value + "px; height: " + document.getElementById('block-height').value +"px; width: " + document.getElementById('block-width').value +"px;}";
  document.body.appendChild(sheet);
  
  // myDiv.style.position = "absolute";
  // myDiv.style.left = this.myBlockXPos + "px";
  // myDiv.style.top =  this.myBlockYPos + "px";
  // myDiv.style.height = this.myBlockHeight + "px";
  // myDiv.style.width = this.myBlockWidth + "px";
  
  console.log(document.getElementById('block-width').value);
  
  // document.getElementById("block").style.left = this.myBlockXPos;
  // document.getElementById("block").style.top = this.myBlockYPos;
  // document.getElementById("block").style.height = this.myBlockHeight;
  // document.getElementById("block").style.width = this.myBlockWidth;
  // document.getElementById("block").style.background = "#000";
  
}

