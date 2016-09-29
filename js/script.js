" use strict ";

var display = document.getElementById("display");

function oneToTen (){

  var text = "oneToTen()" + '</br>';
  text += "***OUTPUT***" + '</br>';
  for (var i = 1; i <= 10; i++){
    text += i + '</br>';
  }
  display.innerHTML = text;
}

function oddNumbers(){
  var text = "oddNumbers()" + '</br>';
  text += "***OUTPUT***" + '</br>';
  for (var i = 1; i < 20; i++){
    text += i % 2 == 0 ? "" : i + '</br>'
  }
  display.innerHTML = text;
}

function squareNumbers(){
  var text = "squareNumbers()" + '</br>';
  text += "***OUTPUT***" + '</br>';
  for (var i = 1; i <= 10; i++){
    var square = i * i;
    text += square + '</br>'
  }
  display.innerHTML = text;
}

function random4(){
  var text = "random4()" + '</br>';
  text += "***OUTPUT***" +'</br>';
  for (var i = 0; i < 4; i++){
    var rnd = Math.floor(Math.random() * 99 + 1);
    text += rnd + '</br>';
  }
  display.innerHTML = text;
}

function even(n){
  var text = "even(" + n + ")" + '</br>';
  text += "***OUTPUT***" +'</br>';
  for (var i = 2; i < n; i++){
    if(i % 2 == 0){
      text += i + '</br>';
    }
  }
  display.innerHTML = text;
}

function power(n){
  var text = "power(" + n + ")" + '</br>';
  text += "***OUTPUT***" +'</br>';
  text += 2 + '</br>';
  var two = 2;
  for(var i = 2; i <= n; i++){
    two *= 2;
    text += two + '</br>';
  }
  display.innerHTML = text;
}

function areWeThereYet(){
    var answer;
    while(answer != "Yes"){
      answer = prompt("Are we there yet?");
      display.innerHTML = "Are we there yet?" + '</br>';
      display.innerHTML = answer + '</br>';
    }
    display.innerHTML = "Good!";
}
function triangle(n){
  var text = "triangle()" + '</br>';
  text += "***OUTPUT***" +'</br>';
  for(var i = 1; i <= n; i++){
    for(var j = 1; j <= i; j++){
      text += "*";
    }
    text += '</br>';
  }
  display.innerHTML = text;
}
function tableSquare(){
  var text = "tableSquare()" + '</br>';
  text += "***OUTPUT***" +'</br>';
  for (var i = 1; i <= 4; i++){
    text += "|";
    for(var j = i; j <= 4 * i; j += i){
      text += j + "|";
    }
    text += '</br>';
  }
  display.innerHTML = text;
}
function tableSquares(n){
  var text = "tableSquares(" + n + ")" + '</br>';
  text += "***OUTPUT***" +'</br>';
  for (var i = 1; i <= n; i++){
    text += "|";
    for(var j = i; j <= n * i; j += i){
      text += j + "|";
    }
    text += '</br>';
  }
  display.innerHTML = text;
}
