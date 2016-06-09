function makeBlock() {

  var player = document.getElementById("player");
  var myDiv = document.createElement('div');
  myDiv.id = 'block';
  myDiv.className = 'block';
  document.getElementsByTagName('body')[0].appendChild(myDiv);

  var sheet = document.createElement('style')
  sheet.innerHTML = "#block {background-color: #8000FF; position: absolute; left: " + document.getElementById('block-x').value + "%; top:" + document.getElementById('block-y').value + "px; height: " + document.getElementById('block-height').value +"px; width: " + document.getElementById('block-width').value +"%; animation: ;} #player { animation: runaway 3s 1 linear; animation-fill-mode: forwards;}";
  document.body.appendChild(sheet);
  
  
}

  // console.log(document.getElementById('block-width').value);

// }
//
// function checkCrosssing() {
//
//   var player = document.getElementById("player");
//
// //   player.style.animation = "runaway 3s linear steps(1)";
//
//   if (document.getElementById("block-x").value == 30 && document.getElementById("block-y").value == 550 && document.getElementById("block-width").value == 15) {
//     this.sheet.innerHTML = #block {background-color: #8000FF; position: absolute; left: " + document.getElementById('block-x').value + "%; top:" + document.getElementById('block-y').value + "px; height: " + document.getElementById('block-height').value +"px; width: " + document.getElementById('block-width').value +"%; animation: ;} #player { animation: runaway 3s 1 linear; animation-fill-mode: forwards;}";
//   }
//   else {
//     player.style.animation = "";
//   }
//
// }

