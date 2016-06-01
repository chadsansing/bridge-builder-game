function makeBlock() {
  
  var myDiv = document.createElement('div');
  myDiv.id = 'block';
  myDiv.className = 'block';
  document.getElementsByTagName('body')[0].appendChild(myDiv);
  
  var sheet = document.createElement('style')
  sheet.innerHTML = "#block {background-color: #000; position: absolute; left: " + document.getElementById('block-x').value + "px; top:" + document.getElementById('block-y').value + "px; height: " + document.getElementById('block-height').value +"px; width: " + document.getElementById('block-width').value +"px;}";
  document.body.appendChild(sheet);
  
  // console.log(document.getElementById('block-width').value);
  
}

