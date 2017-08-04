
var tog = 0;
var ur;
var ul;
var ll;
var lr;
var added;
var score = 0;
var scr = '';
var correct = [];
var entry = [];
var turn = 0;
var lastOne= [];
var sound1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var sound2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var sound3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var sound4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
var sound5 = new Audio("http://soundjax.com/reddo/47434%5EBUZZER.mp3");
sound5.volume = 0.2;
//buzzer sound from soundjax.com
var colorNum;
var z = 0;
$(document).ready(function(){
  bindClickHandlers();
});
function bindClickHandlers(){
  $(".slider").click(toggle);
  $(".reset").click(start);
  $(".strict").click(indLight);
}
function startGame(z){
  $(".score").text('01');
  score = 1;
  correct = [];
  $(".bam").children().off('mouseup');
  $(".bam").children().off('mousedown');
  $(".bam").children().off('click');

  nextStep(0);
}
function nextStep(x){
  entry = [];
  colorNum = Math.floor(Math.random()*4) + 1;
  correct.push(colorNum);
  turn = 0;
  lastOne = [];
  setTimeout(function(){
  do {
    nextColor(turn, turn + 1);
    turn += 1;
} while(turn < x);}, 500);
}
function youWin(){
  $('.score').text('YA');
  $(".game").append('<div class="victory"> You Won! <a class="link"  href="https://www.google.com/search?q=birds+with+arms&tbm=isch" target="_blank">Your Prize</a> or <span onclick="reset()">Reset?</span></div>' )
}
function checkArrs(){
  if (entry.toString() == correct.toString()){
    if(score < 20){
    score += 1;
    lastOne = [];
    nextStep(score);}
    else{youWin();}
  }
  else{
    if($(".indicator").css('background-color') == "rgb(0, 128, 0)"){
      sound5.play();
      $('.score').text('NO');
      setTimeout(function(){reset()}, 800);
      return;
    }
    entry = [];
    lastOne = [];
    turn = 0;
    sound5.play();
    setTimeout(function(){
    do {
      nextColor(turn, turn+1);
      turn += 1;
    }while(turn < score)}, 800);
  }
}
function start(){
  if($(".indicator").css('background-color') == 'rgb(0, 0, 0)'){}
  else if ($(".score").text() == '00' ){
    startGame(1);
  }
  else{reset();}
};
function clearTime(){
  if(entry.length == correct.length){
    checkArrs();
  }
  else if(entry.length < correct.length){
      if(entry[entry.length - 1] != correct[entry.length - 1]){
        sound5.play();
        if($(".indicator").css('background-color') == "rgb(0, 128, 0)"){
          $('.score').text('NO');
          setTimeout(function(){reset()}, 800);
          return;
        }
        entry = [];
        lastOne = [];
        turn = 0;
        clearTimeouts();
        setTimeout(function(){
        do {
          nextColor(turn, turn+1);
          turn += 1;
        }while(turn < score)}, 300);
    }
  }
}
function indLight(){
  if ($(".indicator").css('background-color') == 'rgb(0, 0, 0)'){}
  else if($(".indicator").css('background-color') == 'rgb(255, 0, 0)'){
    $(".indicator").css('background-color', 'green'); $(".indicator").css('box-shadow', '0px 0px 20px 5px green');}
  else {
    $(".indicator").css('background-color', 'red');
    $('.indicator').css('box-shadow', '');
  }
}
function reset(){
  lastOne = [];
  clearTimeouts();
  $(".score").text('00');
  $(".indicator").css('background-color', 'red');
  $('.indicator').css('box-shadow', '');
  score = 0;
  entry = [];
  correct = [];
  turn = 0;
  z = 0;
  $('.victory').remove();
}
function toggle(){
  if(tog == 1){
    $(".slider").css('margin-left', '25px');
    clearTimeouts();
    tog = 0;
    $(".score").text('');
    $(".indicator").css('background-color', 'black');
    $(".bam").children().off('mouseup');
    $(".bam").children().off('mousedown');
    $(".bam").children().off('click');
    $('.indicator').css('box-shadow', '');
    $('.start').off('click');
    $('.victory').remove();
    score = 0;
    entry = [];
    correct = [];
    turn = 0;
    z = 0;
    lastOne=[];
  }
else{
  $(".slider").css('margin-left', '0px');
  tog = 1;
  addClasses2();
  reset();
}
}
function addClasses2(){
  $(".ul").mousedown(function(){$(".ul").css('background-color', '#55ff56');sound1.play();});
  $(".ul").mouseup(function(){$(".ul").css('background-color', '#297729');});
  $(".ur").mouseup(function(){$(".ur").css('background-color', '#990000');});
  $(".ur").mousedown(function(){$(".ur").css('background-color', 'red');sound2.play();});
  $(".lr").mouseup(function(){$(".lr").css('background-color', '#999900');});
  $(".lr").mousedown(function(){$(".lr").css('background-color', 'yellow');sound3.play();});
  $(".ll").mouseup(function(){$(".ll").css('background-color', '#000066');});
  $(".ll").mousedown(function(){$(".ll").css('background-color', 'blue');sound4.play();});
}
function clearTimeouts(){
  clearTimeout(ul);
  clearTimeout(ur);
  clearTimeout(ll);
  clearTimeout(added);
  clearTimeout(lr);
}
function addClasses(){
  $(".ul").click(function(){
    if(entry.length < correct.length){entry.push(1);}
    clearTime();});
  $(".ur").click(function(){
    if(entry.length < correct.length){entry.push(2);}
    clearTime();});
  $(".lr").click(function(){
    if(entry.length < correct.length){entry.push(3);}
    clearTime();});
  $(".ll").click(function(){
    if(entry.length < correct.length){entry.push(4);}
    clearTime();});
}
function nextColor(x, y){
  $(".bam").children().off('mouseup');
  $(".bam").children().off('mousedown');
  $(".bam").children().off('click');
  lastOne.push(1);
  if(score < 10){
    $(".score").text('0' + score.toString());
  }
  else{$(".score").text(score.toString());}
    if (correct[x] == 1){
      ul = (setTimeout(function(){$(".ul").css('background-color', '#55ff56');}, ((800 * x) + (700 * (y-1)))));
      setTimeout(function(){sound1.play();}, ((800 * x) + (700 * (y-1))));
      setTimeout(function(){$(".ul").css('background-color', '#297729');},((800 * x))+ (700 * (y)));
  }
    else if (correct[x] == 2){
      ur = (setTimeout(function(){$(".ur").css('background-color', 'red');}, ((800 * x) + (700 * (y-1)))));
      setTimeout(function(){sound2.play();}, ((800 * x) + (700 * (y-1))));
      setTimeout(function(){$(".ur").css('background-color', '#990000')},((800 * x))+ (700 * (y)));
  }
    else if (correct[x] == 3){
      lr = (setTimeout(function(){$(".lr").css('background-color', 'yellow');}, ((800 * x) + (700 * (y-1)))));
      setTimeout(function(){sound3.play();}, ((800 * x) + (700 * (y-1))));
      setTimeout(function(){$(".lr").css('background-color', '#999900')}, ((800 * x))+ (700 * (y)));
  }
    else {
      ll = (setTimeout(function(){$(".ll").css('background-color', 'blue');}, ((800 * x) + (700 * (y-1)))))
      setTimeout(function(){sound4.play();}, ((800 * x) + (700 * (y-1))));
      setTimeout(function(){$(".ll").css('background-color', '#000066')},((800 * x))+ (700 * (y)));
  }
  if(correct.length == lastOne.length){
    added = setTimeout(function(){
      addClasses();
      addClasses2();
    },((800 * x)+(700 * y)));
    lastOne = [];}
}
